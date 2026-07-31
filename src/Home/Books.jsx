import React from "react";

// import "../Css/Style.css"

const Books = () => {
    return(
        <>
            <div className="books-outer">
                <div className="container">
                    <div className="books-inner">
                        <h2>📚 Magical Learning Books</h2>
                    <div className="our-books">

                        <div className="books">
                            <div className="books-img">
                                <img loading="lazy"  src="../assets/Maths.jpg" alt="Math-Book" />
                            </div>
                            
                            <div className="book-text">
                                <div className="book-content">
                                <h4>Maths Book</h4>
                                <p>2025</p>
                                </div>

                                <div className="details">
                                    <h3>genre:</h3>
                                    <p>Early Learning | Fun with Numbers </p>
                                </div>

                                <div className="details-1">
                                    <h3>author & artist:</h3>
                                     <p>Ishika Limbasiya</p>
                                </div>
                            </div>
                        </div>

                        <div className="books">
                            <div className="books-img">
                                <img loading="lazy"  src="../assets/English.jpg" alt="English-Book" />
                            </div>
                             <div className="book-text">
                                <div className="book-content">
                                <h4>English Book</h4>
                                <p>2025</p>
                                </div>

                                <div className="details">
                                    <h3>genre:</h3>
                                    <p>Alphabet | Reading Practice </p>
                                </div>

                                <div className="details-1">
                                    <h3>author & artist:</h3>
                                     <p>Ishika Limbasiya</p>
                                </div>
                            </div>
                        </div>

                        <div className="books">
                            <div className="books-img">
                                <img loading="lazy"  src="../assets/Science.jpg" alt="Science-Book" />
                            </div>
                            <div className="book-text">
                                <div className="book-content">
                                <h4>Science Book</h4>
                                <p>2025</p>
                                </div>

                                <div className="details">
                                    <h3>genre:</h3>
                                    <p>Space  | Basic Science </p>
                                </div>

                                <div className="details-1">
                                    <h3>author & artist:</h3>
                                     <p>Ishika Limbasiya</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Books;