import React from 'react';

import Group from '../../../components/layout/group/group';
import InputRow from '../../../components/ui/input-row/input-row';
import './right-column.scss';

function RightColumn() {
  return (
    <div className="right-col">
      <Group legend="Параметры заказа">
        <InputRow
          label="Валюта"
          idFor="currency"
          onInputChange={(e) => console.log('a')}
        />
        <InputRow
          label="Номер заказа в системе магазина"
          idFor="numberInSystem"
          onInputChange={(e) => console.log('a')}
        />
        <InputRow
          label="Сумма заказа (в копейках)"
          idFor="pennyOrderSum"
          onInputChange={(e) => console.log('a')}
        />
        <InputRow
          label="Язык пользователя"
          idFor="language"
          onInputChange={(e) => console.log('a')}
        />
        <InputRow
          label="Адрес возврата"
          idFor="returnAddress"
          onInputChange={(e) => console.log('a')}
        />
        <InputRow
          label="Описание заказа"
          idFor="orderDescription"
          onInputChange={(e) => console.log('a')}
        />
        <InputRow
          label="ID клиента"
          idFor="clientId"
          onInputChange={(e) => console.log('a')}
        />
        <InputRow
          label="ID связки"
          idFor="bondId"
          onInputChange={(e) => console.log('a')}
        />
      </Group>
    </div>
  )
}

export default RightColumn;
