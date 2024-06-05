# MVC Architecture Starter Kit for React Express Applications

Welcome to the MVC Architecture Starter Kit repository! This starter kit provides a solid foundation for building React Express applications following the Model-View-Controller (MVC) architecture pattern. It includes essential technologies and tools to streamline development and ensure scalability, security, and maintainability.

## Features

- 🏗️ **MVC Architecture**: Organize your code into separate models, views, and controllers for better structure and maintainability.
- 🛠️ **Prisma**: Use Prisma as the ORM (Object-Relational Mapping) tool for database interaction, making database operations more efficient and intuitive.
- 🛡️ **Zod**: Utilize Zod for schema validation to ensure data integrity and prevent common errors.
- 📧 **Nodemailer**: Integrate Nodemailer for sending emails, facilitating communication with users or administrators.
- 📦 **Bun**: Bundling tool to optimize and bundle your JavaScript and CSS files for production deployment.
- 🎨 **ShadcnUI**: Integrate ShadcnUI for ready-to-use UI components and design elements to enhance user interface development.
- 🌐 **Axios**: Make HTTP requests easily with Axios, a promise-based HTTP client, simplifying communication between the client and server.
- 💻 **TypeScript**: Develop your application with TypeScript for enhanced type safety, providing better code quality and easier refactoring.
- 🔐 **JWT & bcryptjs**: Implement JSON Web Tokens (JWT) and bcryptjs for secure authentication and password hashing, ensuring user data protection.

## Getting Started

To get started with this starter kit, follow these steps:

1. Clone this repository to your local machine.
2. Install dependencies by running `bun install`
3. Set up your database configuration in the `.env` file.
4. Start the development server by running `bun dev`.
5. Start the frontend vite development server by running `cd view && bun dev`.
6. Start the development server by running `bun build`.
7. Start the frontend vite development server by running `cd view && bun build`.

## Directory Structure

```
├── controllers/ # Controller logic
├── Middlewares/ # Application middlewares
├── Libs/ # Reusable Helper functions
├── Logs/ # Winston logs
├── Prisma/ # Database models (Prisma)
├── Schemas/ # Zod validation schemas
├── models/ # Data model classes for Prisma integration
├── public/ # Public assets (images, stylesheets)
├── routes/ # Express route definitions
├── view/ # Frontend views (React components)
├── view/components/ # Frontend application code (React components)
├── view/src/assets/ # Frontend asset files (React components)
├── view/src/lib/ # Frontend reusable methods (React components)
├── .env # Environment variables configuration
├── package.json # Project dependencies and scripts
└── README.md # Project documentation
```

## Explanation

- **controllers/**: The controllers directory houses the logic for handling various HTTP requests. Each controller is responsible for a specific set of routes or API endpoints.
- **Middlewares/**: Application middlewares such as authentication middleware can be stored here.
- **Libs/**: Reusable helper functions and utilities can be stored here.
- **Logs/**: Winston logs can be stored here for logging purposes.
- **Prisma/**: Database models defined using Prisma's schema can be stored here.
- **Schemas/**: Zod validation schemas can be stored here to ensure data integrity.
- **models/**: Data models classes for integration with Prisma client can be stored here.
- **public/**: Public assets such as images, stylesheets, and client-side JavaScript files reside here. These files are accessible to the client-side code.
- **routes/**: Express route definitions are stored in this directory. Routes define the endpoints of your API and map incoming requests to the appropriate controller methods.
- **view/**: Frontend views, React components are stored here. These files define the user interface of your application.
- **.env**: The .env file is used for configuring environment variables. This is where sensitive information like API keys or database credentials should be stored.
- **package.json**: This file contains metadata about the project and its dependencies. It also includes scripts for running tasks such as starting the development server or building the project for production.
- **README.md**: This file provides an overview of the project structure and may include additional information about how to get started, contributing guidelines, and licensing details.

## Contributing

Contributions are welcome! If you have suggestions for improvements, feature requests, or found any issues, please open an issue or submit a pull request. Let's make this starter kit even better together.
