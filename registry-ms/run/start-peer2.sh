#!/bin/bash
java -Xmx128m -Dspring.profiles.active=peer2 -Dlogging.config=file:./logback-peer2.xml    -jar ../target/registry-ms-1.0.0.1.jar
