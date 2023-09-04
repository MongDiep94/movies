import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const Avis = ({ posts, setPosts }) => {
  const [userName, setUserName] = useState();
  const [comment, setComment] = useState();
  const [rating, setRating] = useState();

  const handleChange = (e) => {
    if (e.target.id === "username") {
      setUserName(e.target.value);
    }
    if (e.target.id === "comment") {
      setComment(e.target.value);
    }
    if (e.target.id === "rating") {
      setRating(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let onePost = {
      userName,
      comment,
      rating,
    };

    setPosts([...posts, onePost]);
    setUserName("");
    setComment("");
    setRating("");
    console.log(onePost);
  };

  return (
    <div className="avis_background">
      <div className="container">
        <div className="wrapper-form">
          <div className="form-content">
            <h1>
              <FontAwesomeIcon icon={faPenToSquare} /> Donnez votre avis sur les
              films !
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="top-element">
                <div className="username-box">
                  <label>
                    <p>Pseudo</p>
                    <input
                      id="username"
                      type="text"
                      name="userName"
                      value={userName}
                      placeholder="Put your name"
                      onChange={handleChange}
                    />
                  </label>
                </div>
                <div className="rating-box">
                  <p>Note</p>
                  <div className="rating">
                    <label>
                      <input
                        id="rating"
                        type="radio"
                        name="rating"
                        value="1"
                        checked={rating === "1"}
                        onChange={handleChange}
                      />
                      <span className="icon">★</span>
                    </label>
                    <label>
                      <input
                        id="rating"
                        type="radio"
                        name="rating"
                        value="2"
                        checked={rating === "2"}
                        onChange={handleChange}
                      />
                      <span className="icon">★</span>
                      <span className="icon">★</span>
                    </label>
                    <label>
                      <input
                        id="rating"
                        type="radio"
                        name="rating"
                        value="3"
                        checked={rating === "3"}
                        onChange={handleChange}
                      />
                      <span className="icon">★</span>
                      <span className="icon">★</span>
                      <span className="icon">★</span>
                    </label>
                    <label>
                      <input
                        id="rating"
                        type="radio"
                        name="rating"
                        value="4"
                        checked={rating === "4"}
                        onChange={handleChange}
                      />
                      <span className="icon">★</span>
                      <span className="icon">★</span>
                      <span className="icon">★</span>
                      <span className="icon">★</span>
                    </label>
                    <label>
                      <input
                        id="rating"
                        type="radio"
                        name="rating"
                        value="5"
                        checked={rating === "5"}
                        onChange={handleChange}
                      />
                      <span className="icon">★</span>
                      <span className="icon">★</span>
                      <span className="icon">★</span>
                      <span className="icon">★</span>
                      <span className="icon">★</span>
                    </label>
                  </div>
                </div>
              </div>
              <textarea
                id="comment"
                name="comment"
                value={comment}
                placeholder="Put your comment..."
                onChange={handleChange}
              />
              <button type="submit">Envoyer</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Avis;
