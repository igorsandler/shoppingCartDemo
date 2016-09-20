/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.igorsandler.demo1.shoppingcart.model;

import java.util.List;

/**
 *
 * @author Igor Sandler
 */
public class ProductHalEmbedded
{
    List<Product> products;

    public List<Product> getProducts()
    {
        return products;
    }

    public void setProducts(List<Product> products)
    {
        this.products = products;
    }
    
    
}
