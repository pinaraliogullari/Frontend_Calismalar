import React from 'react'

const SearchBar = (props) => {

  const handleFormSubmit=e=>{
    e.preventDefault();
  }

  return (
    <>
      <form onSubmit={handleFormSubmit} className="d-flex" role="search">
        <input onChange={props.searchMovie} className="form-control me-2 mb-3" type="search" placeholder="Search" aria-label="Search"
      />
        <button className="btn btn-outline-success mb-3" type="submit">Search</button>
      </form>
    </>
  )
}

export default SearchBar;