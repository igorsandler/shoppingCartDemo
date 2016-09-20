#!/bin/bash
java -Xmx128m -Dspring.profiles.active=product -Dlogging.config=file:./logback-product.xml -Dserver.port=9012   -jar ../product-ms/target/product-ms-1.0.0.1.jar
