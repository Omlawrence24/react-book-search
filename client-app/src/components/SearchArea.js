import React from 'react'

const SearchArea = (props) => {
    return (
        <div className="search">
            <form 
            onSubmit={props.searchBook} 
            action="">
        <input 
           onChange={props.handleSearch}
            type="text"/>
        <button onClick={props.searchBook}  className="primary" type="submit">
        Search
        </button>
        <select defaultValue="Sort" onChange={props.handleSort}>
            <option value="Sort"></option>
            <option value="Newest">Newest</option>
            <option value="Oldest">Oldest</option>
        </select>
            </form>
        
        </div>
    )
}

export default SearchArea
