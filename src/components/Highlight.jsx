import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Highlight = () => {
    return (
        <section id="Highlight">
            <div className="container">
               <div className="row">
                   <h2 className="section__title">
                       Why Choose <span className="purple">Library</span>
                   </h2>
                   <div className="highlight__wrapper">
                      <div className="highlight">
                          <div className="highlight__img">
                              <FontAwesomeIcon icon="bolt" />
                          </div>
                          <h3 className="highlight__subtitle">Easy and Quick</h3>
                       </div>
                   </div>
               </div>
            </div>
        </section>
    );
}

export default Highlight;