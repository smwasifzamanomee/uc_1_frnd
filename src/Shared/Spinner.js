import React from "react";
import Container from "../Components/Container";

const Spinner = () => {
  return (
    <Container>
     <div className="w-full h-screen flex justify-center items-center">
      <h1 className="text-primary">Loading....</h1>
     </div>
    </Container>
  );
};

export default Spinner;
