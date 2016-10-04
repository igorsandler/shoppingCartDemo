/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.igorsandler.demo1.product.service;

import com.igorsandler.demo1.product.shared.model.PurchaseResponse;

/**
 *
 * @author Igor Sandler
 */
public interface IProductService
{

    PurchaseResponse purchase(String productId, int quantity);

}
