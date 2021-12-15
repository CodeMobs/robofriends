import React from "react";

const Button = (countChange) => {
  return (
    <div className="pa2">
      <button
        className="pa3 ba b--green bg-lightest-blue"
        onChange={countChange}
      />
    </div>
  );
};
