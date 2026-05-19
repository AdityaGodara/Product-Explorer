import { useEffect, useState } from "react";
import ProductCards from "./Components/ProductCards";
import SearchBar from "./Components/SearchBar";
import axios from "axios";
import './App.css'

function App() {

  const [search, setSearch] = useState("");
  const [products, setProducts] = useState<any>([]);
  const [category, setCategory] = useState("All Categories");
  const [sortBy, setSortBy] = useState("default");

  const fetchData = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      if (res.status == 200) {
        setProducts(res.data);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      return <h1>Something went wrong!</h1>
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const categories = [
    "All Categories",
    ...new Set(products.map((product: any) => product.category))
  ]

  const filteredProducts = products.filter((product: any) => {

    const matchSearch = product.title.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === "All Categories" || product.category === category;

    return matchSearch && matchCategory;

  })
    .sort((a: any, b: any) => {

      switch (sortBy) {

        case "low-high":
          return a.price - b.price;

        case "high-low":
          return b.price - a.price;

        default:
          return 0;
      }

    });
  ;

  return (
    <>

      <SearchBar
        search={search}
        setSearch={setSearch}
        className="top-bar"
      />
      <div className="utilities">
        <select
          className="category-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat: any) => {
            return (
              <option key={cat} value={cat}>
                {cat}
              </option>
            )
          })}
        </select>
        <select
          className="sort-filter"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >

          <option value="default">
            Sort By
          </option>

          <option value="low-high">
            Price: Low to High
          </option>

          <option value="high-low">
            Price: High to Low
          </option>

        </select>
      </div>

      <div className="card-cont">

        {filteredProducts.length === 0 ? (
          <h2 className="no-result">No products found!</h2>
        ) : (filteredProducts.map((product: any) => (
          <ProductCards
            key={product.id}
            product={product}
          />
        )))
        }

      </div>

    </>
  )
}

export default App;