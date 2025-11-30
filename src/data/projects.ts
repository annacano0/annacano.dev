import type { Projects } from "../types/types";
import minesweeper from "../assets/img/minesweeper.png";
import arduino from "../assets/img/arduino-one.jpeg";

const projects: Projects = [
  {
    title: "Minesweeper",
    description: "A classic minesweeper game built with vanilla JavaScript.",
    tech_set: [
      { name: "JavaScript", color: "yellow" },
      { name: "HTML", color: "orange" },
      { name: "CSS", color: "blue" },
    ],
    status: {
      statusDescription: "In Progress",
      statusCode: "wip",
    },
    url: "https://example.com/project-one",
    image: minesweeper,
  },
  {
    title: "Weather App",
    description:
      "A weather application built with React and using Arduino for data collection.",
    tech_set: [],
    status: {
      statusDescription: "Coming soon",
      statusCode: "not-started",
    },
    url: undefined,
    image: arduino,
  },
];
export default projects;
