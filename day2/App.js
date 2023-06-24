import React from "react";
import ReactDOM from "react-dom/client";

/**
 * <div id="parent">
 *      <div id="child">
 *          <h1></h1>
 *      </div>
 * </div>
 */

/**
 * Nesting DOM
 */
const parent1 = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I'm an H1 Tag")
  )
);

/**
 * *************************************
 * *************************************
 */

/**
 * <div id="parent">
 *      <div id="child">
 *          <h1></h1>
 *          <h2></h2>
 *      </div>
 * </div>
 */

/**
 * Nesting DOM
 */
const parent2 = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm an H1 Tag"),
    React.createElement("h1", {}, "I'm an another H1 Tag")
  ])
);

/**
 * *************************************
 * *************************************
 */

/**
 * <div id="parent">
 *      <div id="child1">
 *          <h1></h1>
 *          <h2></h2>
 *      </div>
 *      <div id="child">
 *          <h1></h1>
 *          <h2></h2>
 *      </div>
 * </div>
 *
 */

/**
 * Nesting DOM
 */
const parent3 = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I'm an H1 Tag h111111"),
    React.createElement("h1", {}, "I'm an another H1 Tag")
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm an H1 Tag"),
    React.createElement("h1", {}, "I'm an another H1 Tag")
  ])
]);

/**
 * *************************************
 * *************************************
 */

/**
 * Without Nesting DOM
 */
// Core Part Of React by react.development.js
/**
 * h1 => Element
 * {} => attribute of Tag
 * "" => Content of Elemet
 * React.createElement => create object not Element
 */
const heading = React.createElement(
  "h1",
  { id: "heading11", className: "abc" },
  "Hello World Reactttt"
);

console.log(heading); // output => React Element Object

// Core Part Of React dom by react-dom.development.js
const root = ReactDOM.createRoot(document.getElementById("root"));

// This is responsible to take Object and convert into HTML Tag
// root.render(heading);
// root.render(parent);
// root.render(parent2);
root.render(parent3);

// NOTE:- To overcome above mentioned HTML issue, JSX will come in picture
