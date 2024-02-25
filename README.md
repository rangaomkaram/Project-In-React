# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## This password Generator project using the react in-built hookes
  1. useState - store state (variables)
    - Used to declare state variables in functional components.
    - It returns an array with two elements: the current state value and a function that lets you update it.
  2. useRef - ref keyword
    - Accessing and Modifying DOM Elements
    - Persisting Values across Renders without Triggering Re-renders:
  3. useCallback 
    - Used to memoize functions, preventing unnecessary re-renders of components that depend on them.
    - It is useful when passing functions as props to child components, to avoid creating new function instances on every render.
  4. useEffect 
   - Used for handling side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM.
   - It takes a function as its first argument, which will be executed after the component renders.