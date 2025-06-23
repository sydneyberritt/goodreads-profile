import { useContext } from 'react';
import { BookDataContext } from '../BookDataContext'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

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
    const rating = parseInt(book["My Rating"]);
    return total + rating;
  }, 0);
  const averageRating = (totalRating / booksRated.length).toFixed(2);

  const ratingCounts = {1:0, 2:0, 3:0, 4:0, 5:0};
  booksRated.forEach(book => {
    const bookRating = parseInt(book["My Rating"]);
    if(bookRating >= 1 && bookRating <= 5){
      ratingCounts[bookRating]++;
    }
  });

  const ratingData = Object.entries(ratingCounts)
  .map(([rating, count]) => ({ rating: rating, count }));
  
  return (
    <>
      <h1>Profile Page</h1>
      <p> {totalBooksRead} Books Read</p>
      <p> {totalPagesRead} Pages Read</p>
      <p> {averageRating} Average Rating</p>
      <h2>Ratings Breakdown</h2>
      <ResponsiveContainer width="100%" height={100}>
        <BarChart data={ratingData} margin={{ top: 10, right: 10, bottom: 10, left: 10 }}>
          <XAxis
            dataKey="rating"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 15 }}
          />
          <Tooltip 
            formatter={(value) => [`${value} books`, null]}
            cursor={{ fill: 'rgba(0, 0, 0, 0.1)' }}
          />
          <Bar dataKey="count" fill="#808080" />
        </BarChart>
      </ResponsiveContainer>
      
    </>
  )
}
