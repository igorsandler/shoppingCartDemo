/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.igorsandler.demo1.product.controller;

import com.igorsandler.demo1.product.service.IProductService;
import com.igorsandler.demo1.product.shared.model.PurchaseResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Igor Sandler
 */
@Component
@RestController
@RequestMapping("/")
public class ProductController
{

    @Autowired
    IProductService service;

    @ResponseStatus(HttpStatus.OK)
    @RequestMapping(value =
    {
        "/{productId}/purchase"
    }, method = RequestMethod.GET)
    public PurchaseResponse purchaseProduct(
            @PathVariable("productId") String productId,
            @RequestParam(value = "quantity", required = false, defaultValue = "1") Integer quantity)
    {
        return service.purchase(productId, quantity);
    }
}
