import React, { Component } from "react"
import SearchArea from "./SearchArea";
import BookList from "./BookList"
import request from "superagent";

// this is a smart component it holds the site state
class Books extends Component {

    constructor(props) {
        super(props);
// this marks the changing factors in the site 
        this.state= {
            books:[],
            searchField: "",
            sort:""
        }
    } 

    //  this event covers the users input and creates an event that will enable the api to be called 
    // 
    searchBook = (e) =>{
        e.preventDefault();
        request
        .get("https://www.googleapis.com/books/v1/volumes")
        .query({q: this.state.searchField })
        .then((data) => {
            console.log(data)
            
            this.setState({ books: [...data.body.items]})
        })
    }


    handleSearch = (e) => {
        console.log(e.target.value);
        this.setState({ searchField: e.target.value })
    }

handleSort = (e) => {
    this.setState({sort: e.target.value })
}

    render() {
        const sortedBooks = this.state.books.sort((a, b) => {
            if (this.state.sort === "Newest") {
                return parseInt(b.volumeInfo.publishedDate.substring(0,4)) - parseInt(a.volumeInfo.publishedDate.substring(0, 4));
            }
            else if (this.state.sort === "Oldest") {
                return parseInt(a.volumeInfo.publishedDate.substring(0,4)) - parseInt(b.volumeInfo.publishedDate.substring(0, 4));
            }
        }
        )
        return (
            
        <div>
            <SearchArea handleSort={this.handleSort} searchBook={this.searchBook} handleSearch={this.handleSearch}/>
            < BookList books={sortedBooks} />
        </div>
    )
    }
}


export default Books
