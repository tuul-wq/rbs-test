import React from 'react';

import BaseButton from 'Components/ui/base-button/base-button';
import './actions.scss';

function Actions() {
  return (
    <footer className="actions">
      <BaseButton title="Заказ (списание)" />
      <BaseButton title="Заказ (предавторизация)" />
    </footer>
  )
}

export default Actions;
