/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.igorsandler.demo1.product.service;

import com.igorsandler.demo1.product.model.Product;
import com.igorsandler.demo1.product.repo.ProductRepository;
import com.igorsandler.demo1.product.shared.model.EPurchaseStatus;
import com.igorsandler.demo1.product.shared.model.PurchaseResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Igor Sandler
 */
@Service
public class ProductService implements IProductService
{

    @Autowired
    ProductRepository repo;

    @Override
    public PurchaseResponse purchase(String productId, int quantity)
    {
        PurchaseResponse resp = new PurchaseResponse();
        resp.setProductId(productId);
        resp.setRequestedQuantity(quantity);

        try
        {
            Product product = repo.findOne(productId);
            if (product != null)
            {
                int availableQuantity = product.getQuantity();
                resp.setAvailableQuantity(availableQuantity);
                resp.setName(product.getName());
                resp.setDescription(product.getDescription());
                resp.setPrice(product.getPrice());
                if (availableQuantity >= quantity)
                {
                    int remainingQuantity = availableQuantity - quantity;
                    resp.setRemainingQuantity(remainingQuantity);
                    product.setQuantity(remainingQuantity);
                    repo.save(product);
                    resp.setStatus(EPurchaseStatus.SUCCESS);
                } else
                {
                    resp.setStatus(EPurchaseStatus.FAILURE_NON_SUFFICIENT_QUANTITY);
                }

            } else
            {
                resp.setStatus(EPurchaseStatus.FAILURE_PRODUCT_DOES_NOT_EXIST);
            }
        } catch (Exception e)
        {
            resp.setStatus(EPurchaseStatus.FAILURE_EXCEPTION);
            resp.setException(e.toString());
        }

        return resp;
    }

}
