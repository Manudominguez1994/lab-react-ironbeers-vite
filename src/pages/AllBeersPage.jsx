import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllBeersPage() {
  const [allBeers, setAllBeers] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchBeer, setSearchBeer] = useState("");

  const queryBeer = async (event) => {
    const searchBeer = event.target.value
    setSearchBeer(searchBeer);

    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/search?q=${searchBeer}`
      );
      console.log("response del query",response);
      setSearchResults(response.data)
    } catch (error) {
      console.log(error);
    }
  };
  const filteredArr = allBeers.filter((eachProduct)=>{
    if(eachProduct.name.includes(searchResults.name) === true){
        setAllBeers(filteredArr)
        return true
    }else{
        return false
    }
})


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
  console.log("cervecas con filtro",filteredArr);
  console.log("resultados de busqueda", searchResults);
  console.log("cerveza buscada",searchBeer);
  console.log("todas las cervezas sin filtro",allBeers);
  return (
    <div>
      <h2>Todas la servesita</h2>
      <form action="">
        <label htmlFor="query">Buscar</label>
        <input
          type="text"
          name="query"
          value={searchBeer}
          onChange={queryBeer}
        />
      </form>
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
