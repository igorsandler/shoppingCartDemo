#!/bin/bash
java -Xmx128m -Dspring.profiles.active=shopping-cart -Dlogging.config=file:./logback-shopping-cart.xml -Dserver.port=9031   -jar ../shopping-cart-ms/target/shopping-cart-ms-1.0.0.1.jar
