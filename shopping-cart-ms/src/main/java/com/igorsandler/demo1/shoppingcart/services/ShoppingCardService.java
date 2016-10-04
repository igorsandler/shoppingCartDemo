/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.igorsandler.demo1.shoppingcart.services;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.igorsandler.demo1.product.shared.model.EPurchaseStatus;
import com.igorsandler.demo1.product.shared.model.PurchaseResponse;
import com.igorsandler.demo1.shoppingcart.client.ProductClient;
import com.igorsandler.demo1.shoppingcart.model.Product;
import com.igorsandler.demo1.shoppingcart.model.ShoppingCartEntry;
import com.igorsandler.demo1.shoppingcart.model.ShoppingCartEntryDetails;
import com.igorsandler.demo1.shoppingcart.model.ShoppingCartPk;
import com.igorsandler.demo1.shoppingcart.model.ShoppingCartPurchaseReport;
import com.igorsandler.demo1.shoppingcart.repo.ShoppingCartRepository;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;
import javax.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.Resource;
import org.springframework.hateoas.Resources;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;
import org.springframework.web.client.RestTemplate;

/**
 *
 * @author Igor Sandler
 */
@Service
public class ShoppingCardService
{

    @Autowired
    ShoppingCartRepository shoppingCartRepo;

    ObjectMapper mapper = new ObjectMapper();

    @Autowired
    ProductClient productClient;

//    @Autowired
//    private DiscoveryClient discoveryClient;
    @Autowired
    private RestTemplate restTemplate;

    @PostConstruct
    public void postConstructor() throws Exception
    {
    }

    public ShoppingCartPurchaseReport purchase(String customerId)
    {
        ShoppingCartPurchaseReport result = new ShoppingCartPurchaseReport();
        Iterable<ShoppingCartEntry> scEntires = shoppingCartRepo.findByCustomerId(customerId);
        if (scEntires != null)
        {
            Collection<PurchaseResponse> purchaseResponses = StreamSupport
                    .stream(scEntires.spliterator(), false)
                    .map(sce
                            -> 
                            {
                                PurchaseResponse resp = productClient.purchase(sce.getProductId(), sce.getQuantity());
                                if (resp.getStatus() == EPurchaseStatus.SUCCESS)
                                {
                                    shoppingCartRepo.delete(sce);
                                }
                                return resp;
                    })
                    .collect(Collectors.toList());

            Double total = purchaseResponses
                    .stream()
                    .filter(pr -> pr.getStatus() == EPurchaseStatus.SUCCESS)
                    .mapToDouble(pr -> pr.getRequestedQuantity() * pr.getPrice())
                    .sum();

            result.setTotal(total.floatValue());
            result.setProducts(purchaseResponses);

        }
        return result;
    }

    public void clean(String customerId)
    {
        shoppingCartRepo.removeByCustomerId(customerId);
    }

    /**
     *
     * @param customerId
     * @param productId
     * @param quantity
     * @return
     */
    public ShoppingCartEntry addProduct(String customerId, String productId, Integer quantity)
    {
        ShoppingCartPk pk = new ShoppingCartPk();
        pk.setCustomerId(customerId);
        pk.setProductId(productId);

        ShoppingCartEntry scEntry;
        if (!shoppingCartRepo.exists(pk))
        {
            scEntry = new ShoppingCartEntry();
            scEntry.setPrimaryKey(pk);
            scEntry.setQuantity(quantity);
            scEntry.setProductId(pk.getProductId());
            scEntry.setCustomerId(pk.getCustomerId());
            shoppingCartRepo.save(scEntry);
        } else
        {
            scEntry = shoppingCartRepo.findOne(pk);
            scEntry.setQuantity(scEntry.getQuantity() + quantity);
            shoppingCartRepo.save(scEntry);
        }
        return scEntry;
    }

    /**
     *
     * @param customerId
     * @param productId
     * @return
     */
    public ShoppingCartEntry removeProduct(String customerId, String productId, Integer quantity)
    {

        ShoppingCartPk pk = new ShoppingCartPk();
        pk.setCustomerId(customerId);
        pk.setProductId(productId);

        ShoppingCartEntry scEntry;
        if (shoppingCartRepo.exists(pk))
        {
            scEntry = shoppingCartRepo.findOne(pk);
            if (quantity != null && quantity > 0)
            {
                if (scEntry.getQuantity() > quantity)
                {
                    scEntry.setQuantity(scEntry.getQuantity() - quantity);
                    shoppingCartRepo.save(scEntry);
                } else
                {
                    shoppingCartRepo.delete(pk);
                    scEntry.setQuantity(0);
                }
            }
        } else
        {
            scEntry = new ShoppingCartEntry();
            scEntry.setPrimaryKey(pk);
            scEntry.setQuantity(0);
            scEntry.setProductId(pk.getProductId());
            scEntry.setCustomerId(pk.getCustomerId());
        }
        return scEntry;
    }

    public ShoppingCartEntry getShoppingCartEntry(String customerId, String productId) throws Exception
    {
        return shoppingCartRepo.getByCustomerIdAndProductId(customerId, productId);
    }

    public ShoppingCartEntryDetails getProduct(String customerId, String productId) throws Exception
    {
        ShoppingCartEntry sce = shoppingCartRepo.getByCustomerIdAndProductId(customerId, productId);
        if (sce != null)
        {
            Resource<Product> productRes = productClient.getProductsById(productId);
            if (productRes != null)
            {
                Product product = productRes.getContent();
                ShoppingCartEntryDetails scde = new ShoppingCartEntryDetails();
                scde.setProductId(product.getProductId());
                scde.setProductName(product.getName());
                scde.setProductPrice(product.getPrice());
                scde.setProductDescription(product.getDescription());
                scde.setCustomerId(customerId);
                scde.setQuantity(sce.getQuantity());
                scde.setAvailableQuantity(product.getQuantity());
                return scde;
            }
        }
        return null;
    }

    public Iterable<ShoppingCartEntryDetails> getAllProducts(String customerId) throws Exception
    {
        List<ShoppingCartEntryDetails> result = new ArrayList<>();
        Iterable<ShoppingCartEntry> scEntires = shoppingCartRepo.findByCustomerId(customerId);
        if (scEntires != null)
        {
            List<String> productIds = StreamSupport
                    .stream(scEntires.spliterator(), false)
                    .map(sce -> sce.getProductId())
                    .collect(Collectors.toList());

            if (!CollectionUtils.isEmpty(productIds))
            {
                Map<String, ShoppingCartEntry> mapShoppingCartEntryByProductId = StreamSupport
                        .stream(scEntires.spliterator(), false)
                        .collect(Collectors.toMap(sce -> sce.getProductId(), sce -> sce));

                Resources<Product> productsResponse = productClient.getProductsByIds(productIds.toArray());
                Collection<Product> products = productsResponse.getContent();
                if (!CollectionUtils.isEmpty(products))
                {
                    result = products.stream()
                            .map(product
                                    -> 
                                    {
                                        ShoppingCartEntry sce = mapShoppingCartEntryByProductId.get(product.getProductId());
                                        ShoppingCartEntryDetails scde = new ShoppingCartEntryDetails();
                                        scde.setProductId(product.getProductId());
                                        scde.setProductName(product.getName());
                                        scde.setProductPrice(product.getPrice());
                                        scde.setProductDescription(product.getDescription());
                                        scde.setCustomerId(customerId);
                                        scde.setQuantity(sce.getQuantity());
                                        scde.setAvailableQuantity(product.getQuantity());
                                        return scde;
                            })
                            .collect(Collectors.toList());
                }
            }
        }
        return result;
    }

}
