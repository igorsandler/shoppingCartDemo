/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.igorsandler.demo1.shoppingcart.controllers;

import com.igorsandler.demo1.shoppingcart.model.Ack;
import com.igorsandler.demo1.shoppingcart.model.ShoppingCartEntry;
import com.igorsandler.demo1.shoppingcart.model.ShoppingCartEntryDetails;
import com.igorsandler.demo1.shoppingcart.model.ShoppingCartPurchaseReport;
import com.igorsandler.demo1.shoppingcart.services.ShoppingCardService;
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
public class ShoppingCartController
{

    @Autowired
    ShoppingCardService shoppingCartService;

    @ResponseStatus(HttpStatus.OK)
    @RequestMapping(value =
    {
        "/{customerId}/add"
    }, method = RequestMethod.GET)
    public ShoppingCartEntry addProduct(
            @PathVariable() String customerId,
            @RequestParam(value = "productId", required = true) String productId,
            @RequestParam(value = "quantity", required = false, defaultValue = "1") Integer quantity)
    {
        return shoppingCartService.addProduct(customerId, productId, quantity);
    }

    @ResponseStatus(HttpStatus.OK)
    @RequestMapping(value =
    {
        "/{customerId}/remove"
    }, method = RequestMethod.GET)
    public ShoppingCartEntry removeProduct(
            @PathVariable() String customerId,
            @RequestParam(value = "productId", required = true) String productId,
            @RequestParam(value = "quantity", required = false, defaultValue = "1") Integer quantity)
    {
        return shoppingCartService.removeProduct(customerId, productId,quantity);
    }

    @ResponseStatus(HttpStatus.OK)
    @RequestMapping(value =
    {
        "/{customerId}"
    }, method = RequestMethod.GET)
    public Iterable<ShoppingCartEntryDetails> getAll(@PathVariable() String customerId) throws Exception
    {
        return shoppingCartService.getAllProducts(customerId);
    }

    @ResponseStatus(HttpStatus.OK)
    @RequestMapping(value =
    {
        "/{customerId}/product/{productId}"
    }, method = RequestMethod.GET)
    public ShoppingCartEntryDetails getSingleEntryDetails(
            @PathVariable("customerId") String customerId,
            @PathVariable("productId") String productId) throws Exception
    {
        return shoppingCartService.getProduct(customerId, productId);
    }

    @ResponseStatus(HttpStatus.OK)
    @RequestMapping(value =
    {
        "/{customerId}/entry/{productId}"
    }, method = RequestMethod.GET)
    public ShoppingCartEntry getSingleEntry(
            @PathVariable("customerId") String customerId,
            @PathVariable("productId") String productId) throws Exception
    {
        return shoppingCartService.getShoppingCartEntry(customerId, productId);
    }

    @ResponseStatus(HttpStatus.OK)
    @RequestMapping(value =
    {
        "/{customerId}/purchase"
    }, method = RequestMethod.GET)
    public ShoppingCartPurchaseReport purchase(@PathVariable() String customerId) throws Exception
    {
        return shoppingCartService.purchase(customerId);
    }

    @ResponseStatus(HttpStatus.OK)
    @RequestMapping(value =
    {
        "/{customerId}/clean"
    }, method = RequestMethod.GET)
    public Ack clean(@PathVariable() String customerId) throws Exception
    {
        shoppingCartService.clean(customerId);
        return new Ack(true);
    }
}
