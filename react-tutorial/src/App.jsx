import MovieSearch from "./components/MovieSearch";

const App = () => {
  return (
    <div className="dark:bg-slate-900">
      <h1 className="text-center text-3xl font-bold text-orange-300 h-16 pt-2">
        Movie Search
      </h1>
      <MovieSearch />
    </div>
  );
};

export default App;
