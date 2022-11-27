import { useState } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Search from "./components/Search";
import axios from "axios";
const App = () => {
  const [results, setResults] = useState([]);

  async function callback(params) {
    if(params){
      try {
        const {data} = await axios.get(`http://localhost:8800/${params}`);
        setResults(data[0]);
      } catch (error) {
        console.log(error);
        throw error;
      }
    }
  }

  return (
    <div className="px-4 py-2 dark:bg-slate-400 h-full w-full bg-image">
      <Header />
      <div className="flex justify-center  dark:text-white">
        <Search callback={callback} />
      </div>
      <div className="mt-6 flex justify-center dark:text-white">
        <Card results={results} />
      </div>
    </div>
  );
};

export default App;
