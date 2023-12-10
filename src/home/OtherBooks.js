import React, { useEffect, useState } from 'react'
import BookCards from '../components/BookCards';

const OtherBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
      fetch("http://localhost:7000/all-book")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);  
          setBooks(data.slice(0,6));
        });
    }, []);
  return (
    <div>
      <BookCards books={books} headline="Other Books" />
    </div>
  )
}

export default OtherBooks
