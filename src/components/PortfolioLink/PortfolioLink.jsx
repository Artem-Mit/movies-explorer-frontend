import React from 'react';
import './PortfolioLink.css'

export default function PortfolioLink({link, name}) {
  return (
    <a href={link}
      className='portfolio__link'
      target='blanc' >
      {name}
      <span className='portfolio__link-arrow'>↗</span>
    </a>
  )
}
