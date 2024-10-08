
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from './components/Feed';
import Header from './components/Header';
import SearchResult from './components/SearchResult';
import VideoDetails from './components/VideoDetails';
import { AppContext } from './context/contextApi';



function App() {
  return (
    <AppContext>
      <BrowserRouter>
        <div className='flex flex-col h-full'>
          <Header />
          <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route path="/SearchResult/:searchQuery" element={<SearchResult />} />
            <Route path="/video/:id" element={<VideoDetails />} />
          </Routes>
        </div>
      </BrowserRouter>

    </AppContext>
  );
}

export default App;
