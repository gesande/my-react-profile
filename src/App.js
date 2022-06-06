import React, { Component } from "react";
import Projects from "./Projects";
import SocialProfiles from "./SocialProfiles";
import Title from "./Title";
import profile from "./assets/profile.png";

class App extends Component {
  state = { displayBio: false };

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  };

  render() {
    return (
      <div>
        <img src={profile} alt="profile" className="profile" />
        <h1>Hello!</h1>
        <p>My name is Geir</p>
        <Title />
        <p>I'm always looking forward to working on meaningful projects.</p>
        {this.state.displayBio ? (
          <div>
            <p>
              I live in{" "}
              <a href="https://www.ouka.fi/oulu/english">Oulu, Finland</a>
            </p>
            <p>
              My favorite coding language is Java, but I also think React.js is
              awesome
            </p>
            <p>
              Besides coding, I'm a{" "}
              <a href="https://www.oulunpostimerkkikerho.fi/">
                philatelist concentrated mainly on Finnish philately
              </a>{" "}
              and do some{" "}
              <a href="https://www.facebook.com/herukanmehukeisari/">
                hand-craft beers.
              </a>
            </p>
            <button onClick={this.toggleDisplayBio}>Show less</button>
          </div>
        ) : (
          <div>
            <button onClick={this.toggleDisplayBio}>Read more</button>
          </div>
        )}
        <hr />
        <Projects />
        <hr />
        <SocialProfiles />
      </div>
    );
  }
}

export default App;
