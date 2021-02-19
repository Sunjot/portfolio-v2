import React from 'react';
import Tv from '../images/tv.png';
import Got from '../images/got.png';
import Tv2 from '../images/tv2.png';
import LeafsImg from '../images/leafs.png';
import Project from '../components/Project';

let TvObj2 = { title: "TV Calendar", git: "https://github.com/sunjot/tvtracker2", link: "https://tv.sunjot.me",
    desc: `A reconstructed version of the TV Tracker website below that allows you to build a collection
    of your past and presently watched TV shows. Also keep tabs on what is scheduled to be on-air next week
    or in the coming months. Built using <span>Node, Express, React</span> and <span>MongoDB.
    </span> Powered by <span>The Movie DB.</span><br><br>If you would like to test out the application
    without registering - username: dummy; password: dummy123.`};

let Leafs = { title: "Leafs Stats", git: "https://github.com/Sunjot/leafs", link: "https://leafs.sunjot.me",
    desc: `An aggregator website that collects team and player statistics about the 
    Toronto Maple Leafs and displays them for easy viewing. Data is retrieved from the NHL API,
    as well as scraped from websites such as Natural Stat Trick. Built using <span>React, 
    TypeScript, Node, Express</span> and <span>MongoDB</span>.`};

let GotObj = { title: "The Realm", git: "https://github.com/sunjot/therealmv2/", link: "https://therealm.sunjot.me",
    desc: `A website that serves as a simplified introduction to the series,
      'Game of Thrones'. Review the important locations, social rankings, big-time players, and the
      events prior to the show that set up the current state in the series. Built using <span>React JS.</span>`};

const Projects = () => (
  <div id="projects-cont">
    <div id="projects">
      <p className="heading">My Work</p>
      <div id="act-div" className="divider"/>
      <Project id="tv2-cont" title={TvObj2.title} git={TvObj2.git} link={TvObj2.link} desc={TvObj2.desc} img={Tv2}/>
      <Project id="tv-cont" title={Leafs.title} git={Leafs.git} link={Leafs.link} desc={Leafs.desc} img={LeafsImg} margin="100px"/>
      <Project id="got-cont" title={GotObj.title} git={GotObj.git} link={GotObj.link} desc={GotObj.desc} img={Got}/>
    </div>
  </div>
);

export default Projects;
