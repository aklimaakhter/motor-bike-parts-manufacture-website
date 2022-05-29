import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='py-4'>
                <h2 className='font-bold'>Question:  How will you improve the performance of a React Application?</h2>
                <p>Ans:React uses several clever techniques to minimize the number of costly DOM operations required to update the UI. While this will lead to a faster user interface without specifically optimizing for performance for many cases, there are ways where you can still speed up React application.
                </p>
            </div>
            <div>
                <h2 className='font-bold'>Question :What are the different ways to manage a state in a React application?</h2>
                <p>Ans: There are four main types of state need to properly manage in React apps such as:

                    Local state
                    Global state
                    Server state
                    URL state</p>
            </div>
            <div className='py-4'>
                <h2 className='font-bold'>Question: How does prototypical inheritance work?</h2>
                <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object.</p>
            </div>
            <div>
                <h2 className='font-bold'>Question :  You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                <p>
                    Ans: represent your product object is the way to go. If, however, you insist on using a 2D array, there are a couple of options. One is to have a 2D array of type any std::any - cppreference.com[^] Another option might be to use a tuple std::tuple - cppreference.com[^] Using a tuple doesn't really preserve array semantics - i.e you can't access a cell as products[row][column[, but it might scratch whatever particular itch it is you're trying to scratch.
                </p>
            </div>
            <div className='py-4'>
                <h2 className='font-bold'>Question:What is a unit test? Why should write unit tests?</h2>
                <p>Ans: Unit tests are typically automated tests written and run by software developers to ensure that a section of an application  meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure.The goal of unit testing is to isolate each part of the program and show that the individual parts are correct.A unit test provides a strict, written contract that the piece of code must satisfy. As a result, it affords several benefits.</p>
            </div>
        </div>
    );
};

export default Blog;