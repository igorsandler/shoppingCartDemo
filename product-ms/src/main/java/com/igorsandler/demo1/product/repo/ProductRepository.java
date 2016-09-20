/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.igorsandler.demo1.product.repo;

import com.igorsandler.demo1.product.model.Product;
import java.util.List;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

/**
 *
 * @author Igor Sandler
 */
public interface ProductRepository
        extends PagingAndSortingRepository<Product, String>
{
    //@Query( "select o from Product o where productId in :ids" )
    List<Product> findByProductIdIn(@Param("ids") List<String> productIds);
}
