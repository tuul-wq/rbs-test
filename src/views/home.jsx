import React from 'react';

import Auth from './components/auth/auth-container';
import TwoColumns from '../components/layout/two-columns/two-columns';
import LeftColumn from './components/left-column/left-column';
import RightColumn from './components/right-column/right-column';
import TheHeader from '../components/ui/the-header/the-header';
import Actions from './components/actions/actions';
import './home.scss';

function Home() {
  return (
    <>
      <header className="header-actions">
        <TheHeader title="Регистрация платежа" />
        <Auth />
      </header>
      <main>
        <TwoColumns
          left={ <LeftColumn /> }
          right={ <RightColumn /> }
        />
        <Actions />
      </main>
    </>
  )
}

export default Home;
