import React, { useState } from "react";
import Book from "../components/ul/Book";


const Books = ( { books: initialBooks }) => {
    const [books, setBooks] = useState(initialBooks)

    function filterBooks(filter) {
        if (filter === 'LOW_TO_HIGH') {
           setBooks(books.slice().sort((a,b) => (a.salePrice || a.originalprice) - (b.salePrice || b.originalprice)) )};

        if (filter === 'HIGH_TO_LOW') {
           setBooks(books.slice().sort((a,b) => (b.salePrice || b.originalprice) - (a.salePrice || a.originalprice)) )};
        
           if (filter === 'RATING') {
            setBooks(books.slice().sort((a,b) => (b.rating - a.rating)))};
    }

    return (
        <div className="books__body">
            <main className="books__main">
                <section>
                    <div className="books__container">
                        <div className="row">
                            <div className="books__header">
                                <h2 className="section__title books__header--title">All Books</h2>
                                <select id="filter" defaultValue="DEFAULT" onChange={(event) => filterBooks(event.target.value)}>
                                    <option value="DEFAULT" disabled>sort</option>
                                    <option value="LOW_TO_HIGH">Price, LOW_TO_HIGH</option>
                                    <option value="High_TO_low">Price, HIGH_TO_LOW</option>
                                    <option value="RATING">Rating</option>
                                </select>
                            </div>
                            <div className="books">
                                {books.map((book) => (<Book book={book} key={book.id} />))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Books;