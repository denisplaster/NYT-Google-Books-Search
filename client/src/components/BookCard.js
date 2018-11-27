import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
require("../App.css");

const BookCard = props => {
  return (
    <div className="card-container">
      <img src={props.image} alt="" />
      <div className="desc">
        <h2>{props.title}</h2>
        <h3>By: {props.author}</h3>
        <a href={props.link}>
          {" "}
          <Typography variant="button" gutterBottom>
            Book Link
          </Typography>
        </a>
        <Button>
          <span className="add-btn" {...props}>
            Add to bookshelf
          </span>
        </Button>
        <Typography variant="body2" gutterBottom>
          {props.description}
        </Typography>
      </div>
      <span />
    </div>
  );
};

export default BookCard;
