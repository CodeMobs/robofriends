import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map((user, i) => {
        return (
          <Card
            key={i}
            id={robots[i].id}
            name={robots[i].name}
            avatarUrl={robots[i].avatar_url}
          />
        );
      })}
    </div>
  );
};

export default CardList;
