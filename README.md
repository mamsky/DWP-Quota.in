# Quota.in

Quota.in is a web-based demo application that displays the flow and main features of online internet quota top-up services. This application is designed to show how users can easily top up quotas to various operators in just a few simple steps.

## Installation

Install Quota.in with npm

Clone the repository

```bash
  git clone https://github.com/mamsky/Quota.in
  cd Quota.in
```

Run the following command to install the required dependencies via npm:

```bash
    npm install
```

To start the development server for the front-end (React with Vite), run:

```bash
    npm run dev
```

To start the backend server, run:

```bash
    npm run server
```

## Json-Server API Reference

#### Get user

```http
  Local : GET http://localhost:3030/user
  Public: GET https://quota-server-hazel.vercel.app/user
```

| id       | email    | password | name     |
| :------- | :------- | :------- | :------- |
| `number` | `string` | `string` | `string` |

#### Get packages

```http
  Local : GET http://localhost:3030/packages
  Public: GET https://quota-server-hazel.vercel.app/packages
```

| id       | provider | name     | quota    | price    | validity |
| :------- | :------- | :------- | :------- | :------- | :------- |
| `number` | `string` | `string` | `string` | `number` | `string` |

## 🔗 Links

Deployment: https://quota-in.vercel.app

#### Login user data

email: paste@gmail.com
password: 123456

email: agung@gmail.com
password: 123456

email: widya@gmail.com
password: 123456

## Authors

- [@pasteprosmana](https://github.com/mamsky)
