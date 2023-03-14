import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

export default function Layout({loggedIn, onCheckIn}) {
  const location = useLocation().pathname;

  useEffect(() => {
    onCheckIn()
  }, [onCheckIn, loggedIn])

  return (
    <>
      <Header loggedIn={loggedIn}/>
      <main>
        <Outlet />
      </main>
      {location !== '/profile' && <Footer />}
    </>
  )
}
