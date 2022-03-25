import * as React from "react";
import Inside from "./Inside";

const Movie = () => {

  return (
    <div>
      <h1 className="bollyh">About Us</h1><hr className="okati"/>
      <div className="sam">
        <h1 className="samy">prathyusha <span className="sa">punnam</span></h1>
        <div className="emotional">
        <a href="https://www.facebook.com"><i className="fab fa-facebook-square"></i></a>
        <a href="https://www.instagram.com"><i className="fab fa-instagram-square"></i></a>
        <a href="https://www.twitter.com"><i className="fab fa-twitter-square"></i></a>
        <a href="https://www.linked.in"><i className="fab fa-linkedin"></i></a>
        <a href="https://www.github.com"><i className="fab fa-github-square"></i></a>
        </div>
        <div style={{marginLeft:"-10%"}}><Inside /></div>
      </div>
    </div>
  );
};

export default Movie;