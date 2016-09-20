/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.igorsandler.demo1.shoppingcart;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

/**
 *
 * @author Igor Sandler
 */
@SpringBootApplication
@EnableEurekaClient
public class Application
{
    private static final Logger log = LoggerFactory.getLogger(Application.class);

    public static void main(String[] args)
    {
        SpringApplication.run(Application.class);
    }
}
