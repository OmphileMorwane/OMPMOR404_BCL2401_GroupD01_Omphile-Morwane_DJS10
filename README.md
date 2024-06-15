# Project Brief: DJS10 - Asynchrony

## Outcomes
In this project I: 
- Understood the concept of asynchrony in JavaScript
- Learned how to use callbacks, promises, and async/await to handle asynchronous operations
- Implemented asynchronous programming in a real-world scenario
- Debugged and troubleshoot asynchronous code
- Applied best practices for writing asynchronous code
- Understood the importance of error handling in asynchronous code
- Learned how to use async/await with try-catch blocks to handle errors
- Understood the concept of concurrency and how it relates to asynchrony
- Learned how to use Web APIs to make asynchronous requests

## Challenges and overcomes
The was a "posts" heading that stayed behind when loading, I learned that it is likely due to how the initial render of the component is handled in React before the state is updated. Initially, the posts state is an empty array, and during the asynchronous fetch process, the component renders with the initial state.

To fix this,I ensured that the component does not render the posts section until the data is fully loaded by adding a loading state. This prevented the brief appearance of an unstyled or default element while the fetch operation is pending.








