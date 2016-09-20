/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.igorsandler.demo1.shoppingcart.repo;

import com.igorsandler.demo1.shoppingcart.model.ShoppingCartEntry;
import com.igorsandler.demo1.shoppingcart.model.ShoppingCartPk;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author Igor Sandler
 */
public interface ShoppingCartRepository
        extends PagingAndSortingRepository<ShoppingCartEntry, ShoppingCartPk>
{

    ShoppingCartEntry getByCustomerIdAndProductId(
            String customerId,
            String productId);

    
    Iterable<ShoppingCartEntry> findByCustomerId(String customerId);
    
    @Transactional
    void removeByCustomerId(String customerId);

}
