import React from 'react';
import './App.css';
import BlogTile from './components/BlogTile';



const posts = [
  { id:1, title:'Pilne: Co to był za dzień!', intro: 'Tego świat jeszcze nie widział'},
  { id:2, title:'Wszyscy zazdroszą Polakom!', intro: 'Takiego clickbajtowego tytułu jeszcze nikt nie wymyślił'},
  { id:3, title: 'Adam Małysz Zgolił wąs',
    intro:'Po przegranym zakładzie z Piotrem Żyłą nasz mistrz olimpijski zgolił wąsy'}
]

function App() {
   return (
    <div>
      {posts.map((post, index) => (
       <BlogTile key={index} id={post.id} title={post.title} intro={post.intro} />
      ))}
    </div>
  )
}



export default App;
