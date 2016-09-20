/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.igorsandler.demo1.shoppingcart.model;

import java.io.Serializable;

/**
 *
 * @author Igor Sandler
 */
public class ShoppingCartEntryDetails implements Serializable
{

    public ShoppingCartEntryDetails()
    {
    }

    private Integer quantity;

    private String customerId;

    private String productId;

    private String productName;

    private String productDescription;

    private Float productPrice;

    public Integer getQuantity()
    {
        return quantity;
    }

    public void setQuantity(Integer quantity)
    {
        this.quantity = quantity;
    }

    public String getCustomerId()
    {
        return customerId;
    }

    public void setCustomerId(String customerId)
    {
        this.customerId = customerId;
    }

    public String getProductId()
    {
        return productId;
    }

    public void setProductId(String productId)
    {
        this.productId = productId;
    }

    public String getProductName()
    {
        return productName;
    }

    public String getProductDescription()
    {
        return productDescription;
    }

    public Float getProductPrice()
    {
        return productPrice;
    }

    public void setProductName(String productName)
    {
        this.productName = productName;
    }

    public void setProductDescription(String productDescription)
    {
        this.productDescription = productDescription;
    }

    public void setProductPrice(Float productPrice)
    {
        this.productPrice = productPrice;
    }

}
