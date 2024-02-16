import React, { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import Cards from "../../components/Cards";

const Jewelry = () => {
  const [filteredItems, setFilteredItems] = useState([]);
  const [sortOption, setSortOption] = useState("default");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/products.json");
        const data = await response.json();
        
        // Filter only jewelry items
        const jewelryItems = data.filter((item) => item.category === "Jewelry");

        setFilteredItems(jewelryItems);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // shorting functionality
  const handelSortChange = (option) => {
    setSortOption(option);

    // logic for sorting
    let sortedItems = [...filteredItems];
    switch (option) {
      case "A-Z":
        sortedItems.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "Z-A":
        sortedItems.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "low-to-high":
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      case "high-to-low":
        sortedItems.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    setFilteredItems(sortedItems);
  };

  return (
    <div className="max-w-screen-2xl mx-auto container xl:px-28 px-4 mb-12 mt-28">
      <h2 className="title">Jewelry Collection</h2>

      {/* shorting options  */}
      <div className="flex justify-end mb-4 rounded-sm">
        <div className="bg-black p-2">
          <FaFilter className="text-white h-4 w-4" />
        </div>
        <select
          id="sort"
          onChange={(e) => handelSortChange(e.target.value)}
          value={sortOption}
          className="bg-black text-white px-2 py-1 rounded-sm"
        >
          <option value="default">Default</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
          <option value="low-to-high">Low-High</option>
          <option value="high-to-low">High-Low</option>
        </select>
      </div>

      {/* products cards  */}
      <Cards filteredItems={filteredItems} />
    </div>
  );
};

export default Jewelry;
