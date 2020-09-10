import React from 'react';
import TwoColumns from '../components/layout/two-columns/two-columns';
import LeftColumn from './components/left-column/left-column';
import RightColumn from './components/right-column/right-column';
import TheHeader from '../components/ui/the-header/the-header';
import Footer from './components/actions/actions';
import BaseButton from '../components/ui/base-button/base-button';
import './home.scss';

function Home() {
  return (
    <>
      <TheHeader title="Регистрация платежа" />
      <TwoColumns
        left={ <LeftColumn /> }
        right={ <RightColumn /> }
      />
      <Footer>
        <BaseButton title="Заказ (списание)" onClicked={() => console.log('aaa')} />
        <BaseButton title="Заказ (предавторизация)" onClicked={() => console.log('bbb')} />
      </Footer>
    </>
  )
}

export default Home;
