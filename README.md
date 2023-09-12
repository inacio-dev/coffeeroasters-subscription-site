# Coffeeroasters Subscription Site

This repository contains the implementation of a functional coffee subscription website, created according to the design guidelines provided in the [Frontend Mentor challenge](https://www.frontendmentor.io/challenges/coffeeroasters-subscription-site-5Fc26HVY6). The project was developed using the Astro framework and is fully responsive, adapting to any screen size.

## Table of contents

- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Using Astro](#using-astro)
- [Commands](#commands)
- [Want to learn more?](#want-to-learn-more)
- [Contribution](#contribution)
- [Author](#author)

## Technologies Used

- HTML
- JavaScript
- Tailwind CSS
- Astro
- TypeScript

## Getting Started

Follow the steps below to set up and run the project on your local environment:

1. Clone this repository:

   ```bash
   git clone https://github.com/inacio-dev/coffeeroasters-subscription-site.git

2. Navigate to the project directory:

   ```bash
   cd coffeeroasters-subscription-site

3. Install dependencies using one of the following package managers (choose one):

   ```bash
   npm install
   yarn install
   pnpm install

4. After installing dependencies, start the project:

   ```bash
   npm start
   yarn start
   pnpm start

The site will be available at [http://localhost:4321](http://localhost:4321/).

## Project Structure

Inside your Astro project, you'll see the following folders and files:

   ```bash
      - `/public`: Contains only the favicon.
      - `/src`: Contains all the main files.
        - `/src/components/`: Contains all components used on the pages.
          - `/src/components/Card.astro`: Represents the Card component.
        - `/src/layouts/`: Contains the layout that all pages follow.
          - `/src/layouts/Layout.astro`: Represents the Layout component.
        - `/src/pages/`: Contains all the application's pages.
          - `/src/pages/index.astro`: Represents the index page.
      - `package.json`: Contains project dependencies and scripts.
