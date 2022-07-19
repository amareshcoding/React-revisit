import Filters from "./components/filters/Filters";
import Navbar from "./components/Navbar";
import Offers from "./components/offersection/Offers";
import Resturants from "./components/resturantsection/Resturants";

function App() {
  return (
    <div className="App">
     <h1>chery clone app</h1>
     <Navbar/>
     <Offers/>
     <Filters/>
     <Resturants/>
    </div>
  );
}

export default App;
