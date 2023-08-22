import React from "react";

const Board = ({ selectedProperties }) => {
  return (
    <div
      style={{
        flex: 2,
        border: "1px solid grey",
        margin: "10px",
        height: "400px",
      }}
    >
      <p>This is the first container (75% width)</p>
      {/* Access and render selected properties */}
      {Object.keys(selectedProperties).length > 0 && (
        <div style={{ marginTop: "10px" }}>
          <p>Selected Properties:</p>
          <ul>
            {Object.entries(selectedProperties).map(([property, value]) => (
              <li key={property}>
                {property}: {value}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Board;
