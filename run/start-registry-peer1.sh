#!/bin/bash
java -Xmx64m -Xverify:none  -Dspring.profiles.active=registry-peer1 -Dlogging.config=file:./logback-registry-peer1.xml    -jar ../registry-ms/target/registry-ms-1.0.0.1.jar > /dev/null 2>&1 
