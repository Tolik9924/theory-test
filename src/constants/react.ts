export const REACT_JS = [
  {
    question: 'What are the main features of React?',
    response: [
      ' Component-based architecture, virtual DOM, JSX, one-way data binding, and declarative UI',
    ],
    fullResponse: '',
  },
  {
    question: 'What’s the difference between functional and class components?',
    response: [
      'Functional components are stateless and use hooks for state/lifecycle. Class components use this and have lifecycle methods like componentDidMount',
    ],
    fullResponse: '',
  },
  {
    question: 'What is JSX?',
    response: [
      'JSX is a syntax extension for JavaScript that looks like HTML and is used with React to describe the UI.',
    ],
    fullResponse: '',
  },
  {
    question: 'What is the Virtual DOM and how does React use it?',
    response: [
      'React creates a virtual copy of the real DOM and updates it efficiently by diffing and patching only the changed nodes.',
    ],
    fullResponse: '',
  },
  {
    question: 'Explain reconciliation in React.',
    response: [
      ' It’s the process by which React updates the DOM by comparing the virtual DOM with a previous snapshot and applying minimal DOM operations.',
    ],
    fullResponse: '',
  },
  {
    question: 'What are React Hooks?',
    response: [
      'Functions like useState, useEffect, useContext, etc., that let you use state and lifecycle features in functional components.',
    ],
    fullResponse: '',
  },
  {
    question: 'Difference between useEffect and useLayoutEffect?',
    response: [
      'useEffect runs after the paint. useLayoutEffect runs synchronously before painting, useful for DOM reads/writes.',
    ],
    fullResponse: '',
  },
  {
    question: 'How does useMemo differ from useCallback?',
    response: [
      'useMemo memoizes a computed value; useCallback memoizes a function reference.',
    ],
    fullResponse: '',
  },
  {
    question: 'When would you use useRef?',
    response: [
      'For accessing DOM nodes or keeping mutable values that don’t trigger re-renders.',
    ],
    fullResponse: '',
  },
  {
    question: 'How do you manage global state in a React app?',
    response: [
      'Via Context API, Redux, Zustand, Recoil, Jotai, or React Query for server state.',
    ],
    fullResponse: '',
  },
  {
    question: 'How do you optimize React performance?',
    response: [
      'Use React.memo, useMemo, useCallback, code splitting, lazy loading, avoiding prop drilling.',
    ],
    fullResponse: '',
  },
  {
    question: 'What is code splitting and how do you implement it?',
    response: [
      'Dividing code into smaller chunks for better loading; done using React.lazy() and Suspense.',
    ],
    fullResponse: '',
  },
  {
    question: 'What is React.memo and how does it work?',
    response: [
      ' Higher-order component that memoizes a component unless props change.',
    ],
    fullResponse: '',
  },
  {
    question: 'Explain the concept of "lifting state up".',
    response: [
      'Use React.memo, shouldComponentUpdate, PureComponent, or useMemo, useCallback.',
    ],
    fullResponse: '',
  },
  {
    question: 'What is the purpose of keys in React lists?',
    response: [
      'Keys help React identify which items have changed, are added, or are removed, improving performance.',
    ],
    fullResponse: '',
  },
  {
    question: 'What are the different ways to style a React component?',
    response: [
      'CSS Modules, styled-components, inline styles, and traditional CSS stylesheets.',
    ],
    fullResponse: '',
  },
  {
    question: 'How do controlled and uncontrolled components differ?',
    response: [
      'Controlled components have their value controlled by state. Uncontrolled use refs to access values.',
    ],
    fullResponse: '',
  },
  {
    question: 'How does React handle events differently from native DOM?',
    response: [
      'React uses synthetic events for cross-browser compatibility and performance.',
    ],
    fullResponse: '',
  },
  {
    question: 'How do you implement form validation in React?',
    response: [
      'Manually via state, or using libraries like Formik, React Hook Form, or Yup.',
    ],
    fullResponse: '',
  },
  {
    question: 'Why should keys be unique and stable?',
    response: [
      'To prevent UI bugs from incorrect DOM diffing when list order changes.',
    ],
    fullResponse: '',
  },
  {
    question: 'How do you test React components?',
    response: [
      'Use Jest for unit testing and React Testing Library or Enzyme for UI testing.',
    ],
    fullResponse: '',
  },
  {
    question: 'What is the difference between shallow and deep rendering?',
    response: [
      'Shallow rendering renders only the component, not its children. Deep rendering renders the entire tree.',
    ],
    fullResponse: '',
  },
  {
    question: 'How would you test a component with asynchronous logic?',
    response: [
      'Use async/await with waitFor, findBy* queries in Testing Library, and mock APIs.',
    ],
    fullResponse: '',
  },
  {
    question: 'How do you mock API requests in tests?',
    response: ['Use tools like jest.fn(), msw, or axios-mock-adapter.'],
    fullResponse: '',
  },
  {
    question: 'What are test IDs and how are they used?',
    response: [
      'data-testid is used for selecting elements in tests when accessibility queries aren’t applicable.',
    ],
    fullResponse: '',
  },
  {
    question: 'Explain Context API and its use cases.',
    response: [
      'Used for sharing global data like themes or auth across components without prop drilling.',
    ],
    fullResponse: '',
  },
  {
    question: 'Compare Redux and Context API.',
    response: [
      'Redux is more powerful with middleware, devtools, and async handling; Context is simpler and built-in but not ideal for high-frequency updates.',
    ],
    fullResponse: '',
  },
  {
    question: 'How would you handle error boundaries?',
    response: [
      'Use a class component with componentDidCatch and getDerivedStateFromError.',
    ],
    fullResponse: '',
  },
  {
    question: 'Explain server-side rendering (SSR) in React.',
    response: [
      'Rendering React components on the server (e.g., with Next.js) to improve performance and SEO.',
    ],
    fullResponse: '',
  },
  {
    question: 'What is hydration in React?',
    response: [
      'The process of attaching event listeners and state to a server-rendered HTML page on the client.',
    ],
    fullResponse: '',
  },
  {
    question: 'What are custom hooks and why use them?',
    response: [
      'Custom hooks encapsulate reusable logic using built-in hooks, allowing cleaner and more maintainable code.',
    ],
    fullResponse: '',
  },
  {
    question: 'How does useReducer differ from useState?',
    response: [
      'useReducer is suited for complex state logic or multiple related state transitions, similar to Redux reducers.',
    ],
    fullResponse: '',
  },
  {
    question: 'What is the purpose of useImperativeHandle?',
    response: [
      ' It customizes the instance value exposed to parent components when using forwardRef.',
    ],
    fullResponse: '',
  },
  {
    question: 'How do you implement lazy loading in React?',
    response: [
      `Use React.lazy(() => import('./Component')) with <Suspense fallback={...}>.`,
    ],
    fullResponse: '',
  },
  {
    question:
      'What is the difference between React.lazy and loadable-components?',
    response: [
      'React.lazy is native and works only with default exports. loadable-components supports named exports and SSR.',
    ],
    fullResponse: '',
  },
  {
    question:
      'How do you handle async state updates (like API calls) in React?',
    response: [
      'Use useEffect + fetch, axios, or libraries like React Query, SWR for caching and retries.',
    ],
    fullResponse: '',
  },
  {
    question: 'What is React Query, and how is it different from Redux?',
    response: [
      'React Query handles server-state caching, revalidation, and pagination. Redux manages client state and needs middleware for async logic.',
    ],
    fullResponse: '',
  },
  {
    question: 'What is optimistic UI in React?',
    response: [
      'Updating the UI before the server confirms the change, then reconciling based on the API response (used in React Query, Redux, etc.).',
    ],
    fullResponse: '',
  },
  {
    question: 'How do you persist state across sessions?',
    response: [
      'Use localStorage, sessionStorage, cookies, or libraries like redux-persist.',
    ],
    fullResponse: '',
  },
] as const;
