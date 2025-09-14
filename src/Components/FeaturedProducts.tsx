import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { Product } from "../Types";
import SkeletonLoader from "./SkeletonLoader";
import AnimatedButton from "./AnimatedButton";
import { motion } from "motion/react";

const FeaturedProducts = () => {
  const { data, isLoading } = useQuery<Product[]>({
    queryKey: ["featured"],
    queryFn: async () => {
      const res = await axios.get<Product[]>(
        "https://api.escuelajs.co/api/v1/products?offset=25&limit=8"
      );
      return res.data;
    },
  });


  return (
    <div className="w-[85%] flex flex-col items-center mx-auto gap-5">
      <h1 className="text-4xl font-extrabold">Featured Products</h1>
      {
        !isLoading ? (<div className="flex flex-wrap justify-center gap-6 p-6">
        {data?.map((product) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            key={product.id}
            className="md:w-[250px] w-[300px] h-[365px] border-2 border-cusT rounded-2xl flex flex-col p-6 items-center"
          >
            <div className="relative flex justify-center mb-3">
              <img
                src={product.images[0]}
                alt={product.title}
                className="h-[180px] w-[180px] object-cover rounded-lg"
              />
              <span className="absolute bottom-2 right-2 bg-oth text-cusT font-bold py-1 px-3 rounded-full text-xs shadow-sm">
                {product.category.name}
              </span>
            </div>

            <p className="flex-1 text-center font-medium line-clamp-2">
              {product.title}
            </p>

            {/* Price */}
            <span className="text-sm mb-2 opacity-65">Price: ${product.price}</span>

            {/* Button (pushed to bottom) */}
            <div className="mt-auto">
              <AnimatedButton
                value="Add To Cart"
                onClick={() => {}}
                transparent={false}
              />
            </div>
          </motion.div>
        ))}
      </div>) : <SkeletonLoader count={8} />
      }
    </div>
  );
};

export default FeaturedProducts;
