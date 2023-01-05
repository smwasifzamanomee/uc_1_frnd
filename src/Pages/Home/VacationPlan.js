import React from "react";
import Card from "../../Components/Ui/Card";
import { VacationPlanData } from "../../Data/data";
import Slider from "react-slick";
import Container from "../../Components/Container";

const VacationPlan = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <Container className={"min-h-[800px] flex justify-center items-center"}>
      <h1 className="font-semibold md:text-5xl text-3xl text-center pb-6 text-dark font-sans">
        Why Book with <span className="text-primary">United Chauffer</span>
      </h1>

      <Slider 
      className="my-12"
      {...settings}>
        {VacationPlanData.map((item) => (
          <Card
            className="bg-light m-8"
            imgClass="w-full"
            key={item.id}
            item={item}
          />
        ))}
      </Slider>
    </Container>
  );
};

export default VacationPlan;
