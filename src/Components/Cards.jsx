import React from "react";
import { Link } from "react-router-dom";

function Cards({ title, desc, live, git, id }) {
  return (
    <Link to={`/portfolio/${id}`}>
      <li>
        <div className="card">
          <div className="card__title">
            <h3>{title}</h3>
          </div>
          <div className="card__desc">
            <p>{desc}</p>
          </div>
          <div className="card__links">
            <a href={live}>
              <i class="fas fa-rocket"></i> Live
            </a>
            <a href={git}>
              <i class="fab fa-github"></i> Code
            </a>
          </div>
        </div>
      </li>
    </Link>
  );
}

export default Cards;
