import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNmE0YjkxYmNjNGZiMmMyZDk1NGFlZjlkMmViMmU0NCIsInN1YiI6IjY0ZjBmZWZjM2E5OTM3MDExY2JkZDZiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sPjp8MlpHbSaX30XcjKyPlVcmv8-_N50jApvjq4x7bg",
      },
    };

    // Permet de récupérer les donnaées d'une API // Similaire à Axios
    // ATTENTION /!\ RESSOURCE EXTERNE, qui dit RESSOURCE EXTERNE DIT UN HOOK SPECIFIQUE, /!\
    // ATTENTION AUX BOUCLES INFINIES MEME SI CA FONCTIONNE

    fetch(
      "https://api.themoviedb.org/3/movie/popular?language=fr-FR&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setData(response.results);

        console.log(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="home_background">
      <div className="home_container">
        <div className="home_banner">
          <h1 className="home_welcome">Bienvenue sur notre site !</h1>
          <p className="home_welcometext">
            Si vous voulez passer de bons moments pendant le week-end ou de
            bonnes soirées devant vos films en streaming ou séries préférés, <span className="exergue">LIEPFLIX est la plateforme de streaming idéale.</span>
          </p>
        </div>
        <div className="home_wrapper">
            {data.slice(0, 3).map((movie, i) => (
              <Card oneMovie={movie} key={i} />
              ))}
            <Link to="/movies" className="voir-plus-button">
              •••
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
