# Thinkific Multi-User Journal Assignment

## Getting Started

### 1. Get to know project tech stack

This simple project is a starting point for your take-home test. It is built with the following technologies:

- [React](https://reactjs.org/), a JavaScript library for building user interfaces
- [Next.js](https://nextjs.org/), a frontend framework for server-side rendering, easy routing, serverless RESTful API
- [Prisma](https://www.prisma.io/), a database ORM for Node.js
  - Scaffolding is set up for SQLite
  - You are free to use other databases of your choice

### 2. Install npm dependencies

```
yarn
```

### 3. Create .env file

```
cp .env.example .env
```

### 4. Prepare DB

Create a local SQLite database and run migrations.

```
npx prisma migrate dev --name init
```

Seed the database with the sample data from [`prisma/seed.js`](./prisma/seed.js).

```
npx prisma db seed --preview-feature
```

### 5. Start the app

```
yarn dev
```

The app is now running, navigate to [`http://localhost:3000/`](http://localhost:3000/) in your browser to explore its UI.

## Submission

Update this README file by answering the questions below.

### Date Or Reflection

December 19, 2021

### Location of deployed application (not necessary for Junior Engineers)

https://full-stack-journal.olliecodes.com/

### Instructions to run assignment locally

Same as above but include `--schema=./prisma/local.schema.prisma` in the command setting up local database.

### Time spent

Approximately 5 hours

### Assumptions made

Using css frameworks is allowed.
Using authentication libraries is allowed.

### Shortcuts/Compromises made

- Better error handling could be added.
- Loading states could be added.
- Auth callback could be handled to generate a new user if the user is not found.
- End-to-end testing could be added.
- UI components and styles could be refactored to be more reusable.

### Assume your application will go into production...

#### 1) What would be your approach to ensuring the application is ready for production (testing)?
- Add full test coverage.
- Configure a CI/CD pipeline.
- Make sure hosting solution is adequate for the application.
- Make sure the database hosting is set up properly and is scalable to handle production traffic.
- Add alternative authentication providers.
- Makesure OAuth providers are properly configured.
- Handle authentication callbacks on the backend.
- Handle loading states on the front end.
- Handle error states on the front end and on the backend.

#### 2) How would you ensure a smooth user experience as 1000’s of users start using your app simultaneously?
- Make sure frontend and backend are hosted and configured properly to handle production traffic.
- Research alternative database solutions that might provide better performance.
- Leverage full SSR capabilities to render the frontend more efficiently.
- Add analytics to track user behavior.
- Add error tracking to the application.

#### 3) What key steps would you take to ensure application security?
- Make sure the application is not exposing any sensitive information, like passwords, tokens, etc.
- Make sure the application is not vulnerable to classic cyber attacks, like brute force attacks, sql injection, XSS, ddos, etc.
- Make sure user session is properly configured and secured.
- Use static analysis tools to find vulnerabilities in the application.

### What did you not include in your solution that you want us to know about? Were you short on time and not able to include something that you want us to know about? Please list it here so that we know that you considered it.
- Customizing the SignIn page.
- Adding alternative authentication providers.
- Loading states.
- Error states.

### Other information about your submission that you feel it's important that we know if applicable.

### Your feedback on this technical challenge

Really enjoyed this challenge. I learned alot about Prisma ORM. Would have like to see more details about styling the frontend in the project document.

