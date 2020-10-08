# SDC - Chewy Product Detail

> Product Detail Module for Chewy Site

## Related Projects

  - https://github.com/SDC-Arcadia

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Access Product Detail at http://localhost:3001/?productIds
> ProductIds P001 - P100

## Requirements

- Node 12.13.1
- npm 6.12.1

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
```
```docker
main docker command to build: docker-compose up --build -d
run seeding container: docker build -f Dockerfile.seed .
```

# API Endpoints

## Get Full Product Data
```sh
GET /productFullData/productID
```
Returns: JSON Object with all product details

## Get Product
```sh
GET /productFullData/productID
```
Returns: JSON Object with product Name, Brand, Seller

## Add Product
```sh
POST /productInfo/
```
Returns: JSON Object with productId of added product and database insert message

## Update Product
```sh
PUT /productInfo/productId
```
Returns: JSON Object with database update status message

## Delete Product
```sh
DELETE /productInfo/productId
```
Returns: JSON Object with database delete status message



