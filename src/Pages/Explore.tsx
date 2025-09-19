import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import type { Product } from "../Types";
import { AnimatePresence, motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import AnimatedButton from "../Components/AnimatedButton";
import SkeletonLoader from "../Components/SkeletonLoader";

const Explore = () => {
  const [offset, setOffset] = useState(0);
  const navigate = useNavigate();
  const limit = 20;

  const topRef = useRef<HTMLDivElement | null>(null);
  const firstLoad = useRef(true);

  const { data, isLoading, isFetching } = useQuery<Product[]>({
    queryKey: ["ExploreProducts", offset],
    queryFn: async () => {
      const res = await axios.get(
        `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}`
      );
      return res.data;
    },
  });

  const { data: nextPage } = useQuery<Product[]>({
    queryKey: ["ExploreProductsNext", offset],
    queryFn: async () => {
      const res = await axios.get(
        `https://api.escuelajs.co/api/v1/products?offset=${offset + limit}&limit=${limit}`
      );
      return res.data;
    },
    enabled: !!data,
  });

  const hasPrev = offset > 0;
  const hasNext = (nextPage?.length ?? 0) > 0;

  useEffect(() => {
    if (!data) return;
    if (firstLoad.current) {
      firstLoad.current = false;
      return;
    }

    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [data]);

  return (
    <AnimatePresence>
    <div ref={topRef} className="w-[80vw] mx-auto flex flex-col items-center py-32">
      <div>
        {!isLoading ? (
          <div className="flex flex-wrap justify-center gap-6 py-3">
            {data?.map((product) => (
              <motion.div
                onClick={() => navigate(`/products/${product.id}`)}
                initial={{ y: 30 }}
                whileInView={{ y: 0 }}
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

                <span className="text-sm mb-2 opacity-65">Price: ${product.price}</span>

                <div className="mt-auto">
                  <AnimatedButton
                    value="Add To Cart"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    transparent={false}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <SkeletonLoader count={limit} />
        )}
      </div>

      <div className="flex gap-20 mt-6">
        <button
          className="text-xl font-semibold bg-oth py-1 px-3 rounded disabled:opacity-50"
          disabled={!hasPrev || isFetching}
          onClick={() => setOffset((prev) => Math.max(prev - limit, 0))}
        >
          Prev
        </button>
        <button
          className="text-xl font-semibold bg-oth py-1 px-3 rounded disabled:opacity-50"
          disabled={!hasNext || isFetching}
          onClick={() => setOffset((prev) => prev + limit)}
        >
          Next
        </button>
      </div>
    </div>
    </AnimatePresence>
  );
};

export default Explore;
