/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.igorsandler.demo1.shoppingcart.model;

import com.igorsandler.demo1.product.shared.model.PurchaseResponse;
import java.util.ArrayList;
import java.util.Collection;

/**
 *
 * @author Igor Sandler
 */
public class ShoppingCartPurchaseReport
{

    Collection<PurchaseResponse> products = new ArrayList<>();
    Float total = 0f;

    public Collection<PurchaseResponse> getProducts()
    {
        return products;
    }

    public void setProducts(Collection<PurchaseResponse> products)
    {
        this.products = products;
    }

    public Float getTotal()
    {
        return total;
    }

    public void setTotal(Float total)
    {
        this.total = total;
    }

}
