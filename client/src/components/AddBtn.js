import React from "react";
import Button from "@material-ui/core/Button";

// add a book to the Saved page
const AddBtn = props => (
<Button>
     <span className="add-btn" {...props}>
    Add to bookshelf
  </span>
</Button>
 
);

export default AddBtn;