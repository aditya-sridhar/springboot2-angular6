# Learning Springboot

## What does this Project Cover

This project has a sample springboot code showing how to create Rest Services for both GET and POST requests

## Prerequisites

1. Install Maven and Ensure The IDE is pointing to the right maven folder
2. Install Postman. Postman is a REST Client which can be used to Test REST End points

## Cloning and running the applications

Import the project into an IDE like Spring Tool Suite.
the application can be run in the following ways
1. Run the File `DemoApplication.java` inside the package `com.example.demo`
2. In the project folder run the following command in command prompt
`mvn spring-boot:run`

Spring boot Runs on an Embedded container in local so does not need to the war file to be deployed anywhere in local

## Project structure

The package `com.example.demo` has the `DemoApplication.java` file which ensures that the application runs in an embedded container and forms the starting point of the code

The package `com.example.controller` had the Rest Controller defined. The controller has all the end points defined and mentions which function should be executed when an end point is called

The package `com.example.models` has all the java models defined

The `application.properties` file is used to define various properties such as the port in which the embedded container runs , the context path of the application etc

## Postman Collection

Import the postman collections from `postman` folder into Postman.
This postman collection has all the REST endpoints which are implemented in springboot.
