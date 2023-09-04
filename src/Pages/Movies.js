import React, { useEffect, useState } from "react";
import Card from "../Components/Card";

const Movies = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          `Bearer ${process.env. REACT_APP_API_KEY}`,
      },
    };

    // Permet de récupérer les données d'une API // Similaire à Axios
    // ATTENTION /!\ RESSOURCE EXTERNE, qui dit RESSOURCE EXTERNE DIT UN HOOK SPECIFIQUE, /!\
    // ATTENTION AUX BOUCLES INFINIES MEME SI CA FONCTIONNE

    fetch(
      `https://api.themoviedb.org/3/movie/popular?language=fr-FR&page=${1}`,
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
    <div className="container">
      <h1>Sélection des meilleurs films du moment</h1>
      <div className="wrapper-cards">
        {data.map((movie, i) => (
          <Card oneMovie={movie} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Movies;
