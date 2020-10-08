import React from 'react';

import BaseButton from 'Components/ui/base-button/base-button';
import './actions.scss';

function Actions() {
  return (
    <footer className="actions">
      <BaseButton title="Заказ (списание)" onClicked={() => console.log('GO 1!')}/>
      <BaseButton title="Заказ (предавторизация)" onClicked={() => console.log('GO 2!')}/>
    </footer>
  )
}

export default Actions;
