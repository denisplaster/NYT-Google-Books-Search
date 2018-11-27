import React, { Component } from "react";
import API from "../../utils/API";
import Button from "@material-ui/core/Button";
import BookCard from "../BookCard";
import DeleteBtn from "../DeleteBtn";

class SavedBooks extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res => {
        console.log(res.data);
        this.setState({
          books: res.data
        });
      })
      .catch(err => console.log(err));
  };
  deleteBook = () => {
    API.deleteBook(this.state.id)
      .then(res => {
        console.log(res.id);
        this.loadBooks();
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div>
        <h1>Saved Books</h1>

        {this.state.books.map(book => (
          <BookCard
            id={book._id}
            key={book._id}
            title={book.title}
            authors={book.authors}
            description={book.description}
            image={book.image}
            link={book.link}
          />
        ))}
        <Button>
          <DeleteBtn onClick={this.deleteBook()} />
        </Button>
      </div>
    );
  }
}

export default SavedBooks;
