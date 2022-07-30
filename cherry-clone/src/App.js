import Filters from './components/filters/Filters';
import Navbar from './components/Navbar';
import Offers from './components/offersection/Offers';
import Resturants from './components/resturantsection/Resturants';
import './final.css';
import userinfo from './db/userinfo.json';

function App() {
  return (
    <div className="App">
      <h1>chery clone app</h1>
      <Navbar info={userinfo.location} />
      <Offers />
      <section>
        <Filters />
        <Resturants />
      </section>
    </div>
  );
}

export default App;
