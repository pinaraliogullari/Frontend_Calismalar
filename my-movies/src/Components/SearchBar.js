import React from 'react'

const SearchBar = (props) => {

  const handleFormSubmit = e => {
    e.preventDefault();
  }

  return (
    <>
      <form onSubmit={handleFormSubmit} className=" row d-flex justify-content-between" role="search">

        <div className='col-md-8'>
          <input onChange={props.searchMovie} className="form-control me-2 mb-3" type="search" placeholder="Search" aria-label="Search"
          />
        </div>
        <div className='col-md-4 d-flex justify-content-between '>
          <button className="btn btn-primary mb-3 flex-fill me-2" type="submit">Search Movie </button>
          <button className="btn btn-danger mb-3 flex-fill" type="submit">Add Movie </button>
        </div>
        <div className='col-md-2'>


        </div>


      </form>
    </>
  )
}

export default SearchBar;