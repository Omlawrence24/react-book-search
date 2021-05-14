import React, { Component } from "react"
import SearchArea from "./SearchArea";
import BookList from "./BookList"
import request from "superagent";

// this is a smart component it holds the site state
class Books extends Component {

    constructor(props) {
        super(props);
// this marks the chaanging factors in the site 
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
            // this output the clean data function to cover any null info 
            const cleanData = this.cleanData(data)
            this.setState({ books: [cleanData]})
        })
    }


    handleSearch = (e) => {
        console.log(e.target.value);
        this.setState({ searchField: e.target.value })
    }

handleSort = (e) => {
    this.setState({sort: e.target.value })
}

cleanData = (data) => {
    const cleanedData = data.body.items.map((book) =>{
        if(book.volumeInfo.hasOwnProperty("publishedDate") === false) {
        book.volumeInfo["publishedDate"] = "0000"
    }
    else if (book.volumeInfo.hasOwnProperty("imageLinks") === false) {
        book.volumeInfo["imageLinks"] = {thumbnail: "https://vignette.wikia.nocookie.net/pandorahearts/images/a/ad/Not_available.jpg/revision/latest?cb=20141028171337"}
    }
    
    return book;
})
    
 return cleanedData;


}
    render() {
        const sortedBooks = this.state.books.sort((a, b) => {
            if (this.state.sort === "Newest") {
                return parseInt(b.volumeInfo.publishedDate.substring(0,4)) - parseInt(a.volumeInfo.publishedDate.substring(0, 4));
            }
            else if (this.state.sort === "Oldest") {
                return parseInt(a.volumeInfo.publishedDate.substring(0,4)) - parseInt(b.volumeInfo.publishedDate.substring(0, 4));
            }
        })
        
        return (
        <div>
            <SearchArea handleSort={this.handleSort} searchBook={this.searchBook} handleSearch={this.handleSearch}/>
            < BookList books={sortedBooks} />
        </div>
    )
    }
}


export default Books
