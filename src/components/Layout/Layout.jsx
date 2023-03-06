import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

export default function Layout() {
  const location = useLocation().pathname;

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      {location !== '/profile' && <Footer />}
    </>
  )
}
