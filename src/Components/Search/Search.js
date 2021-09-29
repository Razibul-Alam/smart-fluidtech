import React from 'react';
import { FormControl, InputGroup,Button } from 'react-bootstrap';

const Search = () => {
    return (
        <div className="text-center d-flex justify-content-center mt-5">
        <InputGroup className="mb-3 w-50 col-md-6 col-sm-12">
  <FormControl
    placeholder="search item by catagory"
    aria-label="Recipient's username"
    aria-describedby="basic-addon2"
  />
  <Button variant="danger" id="button-addon2" text-dark>
    Search
  </Button>
</InputGroup>
        </div>
    );
};

export default Search;