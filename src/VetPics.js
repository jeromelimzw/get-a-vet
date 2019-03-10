import React from "react";
import { UncontrolledCarousel } from "reactstrap";
import vet_pics from "./static/vet_pics";

const VetPics = () => {
  return (
    <div className="w-30 center ">
      <UncontrolledCarousel items={vet_pics} />
    </div>
  );
};

export default VetPics;
