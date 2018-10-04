import React from "react";

const ProjectDetails = props => {
  return (
    <div className="container section project-details">
      <div className="card z-depth-0 blue-grey darken-1 white-text">
        <div className="card-content">
          <span className="card-title">
            Project Title {props.match.params.id}
          </span>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
            placeat fuga veritatis maiores eligendi quia debitis omnis pariatur!
            Dignissimos, nam!
          </p>
        </div>
        <div className="card-action">
          <small>Posted by The Net Ninja on 2nd, September</small>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
