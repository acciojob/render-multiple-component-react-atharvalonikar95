import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  const projects=[
    {
      name:"E-Commerce hub"
      description:"web application to purchase products "
    },
    {
      name:"Resume shortlister hub"
      description:"web application to shortlist resume according to keywords."
    }
  ]
  return (
    <div id="main" className="ns-wrapper">
      {
        projects.map((project,idx)=>(
          <div key={idx}>
            <h1 data-ns-test="name">{project.name}</h1>
            <h6 data-ns-test="description">{project.description}</h6>
          </div>
        ))
      }
    </div>
  )
}


export default App;
