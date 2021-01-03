import React from "react";

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  return (
    <div className="card ms-3" style={{ maxWidth: 530 }}>
      <div className="row no-glutters">
        <div className="col-md-4">
          <img
            src={`./assets/heroes/${id}.jpg`}
            alt={superhero}
            className="card-img"
          />
        </div>
        <div className="col-md-8">
          <h5 className="card-tittle">{superhero}</h5>
          <p className="card-text">{alter_ego}</p>
          {alter_ego !== characters && (
            <p className="card-text">{characters}</p>
          )}
          <p className="card-text">
          <small className="text-muted">{first_appearance}</small>
          <Link to={`./hero/${id}`}>
              Mas...
          </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
