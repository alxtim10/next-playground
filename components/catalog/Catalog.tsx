import React from "react";
import CatalogCard from "./CatalogCard";

const Catalog = () => {
  return (
    <section className="mt-8 h-full">
      <h1 className="text-xs font-extrabold">For You</h1>
      <div className="grid grid-cols-2 gap-4 mt-2">
        {[...Array(8)].map((_, i) => (
          <div key={i}>
            <CatalogCard />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Catalog;
