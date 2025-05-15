import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Highlights from './ul/Highlights.jsx'

const Highlight = () => {
    return (
        <section id="highlight">
            <div className="container">
               <div className="row">
                   <h2 className="section__title">
                       Why Choose <span className="purple">Library</span>
                   </h2>
                   <div className="highlight__wrapper">
                       <Highlights icon={<FontAwesomeIcon icon="bolt" />} title="Easy and Quick" 
                       para="Get access to the book you purchased online instantly." 
                       />
                       <Highlights icon={<FontAwesomeIcon icon="book-open" />} title="10,000+ Books" 
                       para="Get access to the book you purchased online instantly."
                       />
                       <Highlights icon={<FontAwesomeIcon icon="tags" />} title="Affordable" 
                       para="Get access to the book you purchased online instantly."
                       /> 
                   </div>
               </div>
            </div>
        </section>
    );
}

export default Highlight;