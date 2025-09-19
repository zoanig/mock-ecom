import React, { useContext } from "react";
import type { ProductParams } from "../Types";
import { motion } from "motion/react";
import { AppContext } from "../App";

const Product: React.FC<ProductParams> = ({ product }) => {
  const appContext = useContext(AppContext);
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 0.3,
      }}
      className="flex md:flex-row flex-col items-center  md:py-32 py-20 gap-5"
    >
      <div className="flex flex-col gap-1">
        <div>
          <img
            className="md:h-[40vh] md:min-w-[41vh] md:w-[40vh] w-[100%] rounded-lg"
            src={product.images[0]}
            alt="img1"
          />
        </div>
        <div className="flex gap-1">
          <img
            className="md:h-[20vh] md:w-[20vh] w-[50%] rounded-lg"
            src={product.images[1]}
            alt="img2"
          />
          <img
            className="md:h-[20vh] md:w-[20vh] w-[49%]  rounded-lg"
            src={product.images[2]}
            alt="img3"
          />
        </div>
      </div>
      <div className="flex flex-col items-start justify-center">
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <span className="bg-oth text-cusT font-bold py-1 px-3 mb-3 mt-1 rounded-full text-xs shadow-sm">
          {product.category.name}
        </span>
        <div className="flex gap-3 md:flex-row flex-col md:items-center w-[100%]">
          <span className="opacity-75 font-bold">Price: ${product.price}</span>
          <motion.button
            whileTap={{ scale: 0.8 }}
            onClick={(e) => {
              e.stopPropagation();
              appContext?.addToCart(product);
            }}
            disabled={appContext?.cart?.includes(product)}
            className="bg-oth text-cusT md:w-max w-[100%] font-semibold py-1 px-3 rounded-full"
          >
            Add To Cart
          </motion.button>
        </div>
        <p className="mt-5">{product.description}</p>
      </div>
    </motion.div>
  );
};

export default Product;
