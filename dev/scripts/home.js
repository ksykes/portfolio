import React from "react";
import ReactDOM from "react-dom";

export default class Home extends React.Component {
  render() {
    return <div>
        <h2>
          A <a href="https://github.com/ksykes" target="blank">developer</a>, <a href="https://codepen.io/ksykes/" target="blank">sometimes-designer</a>, <a href="https://www.canadalearningcode.ca/" target="blank">mentor</a>, and really good creative thinker. Also a novelist in the wee hours (morning or night).
        </h2>
        <p>When I’m not <a href="https://github.com/ksykes" target="blank">coding</a>, I’m probably <a href="http://www.saveourscruff.org/" target="blank">fostering puppies</a>, dressing in all-black like a ninja, working on <a href="https://www.goodreads.com/user_challenges/11001915" target="blank">reading 100 books every year</a>, drinking one too many chai tea lattes, or searching for piney trees to inhale.</p>
        {/* <p>
          Two states at any given moment: skiing || wishing for ski season
        </p> */}
        <p>I’m a digital developer and designer at the <a href="https://www.rom.on.ca/en" target="blank">Royal Ontario Museum</a>, where I hang out with dinosaurs and code cool things involving them.</p>
        <p>Before that, I worked at <a href="https://houseofanansi.com" target="blank">House of Anansi Press and Groundwood Books</a> as an eBook developer, which was my gateway drug to learning how to properly code.</p>
        <p>I believe well-commented code should be mandatory for every developer and a walk around the block will fix just about any coding problem. I’m also fond of piney trees and winter, excellent typography, terrible country music, and all things bookish.</p>
      </div>;
  }
}