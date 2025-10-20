# React + TypeScript + Next.js + Electron Boilerplate

This is a full-stack boilerplate for building cross-platform desktop applications using **React**, **TypeScript**, **Next.js**, and **Electron**. It includes backend support via **Prisma ORM** and is preconfigured to work with **MySQL**, although the database provider can be easily customized.

## Features

- **React** for building UI components
- **TypeScript** for type safety
- **Next.js** for server-side rendering and routing
- **Electron** for creating native desktop applications
- **Prisma ORM** for type-safe database access
- **MySQL** as the default relational database (configurable)

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn
- MySQL database (or another supported Prisma provider)

### Installation

1. **Clone the repository**
  ```bash
  git clone https://github.com/your-username/your-repo-name.git
  cd your-repo-name
  ```
2. Install dependencies
  ```bash
  npm install
  # or
  yarn install
  ```
3. Start the development environment
  ```bash
  npm run dev
  ```

## Customization

To switch to another supported database (e.g., PostgreSQL, SQLite), update the `DATABASE_URL` in `.env` and modify the `prisma/schema.prisma` file accordingly. Then regenerate the Prisma client and rerun migrations.

## License

This project is licensed under the [MIT License](LICENSE).

