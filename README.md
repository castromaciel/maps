<h1 align="center">
Maps App
</h1>

<div align="center">

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white) 

</div>


The objective of the application is to create a React application using Mapbox. It allows us to carry out a search for places, locate ourselves in the selected place on the map, generate a line with the nearest route. As well as show us the distance in kilometers and the time in minutes it would take to reach our destination by vehicle.

<img width="1440" alt="image" src="https://user-images.githubusercontent.com/83432755/216842528-9efd503b-0164-4413-b774-07c5716e0dd5.png">
<img width="1440" alt="image" src="https://user-images.githubusercontent.com/83432755/216842481-4ba52f9b-b977-4475-9558-e21a4a6f29a3.png">


## Apis Used are: 
  - [Geocoding](https://docs.mapbox.com/api/search/geocoding/) to search places.
  - [Directions](https://docs.mapbox.com/api/navigation/directions/) to generate polyline and show distance and time between two points.

## Development

To get a local copy, clone it using:
```
git clone https://github.com/castromaciel/maps-app.git
```

### Install dependencies:

```
yarn install
or
npm install 
```

### Available Scripts

In this project, you can run the following scripts:

| Script        | Description                                         |
| ------------- | --------------------------------------------------- |
| yarn build    | Builds the app for production to the `dist` folder. |
| yarn deploy   | Deploys the app at github pages.                    |    
| yarn dev      | Runs the app in the development mode.               |
| yarn preview  | Start a local web server that serves the built solution from ./dist for previewing |
| yarn test     | Runs tests with jest.                               |

## Base Dependencies

- [axios](https://github.com/axios/axios) for networking.
- [mapbox-gl](https://docs.mapbox.com/mapbox-gl-js) for building web maps.
- [sass](https://sass-lang.com/) for stylesheets.
- [jest](https://facebook.github.io/jest/) and [react-testing-library](https://testing-library.com/docs/react-testing-library/intro/) for testing.

## Folder Structure

```
template-vite-react-ts
├── node_modules
├── public
│   └── vite.svg
└── src
    ├── __tests__
    ├── apis
    ├── components
    ├── context
    ├── helper
    ├── hooks
    ├── interfaces
    ├── screens
    ├── index.scss
    ├── main.tsx
    ├── MapsApp.tsx
    └── vite-env.d.ts
├── .env
├── .eslintrc.json
├── .gitignore
├── .babel.config.json
├── .deploy.sh
├── index.html
├── jest.config.ts
├── jest.setup.ts
├── package.json
├── README.md
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.js
├── yarn.lock
```

## Styleguide

For coding styling, I decided to use [eslint](https://eslint.org/) and the [eslint-airbnb configuration](https://github.com/airbnb/javascript#readme), with some personal modifications.

## Credits

Maps-app is built and maintained by [Castro Maciel](https://github.com/castromaciel)

## License

This project is licensed under the terms of the [MIT license](./LICENSE).
