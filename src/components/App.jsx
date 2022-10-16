import React, { Component } from "react"
import { FeedbackSection } from "./FeedbackSection/FeedbackSection"

export class  App extends Component {
  render() {
    return (
      <div>
        <FeedbackSection/>
        <section>
          <h2>Stats</h2>
          <div>
            <p>Good:</p>
            <p>Neutral:</p>
            <p>Bad:</p>
          </div>
        </section>
      </div>
    )
  }
};
