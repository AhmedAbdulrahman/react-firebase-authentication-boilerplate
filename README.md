# React Firebase Authentication Boilerplate

> This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

### Included Features

- Email-based Sign Up, Sign In, Sign Out

# Instructions

1.  Visit [firebase.google.com/](https://firebase.google.com/) and add new web project
2.  Goto Authentication, from Sign-in Method turn on (Enable) Email-based authentication
3.  Navigate to `Project Overview` page then click on `Add Firebase to your web app` copy your authentication config values
4.  You need to create a `.env` file in the root directory of your project, then copy `Environment Variables` below and replace it's value with your firebase `config` object.

```sh
  REACT_APP_FIREBASE_API_KEY = "API_KEY"
  REACT_APP_FIREBASE_AUTH_DOMAIN = "AUTH_DOMAIN"
  REACT_APP_FIREBASE_DATABASE_URL = "DATABASE_URL"
  REACT_APP_FIREBASE_PROJECT_ID = "PROJECT_ID"
  REACT_APP_FIREBASE_STORAGE_BUCKET = "STORAGE_BUCKET"
  REACT_APP_FIREBASE_SENDER_ID = "SENDER_ID"
```

## Run locally

To run the app with the proper debug tools, run

```bash
npm i
npm start
```

The app will then be available on port **3000**
