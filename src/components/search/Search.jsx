import React, { useState } from "react";
import { connect } from "react-redux";
import Nav from "../layout/Nav";
import { searchFlick } from "../../actions/SearchAction";

const Search = ({ search: { error, loading }, searchFlick }) => {
  const [searchState, setSearchState] = useState("");
  const onChange = (e) => {
    setSearchState(e.target.value);
  };
  const onSubmitSearch = () => {
    searchFlick(searchState);
  };
  return (
    <div className='search-area'>
      <Nav />
      <div className='search-wrapper'>
        <div className='search_box'>
          <input type='text' placeholder='search flick' onChange={onChange} />
          <a onClick={onSubmitSearch} href='#!'>
            <i className='fas fa-search srch'></i>
          </a>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  search: state.search,
});

export default connect(mapStateToProps, { searchFlick })(Search);
