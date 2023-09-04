import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar, faCalendar } from "@fortawesome/free-solid-svg-icons";

const Card = ({ oneMovie }) => {
  const imageUrl = `https://image.tmdb.org/t/p/original/${oneMovie.poster_path}`;

  const { title, release_date, vote_count, overview, vote_average } = oneMovie;
  return (
      <div className="card">
        <img src={imageUrl} alt={title} />
        <div className="descriptions">
          <h2>{title}</h2>
          <p className="date">
            <FontAwesomeIcon icon={faCalendar} className="icon" /> Date de
            sortie : {release_date}
          </p>
          <p className="vote border-bottom-p">
            <FontAwesomeIcon icon={faStar} className="icon" /> Nombre de votes :{" "}
            {vote_count}
          </p>
          <p className="resume">{overview}</p>
          <p className="average border-top-p">
            <FontAwesomeIcon icon={faHeart} className="icon" /> Note moyenne :{" "}
            {vote_average}
          </p>
        </div>
      </div>
  );
};

export default Card;
