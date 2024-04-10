import React, { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
}
const Layout = ({children}:LayoutProps) => {
  const navigate=useNavigate()
  return (
    <>
    <Header/>
    <button onClick={()=>navigate(-1)}>go back</button>
    {children}
    <Footer/>
    </>
  )
}

export default Layout