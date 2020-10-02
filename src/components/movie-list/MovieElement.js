import React, { Component } from "react";

export default class MovieElement extends Component {
  render() {
    return (
      <div className="w-25 p-2">
        <div className="card">
          <img
            src="https://www.zerodeconduite.net/sites/default/files/styles/large_film/public/film/affiche_gladiator.png?itok=ZFq8B_jW"
            alt="film"
            className="card-img-top"
          />
          <h5 className="card-title">Gladiator</h5>
          <p className="card-text">
            Le général romain Maximus est le plus fidèle soutien de l’empereur Marc Aurèle, qu’il a conduit de victoire en victoire avec une bravoure
            et un dévouement exemplaires.
          </p>
        </div>
      </div>
    );
  }
}
