import { ChangeEvent, useEffect, useState } from "react";
import { Footer } from "../components/Footer/Footer";
import { Headers } from "../components/Headers/Headers";
import { Products } from "../components/Products/Products";
import productsList from "../data/product";
import { ProductList } from "../types/ProductList";

export const Home = () => {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState();
  const [list, setList] = useState<ProductList[]>(productsList);
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    let input: string = e.target.value;
    setSearch(input);
  };
  const handleClick = () => {};

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    let value: string = e.target.value;
    setFilter(value);
  };

  useEffect(() => {
    console.log(filter);
  }, [filter]);

  return (
    <div>
      <Headers
        selectFn={handleSelect}
        inputFn={handleInput}
        clickFn={handleClick}
      />
      <Products data={list} />
      <Footer />
    </div>
  );
};
