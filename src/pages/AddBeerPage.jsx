import axios from "axios";
import {  useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function AddBeerPage() {
    const navigate = useNavigate()  
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [brewerstips, setBrewerstips] = useState("");
  const [attenuationlevel, setAttenuationlevel] = useState(0);
  const [contributedby, setContributedby] = useState("");
  const [firstbrewed, setFirstbrewed] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handletaglineChange = (event) => {
    setTagline(event.target.value);
  };
  const handledescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const handlebrewerstipsChange = (event) => {
    setBrewerstips(event.target.value);
  };
  const handleattenuationlevelChange = (event) => {
    setAttenuationlevel(event.target.value);
  };
  const handlecontributedbyChange = (event) => {
    setContributedby(event.target.value);
  };
  const handlefirstbrewedChange = (event) => {
    setFirstbrewed(event.target.value);
  };
  const handleNewBeer = async (event) => {
    event.preventDefault()
    try {
      await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", {
        name: name,
        tagline: tagline,
        description: description,
        brewers_tips: brewerstips,
        attenuation_level: attenuationlevel,
        contributed_by: contributedby,
        first_brewed: firstbrewed,
      });
      navigate("/beers")
      console.log("cerveza creada");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Crea una cerveza</h2>
      <form action="">
        <label htmlFor="name">name:</label>
        <input
          type="text"
          name="name"
          onChange={handleNameChange}
          value={name}
        />
        <br />
        <label htmlFor="tagline">tagline:</label>
        <input
          type="text"
          name="tagline"
          onChange={handletaglineChange}
          value={tagline}
        />
        <br />
        <label htmlFor="description">description:</label>
        <textarea
          type="text"
          name="description"
          onChange={handledescriptionChange}
          value={description}
        />
        <br />
        <label htmlFor="brewers_tips">brewerstips:</label>
        <input
          type="text"
          name="brewers_tips"
          onChange={handlebrewerstipsChange}
          value={brewerstips}
        />
        <br />
        <label htmlFor="attenuation_level">attenuationlevel:</label>
        <input
          type="number"
          name="attenuation_level"
          onChange={handleattenuationlevelChange}
          value={attenuationlevel}
        />
        <br />
        <label htmlFor="contributed_by">contributed by:</label>
        <input
          type="text"
          name="contributed_by"
          onChange={handlecontributedbyChange}
          value={contributedby}
        />
        <br />
        <label htmlFor="first_brewed">first brewed:</label>
        <input
          type="text"
          name="first_brewed"
          onChange={handlefirstbrewedChange}
          value={firstbrewed}
        />
        <br />
        <button type="submit" onClick={handleNewBeer}>Agregar</button>
      </form>
    </div>
  );
}

export default AddBeerPage;
