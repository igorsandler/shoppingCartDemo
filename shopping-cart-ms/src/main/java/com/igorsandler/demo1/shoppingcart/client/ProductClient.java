/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.igorsandler.demo1.shoppingcart.client;

import com.igorsandler.demo1.shoppingcart.model.Product;
import org.springframework.cloud.netflix.feign.FeignClient;
import org.springframework.hateoas.Resources;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

/**
 *
 * @author Igor Sandler
 */
@FeignClient("product-service")
public interface ProductClient
{

    @RequestMapping(
            value = "/products/search/findByProductIdIn",
            method = RequestMethod.GET)
    Resources<Product> getProductsByIds(@RequestParam("ids") Object[] productIds);
}
