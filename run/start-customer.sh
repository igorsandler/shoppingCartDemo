#!/bin/bash
java -Xmx128m -Dspring.profiles.active=customer -Dlogging.config=file:./logback-customer.xml -Dserver.port=902$1   -jar ../customer-ms/target/customer-ms-1.0.0.1.jar > /dev/null 2>&1
