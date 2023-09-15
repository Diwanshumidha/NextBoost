---
title: Custom Next.js Setup
---

# Custom Next.js Setup <Badge type="warning" text="beta" />

In a custom Next.js setup, you have the flexibility to choose and configure various features for your project. This page provides an overview of the available features and how to include them in your project.

## Available Features

### 1. Tailwind CSS

[Tailwind CSS](https://tailwindcss.com/) is a utility-first CSS framework that allows you to quickly style your application. It provides a set of pre-defined utility classes that you can use to style your components.

To include Tailwind CSS in your project:

1. During project creation, select the option to include Tailwind CSS.

2. Follow the prompts and instructions provided by the 'create-next-project' tool to set up Tailwind CSS in your project.

### 2. NextAuth.js

[NextAuth.js](https://next-auth.js.org/) is an authentication library for Next.js applications. It provides a straightforward way to add authentication to your project, including features like OAuth providers, email/password authentication, and more.

To include NextAuth.js in your project:

1. During project creation, select the option to include NextAuth.js for authentication.

2. Follow the prompts and instructions to configure authentication settings and providers for your project.

### 3. Prisma

[Prisma](https://prisma.io/) is a modern database toolkit that simplifies database access in your Next.js application. It supports various databases, including PostgreSQL, MySQL, and SQLite.

To include Prisma in your project:

1. During project creation, select the option to include Prisma for database access.

2. Follow the prompts and instructions to configure your database connection and models using Prisma.

## Configuration Options

In addition to feature selection, you can also customize various aspects of your Next.js project, such as:

- Environment variables: Set environment variables for your project to handle sensitive information or configuration settings.

- API routes: Create custom API routes to handle server-side logic and data fetching.

- Styling: Customize the styling of your application using CSS or CSS-in-JS libraries.

- Deployment: Choose your preferred hosting and deployment method for your Next.js project.

## Example Configuration

Here's an example of how your 'create-next-project' command might look when selecting multiple features and configuring your project:

::: warning
Please keep in mind that Custom App are in the Beta phase, so you may encounter some issues.
:::
```bash
npx create-next-boost-custom

# When prompted, select:
# - Tailwind CSS
# - NextAuth.js for authentication
# - Prisma for database access
# - Other configuration options as needed
