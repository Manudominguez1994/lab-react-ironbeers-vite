import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllBeersPage() {
  const [allBeers, setAllBeers] = useState([]);

  useEffect(() => {
    getBeers();
  }, []);
  const getBeers = async () => {
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      // console.log(response.data);
      setAllBeers(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(allBeers);
  return (
    <div>
      <h2>Todas la servesita</h2>
      {allBeers.map((eachBeer) => {
        return (
          <div key={eachBeer._id}>
            <Link to={`/beers/${eachBeer._id}`}>
            <img src={eachBeer.image_url} alt="" />
            <h2>{eachBeer.name}</h2>
            <p>{eachBeer.tagline}</p>
            <h4>{eachBeer.contributed_by}</h4>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default AllBeersPage;
