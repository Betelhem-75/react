import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Book = ({ book  }) => {
   return (
        <div className="book">
            <a href=" ">
                <figure className="book__img--wrapper">
                    <img 
                     src={book.url} 
                     alt="" className="book__img" 
                    />
                </figure>
            </a>
            <div className="book__title">
                <a href="/" className="book__title--link">
                  {book.title}
                </a>
            </div>
            <div className="book__ratings"> 
                 {
                 new Array(Math.floor(book.rating)).fill(0).map((__, index) => <FontAwesomeIcon icon="star" key={index} />) 
                 }
                 {
                    Number.isInteger(book.rating) ? "" : <FontAwesomeIcon icon="star-half-alt" />
                 }
            </div>
            <div className="book__price">
                {book.salePrice ? ( <>
               <span className="book__price__normal">${book.originalPrice.toFixed(2)}</span>${book.salePrice.toFixed(2)} </>
                ) : (<>${book.originalPrice.toFixed(2)}</> )}
            </div>
        </div>
    );
}

export default Book;