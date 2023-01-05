import React from "react";
import Container from "../../Components/Container";
import Card from "../../Components/Ui/Card";
import { ThingsYouNeedData } from "../../Data/data";

const ThingsYouNeed = () => {
  return (
    <Container
      bgColor={"bg-bg_primary"}
      className="flex items-center justify-center"
      height="min-h-[650px]"
    >
      {/* Heading content */}
      <div className="mb-10">
        <h1 className="font-semibold md:text-5xl text-3xl text-center text-dark font-sans">
          Things you need <span className="text-primary">to do</span>
        </h1>
        <p className="text-center text-text_inverted py-4">
          Simply follow these four steps to book a ride
        </p>
      </div>

      {/* Card */}
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-16 gap-y-16 justify-items-center py-8 ">

        {ThingsYouNeedData.map(item => <Card 
        key={item.id}
        item={item}
        />)}

      </div>
    </Container>
  );
};

export default ThingsYouNeed;
