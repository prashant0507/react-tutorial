import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => ReactElement - JS Object => HTMLElement(render)
const heading = React.createElement("h1", { id: "heading" }, "Namaste React");

// JSX => React.createElement => ReactElement - JS Object => HTMLElement(render)

// Single line code
const jxHeading = <h1 id="heading">Namste Using JSX</h1>;

const jxHeading2 = (
  <h1 id="heading">
    {heading}
    Namste Using JSX ,ultiple line
  </h1>
);

console.log(heading);
console.log(jxHeading);

// React Functional Componenet
const Title = () => {
  return <h1>Title</h1>;
};

const number = 100;

const HeadingComponenet = () => {
  return (
    <React.Fragment>
    <div className="container1">
      <Title />
      <Title></Title>
      {Title()}
      {jxHeading2}
      {number}
      <br />
      {console.log("hi")}
      <br />
      {number + 2000}
      <h1>Functional componenet</h1>
    </div>

    <div className="container2">

    </div>
    </React.Fragment>
  );
};

// const HeadingComponenet2 = () => (
//   <h1> Functional componenet </h1>
// )

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jxHeading2);
root.render(<HeadingComponenet />);
