import React from 'react'
import { Route, Routes } from 'react-router-dom';
import ContactPage from '../pages/ContactPage';
import HomePage from '../pages/HomePage';
import MenuPage from '../pages/MenuPage';
import NewsPage from '../pages/NewsPage';


const Page = () => {
    return (
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/news' element={<NewsPage/>}/>
          <Route path='/menu' element={<MenuPage />}/>
          <Route path='/contact' element={<ContactPage />}/>
        </Routes>
              );
}
 
export default Page;