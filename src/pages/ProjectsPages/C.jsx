import { useState } from "react";

const Header = (props) => {
      return <h1>{props.course}</h1>;
};
function Content(props) {
      return (
            <div>
                  <Part {...props.part} />
                  <Part {...props.part2} />
                  <Part {...props.part3} />
            </div>
      );
}

const Part = (props) => {
      return (
            <div>
                  <p>
                        {props.name} {props.exercises}
                  </p>
            </div>
      );
};

const Total = (props) => {
      return (
            <div>
                  <p>Number of exercises {props.total}</p>
            </div>
      );
};

function C() {
      // const-määrittelyt
      const [feedback, setFeedback] = useState({
            good: 0,
            neutral: 0,
            bad: 0,
      });
      const course = "Half Stack application development";
      const part = [
            { name: "Fundamentals of React", exercises: 10 },
            { name: "Using props to pass data", exercises: 7 },
            { name: "State of a component", exercises: 14 },
      ];
      let sum = 0;
      Object.values(part).forEach((a) => (sum += a.exercises));

      return (
            <div>
                  <Header course={course} />
                  <Content part={part[0]} part2={part[1]} part3={part[2]} />
                  <Total total={sum} />
                  <button
                        onClick={() => {
                              setFeedback({
                                    good: feedback.good + 1,
                              });
                        }}
                  >
                        good
                  </button>
                  <p>{feedback.good}</p>
            </div>
      );
}

export default C;
