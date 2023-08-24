import React, { useState } from "react";
import Board from "./Board";
import BoardController from "./BoardController";

const Home = () => {
  const [layoutType, setLayoutType] = useState("flex");
  const [numSubContainers, setNumSubContainers] = useState(0);
  const [selectedFlexDirection, setSelectedFlexDirection] = useState("row"); // Default value

  const handleFlexDirectionChange = (label, value) => {
    console.log("label:", label, value);
    setSelectedFlexDirection(value);
  };

  const handleAddSubContainer = () => {
    if (numSubContainers < 5) {
      setNumSubContainers(numSubContainers + 1);
    }
  };

  const handleRemoveSubContainer = () => {
    if (numSubContainers > 0) {
      setNumSubContainers(numSubContainers - 1);
    }
  };

  const defaultFlexProperties = {
    "flex-direction": "row",
    "flex-wrap": "nowrap",
    "justify-content": "flex-start",
    "align-items": "stretch",
    "align-content": "stretch",
    // Add other Flex property labels with their default values here
  };

  const defaultGridProperties = {
    "grid-template-columns": "auto",
    "grid-template-rows": "auto",
    "grid-template-areas": "",
    "justify-items": "start",
    "align-items": "start",
    "justify-content": "start",
    "align-content": "start",
    // Add other Grid property labels with their default values here
  };

  const [selectedProperties, setSelectedProperties] = useState(
    defaultFlexProperties
  );

  const flexProperties = [
    {
      label: "flex-direction",
      values: ["row", "row-reverse", "column", "column-reverse"],
    },
    { label: "flex-wrap", values: ["nowrap", "wrap", "wrap-reverse"] },
    {
      label: "justify-content",
      values: [
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around",
        "space-evenly",
      ],
    },
    {
      label: "align-items",
      values: ["flex-start", "flex-end", "center", "baseline", "stretch"],
    },
    {
      label: "align-content",
      values: [
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around",
        "stretch",
      ],
    },
  ];

  const gridProperties = [
    { label: "grid-template-columns", values: ["auto", "1fr", "2fr", "3fr"] },
    { label: "grid-template-rows", values: ["auto", "1fr", "2fr", "3fr"] },
    {
      label: "grid-template-areas",
      values: ["header header", "main sidebar", "footer footer"],
    },
    { label: "justify-items", values: ["start", "end", "center", "stretch"] },
    { label: "align-items", values: ["start", "end", "center", "stretch"] },
    {
      label: "justify-content",
      values: [
        "start",
        "end",
        "center",
        "space-between",
        "space-around",
        "space-evenly",
      ],
    },
    {
      label: "align-content",
      values: [
        "start",
        "end",
        "center",
        "space-between",
        "space-around",
        "stretch",
      ],
    },
  ];

  const handleLayoutButtonClick = (layout) => {
    setLayoutType(layout);
    setSelectedProperties(
      layout === "flex" ? defaultFlexProperties : defaultGridProperties
    );
  };

  const handleSelectChange = (property, value) => {
    handleFlexDirectionChange(property, value);
    setSelectedProperties((prevSelected) => ({
      ...prevSelected,
      [property]: value,
    }));
  };

  return (
    <div className="text-center">
      <h1>Layout project for Flexbox and Grid</h1>
      <div
        style={{ marginTop: "20px", display: "flex", justifyContent: "center" }}
      >
        <button
          style={buttonStyle}
          onClick={() => handleLayoutButtonClick("flex")}
        >
          Flex
        </button>
        <button
          style={buttonStyle}
          onClick={() => handleLayoutButtonClick("grid")}
        >
          Grid
        </button>
      </div>
      <div style={{ marginTop: "20px", display: "flex" }}>
        <Board
          selectedProperties={selectedProperties}
          numSubContainers={numSubContainers}
          onAddSubContainer={handleAddSubContainer}
          onRemoveSubContainer={handleRemoveSubContainer}
          selectedFlexDirection={selectedFlexDirection} // Pass the selected flex direction
        />
        <BoardController
          properties={layoutType === "flex" ? flexProperties : gridProperties}
          selectedProperties={selectedProperties}
          handleSelectChange={handleSelectChange}
          selectedFlexDirection={selectedFlexDirection}
          handleFlexDirectionChange={handleFlexDirectionChange}
        />
      </div>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <div style={{ marginTop: "10px" }}>
          <button style={circleButtonStyle} onClick={handleAddSubContainer}>
            +
          </button>
          <button style={circleButtonStyle} onClick={handleRemoveSubContainer}>
            -
          </button>
        </div>
      </div>
    </div>
  );
};

const buttonStyle = {
  padding: "10px 20px",
  fontSize: "16px",
  backgroundColor: "#007BFF",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  margin: "10px",
};

const circleButtonStyle = {
  width: "40px",
  height: "40px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "18px",
  backgroundColor: "#007BFF",
  color: "white",
  border: "none",
  borderRadius: "50%",
  cursor: "pointer",
  margin: "5px",
};

export default Home;
