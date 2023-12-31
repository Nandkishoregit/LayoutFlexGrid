import React, { useEffect } from "react";
import { useLayoutContext } from "./context/LayoutContext";

const Board = ({
  selectedProperties,
  numSubContainers,
  selectedFlexDirection, // Receive the selected flex direction
  onAddSubContainer,
  onRemoveSubContainer,
}) => {
  // Calculate the height for each sub-container
  const totalAvailableHeight = 400; // Total height of the first container
  const minHeight = 60; // Minimum height for each sub-container

  const [layoutSession, dispatch] = useLayoutContext();
  const flexDirection = layoutSession.flexDirection;
  const justifyContent = layoutSession.justifyContent;
  const alignItems = layoutSession.alignItems;

  // useEffect(() => {
  //   console.log("selectedFlexDirection", selectedFlexDirection);
  //   const layoutType = layoutSession.flexDirection;
  //   console.log("layoutsession is:", layoutSession);
  // }, [selectedFlexDirection, layoutSession]);

  // Calculate dynamic height for sub-containers
  const dynamicSubContainerHeight =
    numSubContainers > 0
      ? `${Math.min(totalAvailableHeight / numSubContainers, minHeight)}px`
      : "100%";

  return (
    <div
      style={{
        display: "flex",
        border: "1px solid red",
        flexDirection: flexDirection, // Apply selected flex direction
        width: "700px",
        height: "400px", // Ensure sub-containers take full height,
        justifyContent: justifyContent, // Apply selected justify content
        alignItems: alignItems, // Apply selected align item prop
      }}
    >
      {[...Array(numSubContainers)].map((_, index) => (
        <div
          key={index}
          style={{
            border: "1px solid grey",
            margin: "5px",
            height: dynamicSubContainerHeight, // Set dynamic height

            backgroundColor: "#f0f0f0",
          }}
        >
          Sub Container {index + 1}
        </div>
      ))}
    </div>
  );
};

export default Board;
