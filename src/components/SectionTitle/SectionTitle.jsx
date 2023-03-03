import React from 'react';
import './SectionTitle.css';

export default function SectionTitle({title, section}) {
  return (
    <h2 className={`sectionTitle ${section}__title`}>{title}</h2>
  )
}
