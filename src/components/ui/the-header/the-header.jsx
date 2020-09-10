import React from 'react';
import './the-header.scss';

function TheHeader({ title }) {
  return (
    <header className="header">
      <h1>{title}</h1>
    </header>
  )
}

export default TheHeader;
