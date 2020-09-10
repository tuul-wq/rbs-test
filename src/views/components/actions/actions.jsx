import React from 'react';
import BaseButton from '../../../components/ui/base-button/base-button';
import './actions.scss';

function Actions() {
  return (
    <div className="footer">
      <BaseButton title="Заказ (списание)" onClicked={() => console.log('aaa')} />
      <BaseButton title="Заказ (предавторизация)" onClicked={() => console.log('bbb')} />
    </div>
  )
}

export default Actions;
