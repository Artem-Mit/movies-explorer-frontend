import React from 'react';
import './SectionButton.css';

export default function SectionButton({ name, link, section }) {
  return (
    <a href={link} target='blank' rel="noreferrer" className={`sectionButton ${section}__button`}>
      {name}
    </a>
  )
}
