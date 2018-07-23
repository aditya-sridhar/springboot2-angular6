# Simple App Using Angular 6 as Front End and Spring Boot 2 as the Server

## What is the Use of This Repo
This App is a Simple Angular 6 and Springboot 2 App which uses

1. Angular 6
 * Angular Components
 * HTTP Client
 * Angular Routing
 * Services
 * Very Basic Bootstrap
2. SpringBoot 2
 * Springboot RestController
 * Service, Repository(DAO) from Spring Framework
 * Autowiring is used as well to inject the Dependencies

This Applications template can be copied and used to build other bigger applications.

The CSS used is very basic since the main aim of this project is to focus on angular 6

## What Does this Application do

This Application has just two pages.
1. A Customer List Page which Lists out all the Customers
2. A Customer Details Page which will display the Details for the Selected Customer

## Prerequites to Run the Application

### Install NodeJS

Refer https://nodejs.org/en/ to install NodeJS

### Install Angular CLI

Use the following command to install angular CLI

```bash
npm install -g @angular/cli
```

Refer https://cli.angular.io/ to know more about angular CLI

### Install maven

Install Maven and Ensure IDE is pointing to Right Maven folder

Also Ensure maven is set as a path variable to that maven commands can be run easily

Refer https://maven.apache.org/ for maven installation

## Steps to Run the Application

Clone the repo into local

Open the client folder and install the npm packages using the following commands

```bash
cd client
npm install
```

Go Back to the Parent Project Folder and build the package using the following commands

```bash
cd ..
mvn clean package
```

Go to server folder and start the Application using the following commands

```bash
cd server
mvn spring-boot:run
```

The Application runs on **localhost:8080** and the application runs in a embedded container in local

## Folder Structure

**client** : This has the Client Code implemented using Angular 6

**server** : This has the Springboot code

**pom.xml** : This is multimodule pom. This pom in turn executes the pom within the client and the server folders

## Application Design

### Angular 6

The Components Created are

1. **CustomersComponent** : This Component Is to Display the List of Customers

2. **CustomerdetailsComponent** : This Component Displays the Details for a Single Selected Customer

The Services Created are

1. **DataService** : The Service Hits the SpringBoot REST API In order to get the necessary JSONs

Model Classes Used are

1. **Customer** : This is the model class used for the *CustomersComponent* to define the structure of each customer in the list

2. **CustomerDetails** : This is the model class used for *CustomerdetailsComponent* to define the structure containing all the customer details

3. **CustomerDetailsReq** : This is the model class used to create the POST Request Body for the REST API call

Routing Module is used to Route between the 2 pages in the application
The 2 paths used in the routing module are

1. **/customers**  : This url displays the customer list and points to *CustomersComponent*

2. **/customerdetails/id** : This url displays the details for each customer and points to *CustomerdetailsComponent*

### Springboot 2

The package `com.example.demo` has the `DemoApplication.java` file which ensures that the application runs in an embedded container and forms the starting point of the code

The package `com.example.dao.impl` has the DAO ( Data Access Object ) Defined. The package `com.example.dao` has the interfaces defined for the DAOs.
The **DAO( Data Access Object )** connects to the DataBase and gets the necessary data

The package `com.example.service.impl` has the Services Defined . The package `com.example.service` has the interfaces defined for the Services.
The **Service** is where the business logic is run on the Data which comes from DAO

The package `com.example.controller` has the Rest Controller defined. The controller has all the end points defined and mentions which function should be executed when an end point is called. The Controller also defines which Endpoint Calls which Service

The package `com.example.models` has all the java models defined

The `application.properties` file is used to define various properties such as the port in which the embedded container runs , the context path of the application etc

## Postman Collection

Import the postman collections from `postman` folder into Postman.
This postman collection has all the REST endpoints which are implemented in springboot.

## References

Refer to https://angular.io/guide/quickstart to get an understanding of how angular 6 works
