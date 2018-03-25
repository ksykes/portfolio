import React from "react";
import ReactDOM from "react-dom";

export default class Projects extends React.Component {
	render() {
		return <section className="work">
        <figure className="portfolioItem">
          <a href="https://www.rom.on.ca/annualreport/index.php" className="portfolioLink" target="blank">
            View It Live
          </a>
          <div className="imageContainer">
            <img src="/assets/thumbnails/romreport_thumbnail.png" alt="" />
          </div>
          <figcaption className="right">
            <div className="portfolioDescription">
              <h3>ROM Annual Report</h3>
              <p>
                A digitization of the ROM’s 2016-2017 Annual Report, I took
                on this project from another employee and finessed the
                design and development of this project. Built with PHP.
              </p>
            </div>
            <ul className="skillList">
              <li>React</li>
              <li>JavaScript</li>
              <li>ES6</li>
              <li>API/AJAX</li>
              <li>Git</li>
              <li>Gulp</li>
              <li>Design</li>
            </ul>
            <button class="liveButton"><a href="https://www.rom.on.ca/annualreport/index.php">View Live</a></button>
          </figcaption>
        </figure>

        <figure className="portfolioItem">
          <a href="https://www.rom.on.ca/en/wpy" className="portfolioLink" target="blank">
            View It Live
          </a>
          <figcaption className="left">
            <div className="portfolioDescription">
              <h3>ROM Wildlife Photographer of the Year microsite</h3>
              <p>
                Built on Drupal and utilizing vanilla JavaScript and PHP,
                this microsite was the primary digital marketing tool for
                the Wildlife Photographer of the Year 2017 exhibit at the
                ROM. I was responsible for development and created the
                design based on a pre-existing exhibition microsite
                template.
              </p>
            </div>
            <ul className="skillList">
              <li>React</li>
              <li>JavaScript</li>
              <li>ES6</li>
              <li>API/AJAX</li>
              <li>Git</li>
              <li>Gulp</li>
              <li>Design</li>
            </ul>
            <button class="liveButton"><a href="https://www.rom.on.ca/en/wpy">View Live</a></button>
          </figcaption>
          <div className="imageContainer">
            <img src="/assets/thumbnails/wpy_thumbnail.png" alt="" />
          </div>
        </figure>

        <figure className="portfolioItem">
          <a href="https://laundry-lessons.firebaseapp.com/" className="portfolioLink" target="blank">
            View It Live
          </a>
          <div className="imageContainer">
            <img src="/assets/thumbnails/laundry_thumbnail.png" alt="" />
          </div>
          <figcaption className="right">
            <div className="portfolioDescription">
              <h3>Laundry Lessons</h3>
              <p>
                A digital laundry helper providing explanations for the
                icons on your clothing tags, this project is built using
                React, React Router, and Firebase. It also uses the Google
                Maps JavaScript API and the Google Places API to locate
                nearby laundromats. I designed and coded everything myself,
                although the laundry advice is mostly from my mother.
              </p>
            </div>
            <ul className="skillList">
              <li>React</li>
              <li>JavaScript</li>
              <li>ES6</li>
              <li>API/AJAX</li>
              <li>Git</li>
              <li>Gulp</li>
              <li>Design</li>
            </ul>
            <button class="liveButton"><a href="https://laundry-lessons.firebaseapp.com/">View Live</a></button>
          </figcaption>
        </figure>

        <figure className="portfolioItem">
          <a href="https://pottergalore-ad256.firebaseapp.com/" className="portfolioLink" target="blank">
            View It Live
          </a>
          <figcaption className="left">
            <div className="portfolioDescription">
              <h3>Pottergalore</h3>
              <p>
                Built using React and React Router, this project is a play
                on Pottermore's Harry Potter quizzes. Created in partnership
                with Natalie Kwok, we each contributed equally to the design
                and development. I was also responsible for writing the
                quizzes.
              </p>
            </div>
            <ul className="skillList">
              <li>React</li>
              <li>JavaScript</li>
              <li>ES6</li>
              <li>Git</li>
              <li>Gulp</li>
              <li>Design</li>
            </ul>
          </figcaption>
          <div className="imageContainer">
            <img src="/assets/thumbnails/pottergalore_thumbnail.png" alt="" />
          </div>
        </figure>

        <figure className="portfolioItem">
          <a href="https://kitkait.github.io/cow-ipsum/" className="portfolioLink" target="blank">
            View It Live
          </a>
          <div className="imageContainer">
            <img src="/assets/thumbnails/cowipsum_thumbnail.png" alt="" />
          </div>
          <figcaption className="right">
            <div className="portfolioDescription">
              <h3>Herd of Words</h3>
              <p>
                This jQuery-written cow-themed lorem ipsum generator
                (because they’re one of my favourite animals), this was a
                project created just-for-fun with Kitty Yau where we each
                contributed equally to design, development, and the giant
                list of cow words.
              </p>
            </div>
            <ul className="skillList">
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>ES6</li>
              <li>Git</li>
              <li>Gulp</li>
              <li>Design</li>
            </ul>
          </figcaption>
        </figure>

        <figure className="portfolioItem">
          <a href="https://the-beauty-log.firebaseapp.com/" className="portfolioLink" target="blank">
            View It Live
          </a>
          <figcaption className="left">
            <div className="portfolioDescription">
              <h3>The Beauty Log</h3>
              <p>
                A web app showcasing various makeup looks and the products
                used to create them, this project was coded with jQuery and
                relies on the Makeup API. Built by a four-person team, I was
                largely responsible for responsive design and development.
              </p>
            </div>
            <ul className="skillList">
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>ES6</li>
              <li>API/AJAX</li>
              <li>Git</li>
              <li>Gulp</li>
            </ul>
          </figcaption>
          <div className="imageContainer">
            <img src="/assets/thumbnails/beauty_thumbnail.png" alt="" />
          </div>
        </figure>
      </section>
	}
}