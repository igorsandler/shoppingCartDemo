/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.igorsandler.demo1.product.shared.model;

import com.fasterxml.jackson.annotation.JsonInclude;

/**
 *
 * @author Igor Sandler
 */
public class PurchaseResponse
{

    EPurchaseStatus status;
    String productId;
    @JsonInclude(JsonInclude.Include.NON_NULL)
    String name;
    @JsonInclude(JsonInclude.Include.NON_NULL)
    String description;
    Integer requestedQuantity;
    @JsonInclude(JsonInclude.Include.NON_NULL)
    Integer availableQuantity;
    @JsonInclude(JsonInclude.Include.NON_NULL)
    Integer remainingQuantity;
    @JsonInclude(JsonInclude.Include.NON_NULL)
    Float price;
    @JsonInclude(JsonInclude.Include.NON_NULL)
    String exception;
    
    

    public EPurchaseStatus getStatus()
    {
        return status;
    }

    public void setStatus(EPurchaseStatus status)
    {
        this.status = status;
    }

    public String getProductId()
    {
        return productId;
    }

    public void setProductId(String productId)
    {
        this.productId = productId;
    }

    public Integer getRequestedQuantity()
    {
        return requestedQuantity;
    }

    public void setRequestedQuantity(Integer requestedQuantity)
    {
        this.requestedQuantity = requestedQuantity;
    }

    public Integer getAvailableQuantity()
    {
        return availableQuantity;
    }

    public void setAvailableQuantity(Integer availableQuantity)
    {
        this.availableQuantity = availableQuantity;
    }

    public Integer getRemainingQuantity()
    {
        return remainingQuantity;
    }

    public void setRemainingQuantity(Integer remainingQuantity)
    {
        this.remainingQuantity = remainingQuantity;
    }

    public String getException()
    {
        return exception;
    }

    public void setException(String exception)
    {
        this.exception = exception;
    }

    public String getName()
    {
        return name;
    }

    public void setName(String name)
    {
        this.name = name;
    }

    public String getDescription()
    {
        return description;
    }

    public void setDescription(String description)
    {
        this.description = description;
    }

    public Float getPrice()
    {
        return price;
    }

    public void setPrice(Float price)
    {
        this.price = price;
    }

}
