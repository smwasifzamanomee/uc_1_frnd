import React from "react";
import { Link } from "react-router-dom";
import Container from "../Components/Container";
import Button from "../Components/Ui/Button";

const NotFound = () => {
  return (
    <Container>
      <div className="flex flex-col gap-y-6 justify-center items-center h-[800px] m-12 shadow-xl mx-auto border-t rounded-xl">
        <div className="text-9xl font-extrabold">
          4<span className="text-bg_info">0</span>4
        </div>
        <h1 className="text-center md:text-7xl text-5xl font-bold text-primary">
          Page Not Found
        </h1>
        <Link to="/" className="">
          <Button
            className={
              "py-4 px-12 mt-10 bg-bg_info hover:bg-primary transition-all text-light"
            }
          >
            Back to Home
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default NotFound;
