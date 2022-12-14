import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

const Search = ({ callback }) => {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      callback(searchQuery);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  function handleChange(event) {
    setSearchQuery(event.target.value);
  }

  return (
    <div className="w-6/12 flex justify-center items-center dark:bg-stone-700 rounded-md bg-white">
      <FaSearch size="16" className="mx-3 my-2" />
      <input
        className="w-full pr-4 py-2 outline-none placeholder-current dark:bg-stone-700 rounded-md"
        onChange={handleChange}
        placeholder="Enter Food Item"
        value={searchQuery}
      />
    </div>
  );
};

export default Search;
