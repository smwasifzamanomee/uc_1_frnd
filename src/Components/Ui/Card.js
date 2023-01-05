import React from "react";

const Card = ({ item, className, imgClass }) => {
  console.log(item?.NewItem);
  // console.log(item);
  const { title, description, image, IconItem } = item;
  return (
    <div
      className={`${className}`}
    >
      <img className={`${imgClass}`} src={image} alt={image} />
      {/* <IconItem /> */}
      <div className="px-4 py-8">
        <h2 className=" font-bold text-dark text-xl mb-3">{title}</h2>
        <p className=" text-text_inverted md:text-[15px] text-[14px] ">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
