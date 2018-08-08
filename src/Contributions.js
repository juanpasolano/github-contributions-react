import React from "react";
import PropTypes from "prop-types";

const Contributions = ({ contributions }) => {
  return (
    <div className="contributions_graph">
      {contributions && contributions.map((i, idx) => (
        <div
          className="square"
          key={idx}
          style={{ backgroundColor: i.color }}
        />
      ))}
    </div>
  );
};

Contributions.propTypes = {
  contributions: PropTypes.array
};

export default Contributions;
