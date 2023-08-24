import React, { useEffect } from "react";

const BoardController = ({
  properties,
  selectedProperties,
  handleSelectChange,
  selectedFlexDirection,
  handleFlexDirectionChange,
}) => {
  return (
    <div
      style={{
        flex: 1,
        border: "1px solid grey",
        margin: "10px",
        height: "400px",
      }}
    >
      <div style={{ marginTop: "20px" }}>
        {properties.map((property) => (
          <div key={property.label}>
            <label htmlFor={property.label}>{property.label}:</label>
            <select
              id={property.label}
              value={selectedProperties[property.label]}
              onChange={(event) => {
                console.log(event.target.value);
                handleSelectChange(property.label, event.target.value);
              }}
            >
              <option value="">Select</option>
              {property.values.map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>
        ))}
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

        {/* Select flex-direction */}
        <div>
          <label htmlFor="flex-direction">flex-direction:</label>
          <select
            id="flex-direction"
            value={selectedFlexDirection}
            onChange={(event) => handleFlexDirectionChange(event.target.value)}
          >
            <option value="row">row</option>
            <option value="row-reverse">row-reverse</option>
            <option value="column">column</option>
            <option value="column-reverse">column-reverse</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default BoardController;
