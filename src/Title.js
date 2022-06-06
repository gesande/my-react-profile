import React, { Component } from "react";
const TITLES = [
  "a software enthusiastic",
  "a philatelist",
  "a craft beer maker",
  "an enthusiastic learner"
];

class Title extends Component {
  state = { titleIndex: 0 };

  componentDidMount() {
    console.log("Title component has mounted");
    this.animateTitles();
  }

  animateTitles = () => {
    setInterval(() => {
      const titleIndex = (this.state.titleIndex + 1) % TITLES.length;
      this.setState({ titleIndex });
    }, 4000);
  };

  render() {
    const title = TITLES[this.state.titleIndex];
    return <p>I am {title}</p>;
  }
}

export default Title;