# Getting this nice e-commerce running on your machine

## Small description
This nice e-commerce was created with React and aims to showcase the Google Book API in a nice friendly way for users to navigate across all available books in the API. 

This project was developed from Jan 10 to Feb 23 as my final project for the React Js course I took at the [Coderhouse](https://www.coderhouse.com.mx/online/reactjs) learning platform 

## First, lets see the architecture
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
```
.
├── ecommerce-tote
└───-
    ├── README.md     
    ├── src                       # Project components, data, hooks and main App.js to run app
    │   └── ...
    ├── public                    # index that contains our single page app and manifest json for dependencies.
    │   └── index.html
    │   └── manifest.json
    │   └── robots.txt
    └── node_modules              # All dependencies required to run project without issues
        └── ...  
```        

## Some dependencies that I used
1. SCSS
2. NPM (react-router-dom)
3. custom Hooks   
4. Google Books API 

## Prerequisites
* [Node.js](https://nodejs.org/)

## Getting Started

#### 1. Clone this repository from terminal 
```shell
git clone https://github.com/AngelicaGE/ecommerce-tote.git
```
In the project directory, you can run:
#### 2. Run `npm install` to install project dependencies.
#### 3. Run `npm start` to start app in port 3000
```shell
npm install
npm start
```

## Open the app in the development mode
#### 1. Open [http://localhost:3000](http://localhost:3000) to view it in your browser after having done steps from above section.

The page will reload when you make changes
You may also see any lint errors in the console.
