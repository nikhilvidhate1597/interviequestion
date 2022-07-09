1.What is Context api
--The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application.
--Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease. Let's see how to use it.
--The React Context API is a way for a React app to effectively produce global variables that can be passed around. --This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
--React.createContext() is all you need. It returns a consumer and a provider.
-- Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. 
--Consumer as it so happens is a component that consumes and uses the state.
--The Context API can be used to share data with multiple components, without having to pass data through props manually. For example, some use cases the Context API is ideal for: theming, user language, authentication, etc.


2.What is UseRef Hook ?(Implementation)
--The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
--The useRef Hook allows you to persist values between renders.
--It can be used to store a mutable value that does not cause a re-render when updated.
--It can be used to access a DOM element directly.
--The useRef hook is the new addition in React 16.8. Before proceeding to this article there is a prerequisite to know about the ref in react.
--The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. 


3.What is UseMemo Hook ?(Implementation)
--The React useMemo Hook returns a memoized value. Think of memoization as caching a value so that it does not need to be recalculated. 
-The useMemo Hook only runs when one of its dependencies update. This can improve performance. The useMemo and useCallback Hooks are similar.
--The React useMemo Hook returns a memoized value.
--Think of memoization as caching a value so that it does not need to be recalculated.
--The useMemo Hook only runs when one of its dependencies update.
--This can improve performance.
--The useMemo and useCallback Hooks are similar. 
--The main difference is that useMemo returns a memoized value and useCallback returns a memoized function. 
--The useMemo is a hook used in the functional component of react that returns a memoized value. 
-- A memoized function remembers the results of output for a given set of inputs. 
--For example, if there is a function to add two numbers, and we give the parameter as 1 and 2 for the first time the function will add these two numbers and return 3, but if the same inputs come again then we will return the cached value i.e 3 and not compute with the add function again. 

4.What are React Life cycles Explain each one with Example?
--We have seen so far that React web apps are actually a collection of independent components that run according to the interactions made with them. 
--Every React Component has a lifecycle of its own, lifecycle of a component can be defined as the series of methods that are invoked in different stages of the component’s existence. . 
steps:-
--Initialization: This is the stage where the component is constructed with the given Props and default state. This is done in the constructor of a Component Class.
--Mounting: 
=== Mounting is the stage of rendering the JSX returned by the render method itself.
 ====Mounting is the phase of the component lifecycle when the initialization of the component is completed and the component is mounted on the DOM and rendered for the first time on the webpage. Now React follows a default procedure in the Naming Conventions of these predefined functions where the functions containing “Will” represents before some specific phase and “Did” represents after the completion of that phase. The mounting phase consists of two such predefined functions as described below.
steps:-
<!-- componentWillMount() Function: As the name clearly suggests, this function is invoked right before the component is mounted on the DOM i.e. this function gets invoked once before the render() function is executed for the first time. -->
<!-- componentDidMount() Function: Similarly as the previous one this function is invoked right after the component is mounted on the DOM i.e. this function gets invoked once after the render() function is executed for the first time -->
--Updating: Updating is the stage when the state of a component is updated and the application is repainted.
--Unmounting: As the name suggests Unmounting is the final step of the component lifecycle where the component is removed from the page.



5.Difference between callback and useCallback Hook ?
--The React useCallback Hook returns a memoized callback function. Think of memoization as caching a value so that it does not need to be recalculated. This allows us to isolate resource intensive functions so that they will not automatically run on every render.
--In both useMemo and useCallback, the hook accepts a function and an array of dependencies. 
--The major difference between useCallback and useMemo is that useCallback will memory the returned value, whereas useMemo will memory the function.
--Essentially, the only difference between these hooks is that one caches a value type, and the other caches a function.
--Let's take an example; if the computationally expensive code accepts arguments and returns a value, you would need to use useMemo so you could keep referencing that value between renders without re-running the computationally expensive code.
--On the other hand, in order to keep a function instance persistent for multiple renders, useCallback is needed. 
--This is like placing a function outside the scope of your react component to keep it intact.


6.What is Props Drilling Concept ?What is State Uplifting ?
=Props Drilling
----Prop drilling is the unofficial term for passing data through several nested children components, in a bid to deliver this data to a deeply-nested component. The problem with this approach is that most of the components through which this data is passed have no actual need for this data.
----Prop drilling is basically a situation when the same data is being sent at almost every level due to requirements in the final level. Here is a diagram to demonstrate it better. Data needed to be sent from Parent to ChildC. In this article different ways to do that are discussed.


==Uplifting
--Lifting up the State: As we know, every component in React has its own state. Because of this sometimes data can be redundant and inconsistent. So, by Lifting up the state we make the state of the parent component as a single source of truth and pass the data of the parent in its children.

7.Difference between useEffect and useContext ?

==useEffect
--The motivation behind the introduction of useEffect Hook is to eliminate the side-effects of using class-based components. 
--For example, tasks like updating the DOM, fetching data from API end-points, setting up subscriptions or timers, etc can be lead to unwarranted side-effects. 
--Since the render method is to quick to produce a side-effect one needs to use life cycle methods to observe the side effects. 
--For example, consider updating the document title for a simple counter component to the current value. On the initial render, we set the current clicked value to 0 clicks.
--So, this section is coded into the componentDidMount() method which is executed only once in the component life cycle. 
--Then we create a button to increment the count state value by one on every click. As the count value state changes, we also need to update the document title again and for that, we need to write the same piece of code in componentDidUpdate(). The componentDidupdate() method is perfect for updating the counter value at any time the state changes but the repetition of code is one of the side-effects.

==useContext
