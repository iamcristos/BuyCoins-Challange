[![Build Status](https://travis-ci.org/iamcristos/BuyCoins-Challange.svg?branch=master)](https://travis-ci.org/iamcristos/BuyCoins-Challange) [![Coverage Status](https://coveralls.io/repos/github/iamcristos/BuyCoins-Challange/badge.svg)](https://coveralls.io/github/iamcristos/BuyCoins-Challange)

# BuyCoins-Challange

## Description

A BuyCoin Coding Challange creates a graphQL API that calculates the price of Bitcoin in naira. The API endpoint is https://buycoins-api.herokuapp.com/graphiql

## How to setup the project

You need Nodejs Installed to be able to run this project on your machine.

### Installing

    - Clone Repository
        https://github.com/iamcristos/BuyCoins-Challange
    - Install Dependencies
        npm install
    - Start Application
        npm run start:dev
    - Run Test
        npm test
    - Run Coverage Report
        npm run coveralls

### CalculatePrice

    {
    calculatePrice(input:{margin:0.2 type:buy exchangeRate: 363}){
        calculatePrice
    }
    }

    kindly note type must either be buy or sell

### Tech Stack

- Node v10+
- Yarn / NPM (latest)
- Apollo-Server (latest)
- Jest + Coveralls
- Git + Github
