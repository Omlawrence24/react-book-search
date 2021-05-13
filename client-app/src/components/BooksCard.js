import React from 'react'

const BooksCard = (props) => {
    return (
        <div className="card-container">
            <img src=""  alt="" />
            <div className="desc">
            <h2>Tittle:{props.title} </h2>
            <h3> Author:{props.author}</h3>
            <p>Published:{props.published === "0000" ? "Not Available" : props.published.substring(0, 4)}</p>


            </div>

            
        </div>
    )
}

export default BooksCard