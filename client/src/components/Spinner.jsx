import React from "react";
import { Spinner } from "@nextui-org/react";

const SpinnerComponent = () => {
  return (
    <div className="absolute h-screen w-screen top-0 bg-white flex  flex-col items-center justify-center gap-8 opacity-80">
      <Spinner color="primary" />
      <p className="tracking-widest">
        it's loading... why don't you hire{" "}
        <a
          className="font-bold text-voilet-400 underline"
          href="https://rohankulkarni.dev"
          target="_blank"
          rel="noreferrer"
        >
          rohankulkarni.dev
        </a>{" "}
        till then
      </p>
    </div>
  );
};

export default SpinnerComponent;
