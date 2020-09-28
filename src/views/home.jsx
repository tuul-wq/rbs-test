import React from 'react';

import Auth from './components/auth/auth-container';
import TwoColumns from '../components/layout/two-columns/two-columns';
import LeftColumn from './components/left-column/left-column';
import RightColumn from './components/right-column/right-column';
import Actions from './components/actions/actions';
import './home.scss';

function Home() {
  return (
    <>
      <header className="header-actions">
        <h1 className="h1">Регистрация платежа</h1>
        <Auth />
      </header>
      <TwoColumns
        left={ <LeftColumn /> }
        right={ <RightColumn /> }
      />
      <Actions />
    </>
  )
}

export default Home;
