import React from 'react';
import BookCard from "./BooksCard";

const BookList = (props) => {
    return(
        <div className="list">
            {
                props.books.map((book, i) => {
                    return <BookCard
                    key={i}
                    image={book.volumeInfo.imageLinks.thumbail}
                    title={book.volumeInfo.title}
                    author={book.volumeInfo.authors}
                    published={book.volumeInfo.publishDate}
                    />


                })
            }
        </div>
    )
}

export default BookList
