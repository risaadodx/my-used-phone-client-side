import React from "react";

const Blog = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="card w-full bg-base-100 shadow-xl mb-5">
        <div className="card-body">
          <h2 className="card-title">
            What are the different ways to manage a state in a React
            application?
          </h2>
          <p>
            The Four Kinds of React State to Manage Local state. Global state.
            Server state. URL state.
          </p>
        </div>
      </div>
      <div className="card w-full bg-base-100 shadow-xl mb-5">
        <div className="card-body">
          <h2 className="card-title">
            {" "}
            How does prototypical inheritance work?
          </h2>
          <p>
            The Prototypal Inheritance is a feature in javascript used to add
            methods and properties in objects. It is a method by which an object
            can inherit the properties and methods of another object.
          </p>
        </div>
      </div>
      <div className="card w-full bg-base-100 shadow-xl mb-5">
        <div className="card-body">
          <h2 className="card-title">
            What is a unit test? Why should we write unit tests?
          </h2>
          <p>
            The main objective of unit testing is to isolate written code to
            test and determine if it works as intended. Unit testing is an
            important step in the development process, because if done
            correctly, it can help detect early flaws in code which may be more
            difficult to find in later testing stages.
          </p>
        </div>
      </div>
      <div className="card w-full bg-base-100 shadow-xl mb-5">
        <div className="card-body">
          <h2 className="card-title">React vs. Angular vs. Vue?</h2>
          <p>
            React is a UI library, Angular is a fully-fledged front-end
            framework, while Vue.js is a progressive framework.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
