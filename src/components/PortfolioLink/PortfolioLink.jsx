import React from 'react';
import './PortfolioLink.css'

export default function PortfolioLink({link, name}) {
  return (
    <a href={link}
      className='portfolio__link'
      target='_blanc' >
      {name}
      <span className='porftolio__link-arrow'>↗</span>
    </a>
  )
}
