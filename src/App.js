import CurrencyConverter from "./components/CurrencyConverter";
import NewsFeed from "./components/NewsFeed";

const App = () => {

  return (
    <div className="App">
      <h1>Crypto Dashboard</h1>
      <div className='dash'>
        <CurrencyConverter />
        <NewsFeed />
      </div>
    </div>
  );
};

export default App;
