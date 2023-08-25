import axios from "axios";
import { useEffect, useState } from "react";

function RandomBeersPage() {
  const [randomBeer, setRandomBeer] = useState("");

  useEffect(() => {
    getbeerDetails();
  }, []);

  const getbeerDetails = async () => {
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/random`
      );
      console.log("repuesta api", response);
      setRandomBeer(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log("random cerveza", randomBeer);

  return (
    <div>
      <img src={randomBeer.image_url} alt="" />
      <h2>{randomBeer.name}</h2>
      <h4>{randomBeer.tagline}</h4>
      <p>"{randomBeer.first_brewed}"</p>
      <p>{randomBeer.attenuation_level}</p>
      <p>{randomBeer.description}</p>
      <h4>{randomBeer.contributed_by}</h4>
    </div>
  );
}

export default RandomBeersPage;
