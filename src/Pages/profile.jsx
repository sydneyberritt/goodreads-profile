import { useContext } from 'react';
import { BookDataContext } from '../BookDataContext'

export function Profile() {
  
  const { parsedData } = useContext(BookDataContext);

  if (parsedData.length === 0) {
    return <p>No data available. Please upload your Goodreads CSV.</p>;
  }

  const booksRead = parsedData.filter( book => book["Exclusive Shelf"] == "read");

  const totalBooksRead = booksRead.length;
  const totalPagesRead = booksRead.reduce((total, book) => {
    const pages = parseInt(book["Number of Pages"]); 
    return total + pages;
  }, 0);

  const booksRated = parsedData.filter( book => book["Exclusive Shelf"] == "read" && book['My Rating'] != "");
  const totalRating = booksRated.reduce((total, book) => {
    const rating = parseInt(book['My Rating']);
    return total + rating;
  }, 0);
  const averageRating = (totalRating / booksRated.length).toFixed(2);
  
  return (
    <>
      <h1>Profile Page</h1>
      <p> {totalBooksRead} Books Read</p>
      <p> {totalPagesRead} Pages Read</p>
      <p> {averageRating} Average Rating</p>
    </>
  )
}
