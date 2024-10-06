import Banner from "@/components/banner/Banner";
import Catalog from "@/components/catalog/Catalog";
import Category from "@/components/category/Category";
import NavbarMobile from "@/components/navbar/NavbarMobile";
import Image from "next/image";
export default function Home() {
  return (
    <main>
      <NavbarMobile />
      <div className="px-5 my-20">
        <Banner />
        <Category />
        <Catalog />
      </div>
    </main>
  );
}
