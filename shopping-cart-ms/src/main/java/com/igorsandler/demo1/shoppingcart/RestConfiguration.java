/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.igorsandler.demo1.shoppingcart;

import com.igorsandler.demo1.shoppingcart.model.ShoppingCartEntry;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurerAdapter;

/**
 *
 * @author Igor Sandler
 */
@Configuration
public class RestConfiguration extends RepositoryRestConfigurerAdapter
{

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config)
    {
        config.exposeIdsFor(ShoppingCartEntry.class);
    }
}
