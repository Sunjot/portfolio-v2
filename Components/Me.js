import React from 'react';

const Me = () => {

  let icons = [
    {class: "devicon-html5-plain", name: "html5"}, {class: "devicon-css3-plain", name: "css3"},
    {class: "devicon-sass-original", name: "sass"}, {class: "devicon-javascript-plain", name: "javascript"},
    {class: "devicon-react-original", name: "react"}, {class: "devicon-nodejs-plain", name: "node"},
    {class: "devicon-express-original", name: "express"}, {class: "devicon-python-plain", name: "python"},
    {class: "devicon-mongodb-plain", name: "mongodb"}, {class: "devicon-django-plain", name: "django"},
    {class: "devicon-git-plain", name: "git"}, {class: "devicon-typescript-plain", name: "typescript"},
    {class: "devicon-nginx-original", name: "nginx"}, {class: "devicon-mysql-plain", name: "mysql"},
    {class: "devicon-mongodb-plain", name: "mongodb"}, {class: "devicon-webpack-plain", name: "webpack"},
    {class: "devicon-redux-original", name: "redux"}, {class: "devicon-linux-plain", name: "linux"}
  ];

  return (
    <div id="me-cont">
      <div id="me">
        <div className="title">
          <p className="heading">More About Me</p>
          <div id="act-div" className="divider"/>
        </div>
        <p className="desc">
        I took up programming as a freshman in high school and never looked back. By the time 
        I was in university, I knew that web development was the direction I wanted to go. After 
        starting out as a predominantly front-end developer, I spent a few years after
        graduating becoming proficient with servers and databases through personal projects.
        Since then, I've held a role as a full-stack developer with further aspirations of 
        becoming a programmer who can excel at all facets of web development. Below are some 
        of the languages, frameworks, and tools I have utilized.</p>
        <div id="icons">
          {icons.map(i => {
            return <div key={i.name} id="icon-cont"><i className={i.class}></i><p>{i.name}</p></div>
          })}
        </div>
      </div>
    </div>
  );
}

export default Me;
