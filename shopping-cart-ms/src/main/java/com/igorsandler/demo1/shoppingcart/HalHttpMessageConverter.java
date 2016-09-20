/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.igorsandler.demo1.shoppingcart;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import org.springframework.context.MessageSource;
import org.springframework.context.support.MessageSourceAccessor;
import org.springframework.hateoas.ResourceSupport;
import org.springframework.hateoas.core.EvoInflectorRelProvider;
import org.springframework.hateoas.hal.Jackson2HalModule;
import org.springframework.http.MediaType;
import org.springframework.http.converter.json.AbstractJackson2HttpMessageConverter;
import org.springframework.stereotype.Component;

/**
 *
 * @author Igor Sandler
 */
@Component
public class HalHttpMessageConverter extends AbstractJackson2HttpMessageConverter
{

    public HalHttpMessageConverter(MessageSource messageSource)
    {
        super(new ObjectMapper(), new MediaType("application", "hal+json", DEFAULT_CHARSET));
        objectMapper.registerModule(new Jackson2HalModule());
        objectMapper.setHandlerInstantiator(new Jackson2HalModule.HalHandlerInstantiator(
                new EvoInflectorRelProvider(), 
                null, 
                new MessageSourceAccessor(messageSource)));
        // customize your mapper if needed
        objectMapper.enable(SerializationFeature.INDENT_OUTPUT);
        objectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
        objectMapper.configure(DeserializationFeature.ACCEPT_SINGLE_VALUE_AS_ARRAY, true);
    }

    @Override
    protected boolean supports(Class<?> clazz)
    {
        return ResourceSupport.class.isAssignableFrom(clazz);
    }

}
