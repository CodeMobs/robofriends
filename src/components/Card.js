import React from "react";

const Card = ({ name, email, avatarUrl, id }) => {
  return (
    <div
      className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"
      key={id}
    >
      {<img alt="robots" src={avatarUrl} />}
      <div>
        <h2>{name}</h2>
        <h2>{email}</h2>
      </div>
    </div>
  );
};

export default Card;
