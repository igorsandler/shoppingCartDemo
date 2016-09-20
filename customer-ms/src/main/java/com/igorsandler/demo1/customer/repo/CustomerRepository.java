/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.igorsandler.demo1.customer.repo;

import com.igorsandler.demo1.customer.model.Customer;
import java.util.List;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

/**
 *
 * @author Igor Sandler
 */
public interface CustomerRepository
        extends PagingAndSortingRepository<Customer, String>
{

    List<Customer> findByFirstName(@Param("firstName") String firstName);

    List<Customer> getByLastName(@Param("lastName") String lastName);
}
