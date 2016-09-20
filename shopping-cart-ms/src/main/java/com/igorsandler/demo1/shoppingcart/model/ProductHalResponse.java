/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.igorsandler.demo1.shoppingcart.model;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 *
 * @author Igor Sandler
 */
public class ProductHalResponse
{

    @JsonProperty("_embedded")
    ProductHalEmbedded embedded;

    public ProductHalEmbedded getEmbedded()
    {
        return embedded;
    }

    public void setEmbedded(ProductHalEmbedded embedded)
    {
        this.embedded = embedded;
    }

}
