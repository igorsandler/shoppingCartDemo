#!/bin/bash
java -Xmx128m -Dspring.profiles.active=router -Dlogging.config=file:./logback-router.xml    -jar ../router-ms/target/router-ms-1.0.0.1.jar > /dev/null 2>&1
