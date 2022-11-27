import { useState } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Search from "./components/Search";
import axios from "axios";
const App = () => {
  const [results, setResults] = useState([]);

  async function callback(params) {
    if(params){
      const {data} = await axios.get(`http://localhost:8800/${params}`);
      setResults(data[0]);
    }
  }

  return (
    <div className="px-4 py-2 dark:bg-slate-400 h-full w-full bg-image">
      <Header />
      <div className="flex justify-center  dark:text-gray-50-400">
        <Search callback={callback} />
      </div>
      <div className="mt-6 flex justify-center dark:text-gray-50-400">
        <Card results={results} />
      </div>
    </div>
  );
};

export default App;
