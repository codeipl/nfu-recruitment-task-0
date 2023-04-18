# NFU Studio Recruitment task 0

<img src="https://res.cloudinary.com/dyuv3x8ly/image/upload/v1665135860/nfuBlog/mnikwzh3shwtiovcrmfl.png" height="320" alt="NFU Studio logo" />

This React app displays the login form and communicates with the API.

---

## App Description
- At the start, the user will see a login form, which consists of two fields and a button
- Each of the presented fields has a validation, without which the user will not be able to submit the form and move to the next screen
- Submitting the form sends an API request and receives a response, the values of which are passed to the next screen
- If the form is submitted correctly, the user will be redirected to the next screen, where the response from the API will be shown
- If an error occurs, the user will be redirected to an error screen

## Setup
Install the dependencies:
```
yarn install
yarn add axios @types/axios
yarn add react-router-dom
yarn add react-hook-form
```

## Development Server
Start the development server on http://localhost:5174
```
yarn dev
```

## Used technologies
- React + TypeScript + Tailwind CSS
