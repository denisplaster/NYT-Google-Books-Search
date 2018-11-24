import React, { Component} from 'react'
import SearchArea from "../SearchArea";
import request from "superagent";
import BookList from '../BookList'


class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchField: ""
    };
  }


  handleSearch = e => {
    console.log(e.target.value);
    this.setState({ searchField: e.target.value });
  };
  searchBook = (e) => {
    e.preventDefault();
    request
      .get("https://www.googleapis.com/books/v1/volumes")
      .query({ q: this.state.searchField })
      .then((data) => {
        console.log(data)
        this.setState({ books: [...data.body.items]});
      })
  };

  render() {
    return (
      <div>
        <SearchArea
          searchBook={this.searchBook}
          handleSearch={this.handleSearch}
        />
        <BookList books={this.state.books}/>
      </div>
    );
  }
}

export default Books;