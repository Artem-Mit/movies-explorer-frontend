import React from 'react';
import './SectionButton.css';

export default function SectionButton({ name, link, section }) {
  return (
    <a href={link} target='_blank' rel="noreferrer">
      <button className={`sectionButton ${section}__button`}>{name}</button>
    </a>
  )
}
