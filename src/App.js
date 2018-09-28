import React, { Component } from 'react';
// import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import './App.css';
import axios from 'axios';
import Book from './components/Book';
class App extends Component {
constructor() {
  super()
  this.state = {
    isbn_data: '',
    books: [],
    isLoading: false,
    error: null
  }
}
updateText = (e) =>{
  console.log(e.target.value);
  this.setState({
    isbn_data: e.target.value
  })
}

 getData = () => {
 
  this.setState({ isLoading: true });
   console.log("searching data", this.state.isbn_data);
    axios.get('https://www.googleapis.com/books/v1/volumes?q=intitle:' + this.state.isbn_data.toString())
    .then(result => {
    console.log(result);
    if(result.data["totalitems"]!==0)
    {
      this.setState({
      isbn_data: '',
      books: result.data.items,
      isLoading: false
    })
  }
  else this.setState({books: null});
  })
}
  render() {
    console.log("Books ", this.state.books)
    if (this.state.books===undefined)
    return <h2>Change word of searching</h2>
    
    return (
      <div className="App">
        <header className="App-header">
         <h1 className="App-title">BookLook<i className="fa fa-eye"></i></h1>
         <div className="form-inline">
          <input type="text" id="isbn"  className="form-control" onChange={this.updateText} value= {this.state.isbn_data} placeholder="Book title" />
          <button onClick={this.getData} type="reset" className="btn btn-primary">Search</button>
       </div>
        </header>
        <div className="App" id="books">
        <ul>
        {this.state.books.map(u => {
            return <Book key={u.id} bookData={u} />
        }) 
        }
        </ul>
        </div>
        <p className="App-intro">
        </p>
      </div>
    );
  }
}

export default App;
