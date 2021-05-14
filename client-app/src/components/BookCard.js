import React from 'react'

const BookCard = (props) => {
    return (
        
        <div className = "card" >
            <div className="card-body" >
                {/* <div className="card-container"> */}
                    <img src={props.image} alt="book"  />
                    <div className="card-text">
                        <h2>Title:{props.title} </h2>
                        <h3>Author:{props.author}</h3>
                        <h5>Published:{props.published}</h5>
                        {/* <p>Published:{props.published === "0000" ? "Not Available" : props.published.substring(0, 4)}</p> */}


                    </div>
                </div>
            </div>  
            // </div>
    )
}

export default BookCard
