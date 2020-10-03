import React from 'react';
import './two-columns.scss';

function TwoColumns({ left, right }) {
  return (
    <div className="two-columns">
      <aside>{left}</aside>
      <aside>{right}</aside>
    </div>
  )
}

export default TwoColumns;
