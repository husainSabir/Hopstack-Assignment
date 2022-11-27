import Header from "./components/Header";
const App = () => {
  return (
    <div className="px-4 py-2 dark:bg-slate-400 h-full w-full bg-image">
      <Header />
      <div className="text-left dark:text-yellow-100">App</div>
    </div>
  );
};

export default App;
