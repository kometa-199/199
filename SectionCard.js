import React from 'react';

function SectionCard({ title, description, link }) {
  return (
    <a href={link} className="card">
      <h2>{title}</h2>
      <p>{description}</p>
    </a>
  );
}

export default SectionCard;
