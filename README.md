# WEB422 - Week 4: Handling Events & Rendering Data

**Live Demo**: [web422-week4-handling-events-rendering-data](https://web-422-week4-handling-events-rendering-data-cj9k.vercel.app/)

## Overview

This project is a practice for WEB422 Week 4 covering essential concepts in React including handling events, rendering data, and incorporating state management. The repository demonstrates multiple ways of rendering data, working with components, and exploring user interactions through events.

## Features

- **Click Counter Components**: Demonstrates the use of event handlers to increment counters.

- **Clock Component**: Displays a real-time clock that updates every second.

- **Fetching Data Components**: Various methods of data fetching, including:
  - Using `useState` and `useEffect`.
  - Implementing SWR (Stale-While-Revalidate) for data revalidation.
  - Static rendering of data using `getStaticProps`.

- **Rendering Practice**: Shows different approaches to rendering data conditionally, including if/else and inline conditional statements.

## Technologies Used

- **React**: Core framework for building user interfaces.
- **Next.js**: Utilized to pre-render data with `getStaticProps()`.
- **SWR**: For fetching data while keeping it up-to-date.
- **JavaScript ES6**: Syntax used for logic and state management.

## Project Structure

The project is broken down into multiple components that each address different key learning points:

- **ClickCounter.js**: Handles button click events and updates state.
- **ClickCounterBySecond.js**: Demonstrates managing timers with clicks.
- **Clock.js**: Real-time clock that shows dynamic UI updating.
- **PostData.js, PostDataUseEffect.js, PostDataSWR.js**: Different approaches for fetching data and rendering it using React hooks and SWR.
- **PostDataStatic.js**: Example of static site generation in Next.js.
- **DataRendering.js & DataRenderingPractice.js**: Illustrate conditional rendering techniques.

## Running the Project Locally

### Clone the Repository

```bash
git clone https://github.com/gkurkjian/WEB422_Week4_Handling_Events_-_Rendering_Data.git
```

### Install Dependencies

```bash
npm install
```

### Run the Development Server

```bash
npm run dev
```

The project should now be running on [http://localhost:3000](http://localhost:3000).

## Deployment

The project is deployed on Vercel and can be accessed live [here](https://web-422-week4-handling-events-rendering-data-cj9k.vercel.app/). The deployment pipeline is set up through Vercel for seamless integration.

## Key Concepts Learned

- **Handling Events**: Used event handlers like `onClick` to create interactive components.
- **State Management**: Utilized `useState` to manage and update UI based on user actions.
- **Data Fetching**: Explored multiple data-fetching techniques to understand client-side, server-side, and SWR data handling.
- **Next.js Features**: Leveraged `getStaticProps()` to fetch data at build time for static pages.

## Contributing

If you would like to contribute to this project, feel free to fork the repository and submit a pull request. Contributions are always welcome!

## License

This project is open-source and available under the MIT License.

## Contact

For questions or collaboration opportunities, please contact **gkurkjian**.

