import { useParams } from "react-router-dom";
import type { Product as PT,ProductInfoParams } from "../Types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Product from "../Components/Product";
import SkeletonLayout from "../Components/SkeletonLayout";

const ProductInfo: React.FC = () => {
  const { productId } = useParams<ProductInfoParams>();
  const {data, isLoading} = useQuery<PT>({
    queryKey: [`Product id ${productId}`],
    queryFn: async () => {
      const res = await axios.get<PT>(
        `https://api.escuelajs.co/api/v1/products/${productId}`
      );
      return res.data;
    },
  });
  return (
    <div className="w-[80%] flex justify-center items-center mx-auto">
        <div>
            {
                isLoading ? <SkeletonLayout />: <Product product={data as PT}/> 
            }
        </div>
    </div>
  );
};

export default ProductInfo;
