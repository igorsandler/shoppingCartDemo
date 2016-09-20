/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.igorsandler.demo1.shoppingcart.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

/**
 *
 * @author Igor Sandler
 */
@Entity
@Table(name = "shopping_cart")
public class ShoppingCartEntry implements Serializable
{

    public ShoppingCartEntry()
    {
    }

    @JsonIgnore
    @EmbeddedId
    private ShoppingCartPk primaryKey;

    @NotNull
    @Column(name = "quantity")
    private Integer quantity;

    @Column(name = "customer_id",insertable = false, updatable = false)
    private String customerId;

    @Column(name = "product_id",insertable = false, updatable = false)
    private String productId;

    public ShoppingCartPk getPrimaryKey()
    {
        return primaryKey;
    }

    public void setPrimaryKey(ShoppingCartPk primaryKey)
    {
        this.primaryKey = primaryKey;
    }

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

}
