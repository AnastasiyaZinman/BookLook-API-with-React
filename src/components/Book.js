import React, { Component } from 'react';
class Book extends Component {
    render() 
    {
      const book = this.props.bookData;
      const img_path = `${book.volumeInfo['imageLinks']['thumbnail']}`;
      let description = ('description' in book.volumeInfo) ?  book.volumeInfo['description']:"No description.";
      let authors =('authors' in book.volumeInfo) ?  book.volumeInfo["authors"][0] : 'not specified';
      return (
        <div className="book"> 
        <h2> {book.volumeInfo['title']} </h2>
       
        <h3>Authors: {authors}</h3>
          <div className="row">
              <div className="description col-sm-10">{description}</div>
              <div className="col-sm-2"><img src={img_path} title={book.volumeInfo['title']}  alt={book.volumeInfo['title']}/></div>
          </div>
        
          
        </div>
      )
    }
  }
  export default Book;