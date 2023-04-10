# node-express-api-boilerplate

Boilerplate code for a Node.js API powered by Express.js

## Introduction

Lightweight starter code for building a Node.js API powered by Typescript and Express. Includes a few dev dependencies to facilitate development.

**Built with:**

- Typescript
- Node.js
- Express

**Development dependencies:**

- Eslint
- Prettier
- ts-node (JIT compilation, i.e. no need to prebuild TS -> JS)
- Nodemon (hot-reloading)

## Get started

1. Clone the repository
2. Run the following command to create a .env-file based on the sample contained in the repo:  
   `cp .sample.env .env`
3. Run 1 of the following 3 commands in the root folder of the repo:
   - `npm run start` (pre-compiles the TS -> JS)
   - `npm run dev` (utilizes ts-node for JIT compilation)
   - `npm run dev-watch` (utilizes ts-node for JIT compilation and Nodemon for hot-reloading)
4. Open http://localhost:1337/ in your browser
