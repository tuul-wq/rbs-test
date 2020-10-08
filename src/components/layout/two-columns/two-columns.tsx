import React from 'react';
import './two-columns.scss';

type ITwoColumnsProps = {
  left: React.ReactElement
  right: React.ReactElement
}

function TwoColumns({ left, right }: ITwoColumnsProps) {
  return (
    <div className="two-columns">
      <aside>{left}</aside>
      <aside>{right}</aside>
    </div>
  )
}

export default TwoColumns;
