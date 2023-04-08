import { useState, useEffect } from 'react'

import { fetchDataFromApi } from './utils/api';

import { getApiConfiguration } from './store/homeSlice';
import { useDispatch, useSelector } from 'react-redux';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Deatils from './pages/details/Details';
import SearchResult from './pages/searchResult/SearchResult';
import Explore from './pages/explore/Explore';
import PageNotFound from './pages/404/PageNotFound'

function App() {

  const { url } = useSelector((state) => state.home );
  const dispatch = useDispatch();

  useEffect(() => {
    ApiTest();
    // console.log(url);
  }, []);

  const ApiTest = () => {
    fetchDataFromApi('/movie/popular')
    .then((res) => {
      console.log(res);
      dispatch(getApiConfiguration(res));
    })
  };

  return (
    <div className="App">
      HELLO
      { url?.total_pages }
    </div>
  )
}

export default App
