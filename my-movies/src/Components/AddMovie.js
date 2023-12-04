import React from 'react';
import serialize from 'form-serialize';

const AddMovie = (props) => {
     const handleFormSubmit = e => {
     e.preventDefault();
     const newMovie=serialize(e.target,{has:true});
     props.onAddMovie(newMovie);
    }

  return (
    <>
          <div className="container">
              <form className="mt-5" onSubmit={handleFormSubmit}>
                  <input className="form-control mb-3" id="disabledInput" type="text" placeholder="Fill The Form To Add A Movie.." disabled />
                  <div className="form row">
                      <div className="form-group col-md-10">
                          <label htmlFor="inputName">Name</label>
                          <input type="text"
                              className="form-control"
                              name="name" />
                      </div>
                      <div className="form-group col-md-2">
                          <label htmlFor="inputRating">Rating</label>
                          <input
                              type="text"
                              className="form-control "
                              name="rating" />
                      </div>
                  </div>
                  <div className="form-row">
                      <div className="form-group col-md-12">
                          <label htmlFor="inputImage">Image URL</label>
                          <input
                              type="text"
                              className="form-control "
                              name="imageURL" />
                      </div>
                  </div>
                  <div className="form-row">
                      <div className="form-group col-md-12">
                          <label htmlFor="overviewTextarea">Overview</label>
                          <textarea
                              className="form-control "
                              name="overview" rows="5"></textarea>
                      </div>
                  </div>
                  <input type="submit" className="btn btn-danger btn-block mt-3" value="Add Movie" />
              </form>
          </div>
          

    </>
  )
}

export default AddMovie;