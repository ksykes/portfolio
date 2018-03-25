import React from "react";
import ReactDOM from "react-dom";

export default class About extends React.Component {
	render() {
		return <section className="about">
			<h3>I have over four years of work experience that make me a well-rounded developer.</h3>
			<p>👯 <span className="highlight">Teamwork makes dreams work.</span> I’ve spent most of my professional life working with both small, collaborative teams and the large working groups of corporations.</p>
			<p>📝 <span className="highlight">Communication is my jam</span> — many years working with literature means I’m an excellent communicator, whether oral or written. Writing well is a piece of cake.</p>
			<p>🎯 <span className="highlight">Deadlines are my happy place.</span> It doesn’t matter what part of a project I’m involved in—give me a deadline and I’ll make a plan to get there on time. I love juggling multiple projects and am always thinking big picture.</p>
			<p>🤔 <span className="highlight">Problem solving and learning new things is how I thrive.</span> I love being challenged on a day-to-day basis and finding the most effective and efficient solutions possible. From brainstorming a large-scale website redesign to researching and understanding new government regulations, I’m happy getting my hands dirty digging into a problem.</p>
			<div className="education">
				<h2>Education</h2>
				<ul>
					<li>HackerYou College of Technology</li>
					<li>Certificate, Web Development Immersive</li>
					<li>2017</li>
				</ul>
				<ul>
					<li>Trent University</li>
					<li>Master’s Degree, English Literature (Public Texts)</li>
					<li>2014 — 2015</li>
				</ul>
				<ul>
					<li>Humber College</li>
					<li>Certificate, Creative Book Publishing</li>
					<li>2015</li>
				</ul>
				<ul>
					<li>Western University</li>
					<li>Honours Bachelor’s Degree, English Language and Literature</li>
					<li>2010 — 2014</li>
				</ul>
			</div>
			<div className="experience">
				<h2>Experience</h2>
				<ul>
					<li>Digital Designer and Developer</li>
					<li>Royal Ontario Museum</li>
					<li>Sep 2017 — present</li>
				</ul>
				<ul>
					<li>Web Developer (Contract)</li>
					<li>TickTrade Systems Inc.</li>
					<li>Aug 2017 — Sep 2017</li>
				</ul>
				<ul>
					<li>Production Coordinator</li>
					<li>House of Anansi Press / Groundwood Books</li>
					<li>Jan 2017 — Apr 2017</li>
				</ul>
				<ul>
					<li>Production Assistant</li>
					<li>House of Anansi Press / Groundwood Books</li>
					<li>Nov 2015 — Jan 2017</li>
				</ul>
			</div>
			<div className="skills">
				<h2>Skills</h2>
				<ul className="skillsList">
					<li className="skillItem">
						<i className="devicon devicon-html5-plain-wordmark"></i>
						<p>HTML5</p>
					</li>
					<li className="skillItem">
						<i className="devicon devicon-css3-plain-wordmark"></i>
						<p>CSS3</p>
					</li>
					<li className="skillItem">
						<i className="devicon devicon-sass-original"></i>
						<p>Sass</p>
					</li>
					<li className="skillItem">
						<i className="devicon devicon-javascript-plain"></i>
						<p>JavaScript</p>
					</li>
					<li className="skillItem">
						<i className="devicon devicon-jquery-plain"></i>
						<p>jQuery</p>
					</li>
					<li className="skillItem">
						<i className="devicon devicon-react-original"></i>
						<p>React</p>
					</li>
					<li className="skillItem">
						<i className="devicon devicon-nodejs-plain"></i>
						<p>Node.js</p>
					</li>
					<li className="skillItem">
						<i className="devicon devicon-gulp-plain"></i>
						<p>Gulp</p>
					</li>
					<li className="skillItem">
						<i className="devicon devicon-git-plain"></i>
						<p>Git</p>
					</li>
					<li className="skillItem">
						<i className="devicon devicon-github-plain"></i>
						<p>Github</p>
					</li>
					<li className="skillItem">
						<i className="devicon devicon-illustrator-plain"></i>
						<p>Adobe Illustrator</p>
					</li>
					<li className="skillItem">
						<i className="devicon devicon-photoshop-plain"></i>
						<p>Adobe Photoshop</p>
					</li>
				</ul>
			</div>
			<p className="resume"><a href="">Download my résumé</a></p>
			<p>Built with <a href="https://reactjs.org" target="blank">React</a> and <a href="https://github.com/VincentGarreau/particles.js/" target="blank">particles.js</a>. Hosted by <a href="https://pages.github.com" target="blank">Github Pages</a>.</p>
		</section>;
	}
}