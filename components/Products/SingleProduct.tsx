import React from "react";
import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const SingleProduct = ({ product }: { product: Product }) => {
  const { id, icon, title, description } = product;

  return (
    <Link href={`/products/${id}`}>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -10,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center w-full max-w-xs h-full bg-white dark:bg-blacksection rounded-lg shadow-solid-3 transition-transform duration-300 hover:scale-105 hover:shadow-solid-4 dark:border-strokedark p-6 cursor-pointer"
      >
        <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-primary mb-4">
          <Image src={icon} width={48} height={48} alt={title} />
        </div>
        <h3 className="text-xl font-semibold text-center text-black dark:text-white mb-4">
          {title}
        </h3>
        <p className="text-center text-gray-700 dark:text-gray-300">
          {description}
        </p>
      </motion.div>
    </Link>
  );
};

export default SingleProduct;
