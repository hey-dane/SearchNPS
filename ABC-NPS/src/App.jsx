import React, { useState } from "react";
import PreviewList from "./Components/PreviewList";
import FeaturePark from "./Components/FeaturePark";
import Header from "./Components/Header";

export const App = () => {
  const [selectedParkId, setSelectedParkId] = useState(null);

  return (
    <div>
      <div className="header-container=">
        <Header />
      </div>
      <div className="app-container">
        <PreviewList setSelectedParkId={setSelectedParkId} />
        {selectedParkId && <FeaturePark selectedParkId={selectedParkId} />}
      </div>
    </div>
  );
};

export default App;
