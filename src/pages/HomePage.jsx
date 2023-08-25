import { Link } from "react-router-dom";

function HomePage() {
    return(
        <div >
            
            <Link  to="/beers">
                <img src="src/assets/beers.png" alt="" />
                <h2>All Beers</h2>
                <p>Aqui todas las cevezas</p>
            </Link>
            <br />
            <Link to="/random-beer">
                <img src="src/assets/random-beer.png" alt="" />
                <h2>Random Beer</h2>
                <p>Aqui una cerveza random</p>
            </Link>
            <br />
            <Link to="/new-beer">
                <img src="src/assets/new-beer.png" alt="" />
                <h2>Nueva cerveza</h2>
                <p>Crea una nueva cerveza</p>
            </Link>
        </div>
    )
}

export default HomePage;
