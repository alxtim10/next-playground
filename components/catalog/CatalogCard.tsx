import React from "react";

const CatalogCard = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="bg-green-200 w-full h-40 rounded-lg"></div>
      <div>
        <h1 className="text-sm">Apple 16 Pro Max 512 GB</h1>
        <h1 className="text-md font-bold">Rp. 500.000</h1>
      </div>
    </div>
  );
};

export default CatalogCard;
