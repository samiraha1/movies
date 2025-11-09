import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from "react-router-dom";
import './index.css';
import { createRoot } from "react-dom/client";
import MovieTheater from './pages/MovieTheater';
import Layout from './Layout'


 function App() {
  return (
    <HashRouter basename="/movies">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MovieTheater />} />

          {/* <Route path="about" element={<About />} />
          <Route path="Blog" element={<Blog />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Discover" element={<Discover />} />
          <Route path="Romance" element={<Romance />} />
          <Route path="MoviePlaylist" element={<MoviePlaylist />} />
          <Route path="Settings" element={<Settings />} /> */}
        </Route>
      </Routes>
    </HashRouter>
  );
}
const root = createRoot(document.getElementById("root"));
root.render(<App />);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
