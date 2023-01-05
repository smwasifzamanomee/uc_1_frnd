import React, { useState } from "react";
import { QuestionsData } from "../../Data/data";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import "../../styles/Faq.css";
import Container from "../../Components/Container";
import Button from "../../Components/Ui/Button";
import ExclusiveDeals from "./ExclusiveDeals";

const Faq = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <Container className={"py-12"}>
      <h1 className="md:text-5xl text-3xl font-semibold mb-10 font-sans text-center">
        Popular <span className="text-primary"> queries. </span>
      </h1>

      <div className="min-h-screen ">

        <div className="md:w-[1000px] mx-auto grid col-span-1 gap-y-6 py-8">
          {QuestionsData.map((item) => (
            <article key={item.id} className=" shadow p-4">
              {/* Title */}
              <div
                className="flex items-center justify-between h-10 cursor-pointer"
                onClick={() => toggle(item.id)}
              >
                <h2 className="font-semibold md:text-lg text-sm">
                  <span className="mr-4 text-primary">{item.id}</span>
                  {item.question}
                </h2>
                {selected === item.id ? <AiOutlineMinus /> : <AiOutlinePlus />}
              </div>
              {/* Content */}
              <p
                className={`${
                  selected === item.id ? "content show mt-8" : "content"
                } text-muted_gray text-sm text-justify`}
              >
                {item.answer}
              </p>
            </article>
          ))}
        </div>

        <div className=' md:w-[1000px] mx-auto md:h-[400px] bg-primary rounded-2xl mt-16'>
          <ExclusiveDeals />
        </div>

      </div>


    </Container>
  );
};

export default Faq;
