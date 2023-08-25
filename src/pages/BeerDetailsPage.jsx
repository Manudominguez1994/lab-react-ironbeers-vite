import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BeerDetailsPage() {
  const params = useParams();
  const [thisBeer, setThisBeer] = useState("");
  console.log("detalles de mi cerveza", params);
  useEffect(() => {
    beerDetails();
  }, []);
  const beerDetails = async () => {
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${params.beerId}`
      );
      console.log(response);
      setThisBeer(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log("mi cerveza", thisBeer);
  return (
    <div>
      <img src={thisBeer.image_url} alt="" />
      <h2>{thisBeer.name}</h2>
      <h4>{thisBeer.tagline}</h4>
      <p>"{thisBeer.first_brewed}"</p>
      <p>{thisBeer.attenuation_level}</p>
      <p>{thisBeer.description}</p>
      <h4>{thisBeer.contributed_by}</h4>
    </div>
  );
}

export default BeerDetailsPage;
