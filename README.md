# Seuss Treasury

A React books application for MTM6404, built from the instructor's Vite starter with React Router 6 and the Seussology API.

## Run locally

```sh
npm install
npm run dev
```

Open the localhost URL printed in the terminal. Keep the terminal running. An internet connection is needed to load the books, covers, and quotes.

```sh
npm run build
```

## Pages

- `/`: book covers retrieved from the API. Select a cover to open its details.
- `/books/:id`: the selected book's title, cover, and description.
- `/quotes`: ten random quotes retrieved each time the page opens.

The Books and Quotes navigation is available on every page.

## Course references

- [Instructor's starter](https://github.com/imdac/mtm6404-seuss-treasury)
- [Seussology API documentation](https://seussology.info)
- [Instructor's Pokedex React example](https://github.com/imdac/mtm6404-pokedex-react-final): routes, links, route parameters, and fetching inside effects.
- [Full React Tutorial, lesson 19](https://github.com/iamshaunjp/Complete-React-Tutorial/blob/lesson-19/dojo-blog/src/Home.js): loading and fetch error handling, from the tutorial linked in the course resources.

The starter's React 18 and Vite 3 structure is preserved. React Router 6 matches Lecture 10. These older dependency versions still produce npm audit warnings after compatible updates.
