#!/bin/bash
java -Xmx128m -Dspring.profiles.active=peer1 -Dlogging.config=file:./logback-peer1.xml    -jar ../target/registry-ms-1.0.0.1.jar
