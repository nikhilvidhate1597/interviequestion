1..High Order Component in react js ?
--Higher-order components or HOC is the advanced method of reusing the component functionality logic. It simply takes the original component and returns the enhanced component.
--A higher-order component (HOC) is an advanced technique in React for reusing component logic. HOCs are not part of the React API, per se. They are a pattern that emerges from React's compositional nature. Concretely, a higher-order component is a function that takes a component and returns a new component.
--The component transforms props into UI, and a higher-order component converts a component into another component. The examples of HOCs are Redux's connect and Relay's createContainer.
--A higher-order component transforms a component into another component. Note that a HOC doesn't modify the input component. Rather, a HOC composes the original component by wrapping it in a container component.

2..Do you know about SEO ? Is it true that react js supports SEO support
--Search engine optimisation (SEO) is the process of improving the quality and quantity of website traffic to a website or a web page from search engines. SEO targets unpaid traffic (known as “natural” or “organic” results) rather than direct traffic or paid traffic.
--React is a JavaScript framework developed to build interactive and modular UIs. SEO is not a design goal of React but content websites built with React can be optimized to achieve better indexing and ranking.
--React helps build a very user-friendly UI that is also valuable by SEO, so you definitely shouldn't avoid it while creating a user interface for your app/website. However, you should use some tricks to ensure that your React-site is understandable for Google crawlers and, therefore, good for SEO.
--Search engine optimization (SEO) is the process of structuring and organizing a website to expand the volume of traffic by increasing its position and frequency of appearance in search engines, focusing on keywords that reveal the specifics of the site. 
--It helps bring as many people to your web service as possible and helps create organic traffic on your website, turning your visitors into customers.


3.clean up in useEffect?
--the useEffect cleanup is a function in the useEffect Hook that allows us to tidy up our code before our component unmounts. When our code runs and reruns for every render, useEffect also cleans up after itself using the cleanup function.
--the useEffect cleanup is a function in the useEffect Hook that allows us to tidy up our code before our component unmounts. When our code runs and reruns for every render, useEffect also cleans up after itself using the cleanup function.


4.What is the use of useCallback and useMemo?
UseMemo is used in the functional component of React to return a memoized value. UseUseCallBack and useMemo hooks cache a function and store a memory-mapped value. The major difference is that useCallBack will memory the returned value, whereas useMemO will memory function.

== useCallback
The useCallback hook is used when you have a component in which the child is rerendering again and again without need. Pass an inline callback and an array of dependencies. useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed.


== useMemo 
The useMemo Hook can be used to keep expensive, resource intensive functions from needlessly running. In this example, we have an expensive function that runs on every render.

5..Why do we need keys in react less?
-- The main purpose of keys is to help React differentiate and distinguish elements from each other, increasing its performance when diffing between the virtual and real DOM. To use keys, simply add the prop inside an element such as <li> . Unique IDs are the best value to assign to keys.
A “key” is a special string attribute you need to include when creating lists of elements in React. Keys are used to React to identify which items in the list are changed, updated, or deleted. 
The next thing that comes to mind is that what should be good to be chosen as key for the items in lists.

6..Do you know about redux

This is the basic idea behind Redux: a single centralized place to contain the global state in your application, and specific patterns to follow when updating that state. You can use redux to store the state and you can use it to any component without worrying about the hierarchy.
Redux is that it optimizes the performance of large applications. It is highly effective in persisting the state of a given component even after it gets unmounted. Many other performance optimizations are internally implemented with Redux which also enhances component re-renders.