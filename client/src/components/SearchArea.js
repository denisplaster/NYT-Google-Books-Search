import React from "react";
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';



const SearchArea = (props) => {
  return (
    <div className="search-area>">
      <form onSubmit={props.searchBook} action="">
      <div className="center">
        <Input onChange={props.handleSearch} id="search" type="text" />
        <Button variant="contained" color="primary" type='submit'>Search</Button>
        </div>
      </form>
    </div>
  );
};

export default SearchArea;