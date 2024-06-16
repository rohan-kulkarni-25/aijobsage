import React from "react";

const Spinner = () => {
  return (
    <div className="absolute h-screen w-screen bg-white">
      <Spinner label="Loading..." color="warning" />
    </div>
  );
};

export default Spinner;
