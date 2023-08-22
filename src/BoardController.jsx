import React from "react";

const BoardController = ({
  properties,
  handleSelectChange,
  selectedProperty,
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
      <p>This is the second container (25% width)</p>
      <div style={{ marginTop: "20px" }}>
        {properties.map((property) => (
          <div key={property.label}>
            <label htmlFor={property.label}>{property.label}:</label>
            <select
              id={property.label}
              onChange={(event) =>
                handleSelectChange(property.label, event.target.value)
              }
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
        {selectedProperty && (
          <div style={{ marginTop: "10px" }}>
            <p>Selected Property: {selectedProperty.property}</p>
            <p>Selected Value: {selectedProperty.value}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BoardController;
