# NFU Studio Recruitment task 0

<img src="https://res.cloudinary.com/dyuv3x8ly/image/upload/v1665135860/nfuBlog/mnikwzh3shwtiovcrmfl.png" height="320" alt="NFU Studio logo" />

This React app displays the login form and communicates with the API.

---

## App Description
- On startup, the user sees a login form, which has two fields and a button
- Each of the presented fields has a validation, without which user can not submit the form and move to the next screen
- At the same time a request is sent to the API and a response is received
- If the form is submitted correctly, the user will be redirected to the next screen, where the response from the API will be shown

## Setup
Install the dependencies:
```
yarn install
yarn add react-router-dom @types/react-router-dom
yarn add axios @types/axios
```

## Development Server
Start the development server on http://localhost:5174
```
yarn dev
```

## Used technologies
- React + TypeScript
