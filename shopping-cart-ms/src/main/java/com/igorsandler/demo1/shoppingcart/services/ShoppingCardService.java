/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.igorsandler.demo1.shoppingcart.services;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.igorsandler.demo1.shoppingcart.client.ProductClient;
import com.igorsandler.demo1.shoppingcart.model.Product;
import com.igorsandler.demo1.shoppingcart.model.ShoppingCartEntry;
import com.igorsandler.demo1.shoppingcart.model.ShoppingCartEntryDetails;
import com.igorsandler.demo1.shoppingcart.model.ShoppingCartPk;
import com.igorsandler.demo1.shoppingcart.repo.ShoppingCartRepository;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;
import javax.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
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

    public void purchase(String customerId)
    {
        shoppingCartRepo.removeByCustomerId(customerId); // Dummy operation, should be replaced with real purchase workflow
    }

    public void clean(String customerId)
    {
        shoppingCartRepo.removeByCustomerId(customerId);
    }

    public ShoppingCartEntry addProduct(String customerId, String productId)
    {
        ShoppingCartPk pk = new ShoppingCartPk();
        pk.setCustomerId(customerId);
        pk.setProductId(productId);

        ShoppingCartEntry scEntry;
        if (!shoppingCartRepo.exists(pk))
        {
            scEntry = new ShoppingCartEntry();
            scEntry.setPrimaryKey(pk);
            scEntry.setQuantity(1);
            scEntry.setProductId(pk.getProductId());
            scEntry.setCustomerId(pk.getCustomerId());
            shoppingCartRepo.save(scEntry);
        } else
        {
            scEntry = shoppingCartRepo.findOne(pk);
            scEntry.setQuantity(scEntry.getQuantity() + 1);
            shoppingCartRepo.save(scEntry);
        }
        return scEntry;
    }

    public ShoppingCartEntry removeProduct(String customerId, String productId)
    {
        ShoppingCartPk pk = new ShoppingCartPk();
        pk.setCustomerId(customerId);
        pk.setProductId(productId);

        ShoppingCartEntry scEntry;
        if (shoppingCartRepo.exists(pk))
        {
            scEntry = shoppingCartRepo.findOne(pk);
            if (scEntry.getQuantity() > 1)
            {
                scEntry.setQuantity(scEntry.getQuantity() - 1);
                shoppingCartRepo.save(scEntry);
            } else
            {
                shoppingCartRepo.delete(pk);
                scEntry.setQuantity(0);
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
                                        return scde;
                            })
                            .collect(Collectors.toList());
                }
            }
        }
        return result;
    }

}
