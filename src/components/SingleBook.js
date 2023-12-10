// SingleBook.js
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleBook = () => {
  const data = useLoaderData();
  if (!data) {
    console.log(data)
    // Handle the case where data is undefined
    return <div>Loading...</div>;
  }

  const { _id, bookTitle } = data;


  return (
    <div>
      <h2>singlebook: {_id} - {bookTitle}</h2>
    </div>
  );
};

export default SingleBook;
