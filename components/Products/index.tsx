"use client";
import React from "react";
import productsData from "./productsData";  // Renamed import
import SingleProduct from "./SingleProduct";  // Renamed import
import SectionHeader from "../Common/SectionHeader";

const Products = () => {
  return (
    <>
      {/* <!-- ===== Products Start ===== --> */}
      <section id="products" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "Islamic Products",
              subtitle: "Our Products",
              description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam
            ante in maximus.`,
            }}
          />
          {/* <!-- Section Title End --> */}
        
          <div className="mt-12.5 flex flex-wrap justify-center gap-8 px-4">
            {/* <!-- Products item Start --> */}

            {productsData.map((product, key) => (
              <SingleProduct product={product} key={key} />
            ))}
            {/* <!-- Products item End --> */}
          </div>
        </div>
      
      </section>

      {/* <!-- ===== Products End ===== --> */}
    </>
  );
};

export default Products;
