import React from 'react';
import TwoColumns from '../components/layout/two-columns/two-columns';
import LeftColumn from './components/left-column/left-column';
import RightColumn from './components/right-column/right-column';
import TheHeader from '../components/ui/the-header/the-header';
import Footer from './components/actions/actions';
import './home.scss';

function Home() {
  return (
    <>
      <TheHeader title="Регистрация платежа" />
      <TwoColumns
        left={ <LeftColumn /> }
        right={ <RightColumn /> }
      />
      <Footer />
    </>
  )
}

export default Home;
