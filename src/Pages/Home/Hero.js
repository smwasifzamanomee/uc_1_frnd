import { useEffect, useRef, useState } from "react";
import Container from "../../Components/Container";
import FormInput from "../../Components/Form/FormInput";
import Button from "../../Components/Ui/Button";
import { destinationData, pickupData } from "../../Data/data";
import HeroImg from "../../images/hero.png";
import { MdOutlineArrowBackIosNew} from "react-icons/md";
import { Link } from "react-router-dom";


const Hero = () => {
  
  return (
    <Container>
      <div className="grid md:grid-cols-2 grid-cols-1 justify-between items-center min-h-[600px]">
        <div>
          <h1 className="text-6xl sm:text-3xl tracking-wider py-5">
            Safe Travels <br />
            <p className="mt-4 ">Anytime Anywhere </p>
          </h1>
          <p className=" md:w-[500px] text-lg tracking-wider leading-8 py-4 text-text_inverted">
            A Team of experienced tourism professionals will provide you with
            the best advice and tips for your desire place.
          </p>
          <div className="flex items-center gap-6">
          <Button
          width={'w-[180px]'}
            className={
              "border-2 border-bg_info text-bg_info hover:bg-bg_info hover:text-light my-5"
            }
          >
            <a href='#services'>Discover Now</a>
          </Button>
          <Button
          width={'w-[180px]'}
            className={
              "border-2 border-primary text-primary hover:bg-primary hover:text-light my-5"
            }
          >
           <Link to='/book-trip'> Book Now</Link>
          </Button>
          </div>
        </div>
        <div className="text-center">
          <img className="mx-auto" src={HeroImg} alt={HeroImg} />
        </div>
      </div>
    </Container>
  );
};

export default Hero;
