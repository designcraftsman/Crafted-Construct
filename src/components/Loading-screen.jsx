import React from "react";

function LoadingScreen() {
  return (
    <div className="loading-container"> {/* Main container for loading screen */}
        <div className="loading-container__content"> {/* Content area for loading animation */}
            <div className="loading-container__content__cube"></div> {/* Cube animation element */}
        </div>
    </div>
  );
}

export default LoadingScreen;