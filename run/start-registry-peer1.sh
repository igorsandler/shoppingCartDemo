#!/bin/bash
java -Xmx128m -Dspring.profiles.active=registry-peer1 -Dlogging.config=file:./logback-registry-peer1.xml    -jar ../registry-ms/target/registry-ms-1.0.0.1.jar
