import React from 'react';
import { connect } from 'react-redux';

import Group from '../../../components/layout/group/group';
import InputRow from '../../../components/ui/input-row/input-row';
import './right-column.scss';

function RightColumn({ fields, onInputChange }) {
  function inputChange(event, label) {
    return onInputChange(event.target.value, label);
  }

  return (
    <div className="right-col">
      <Group legend="Параметры заказа">
        {
          fields.map((field, index) =>
            <InputRow
              key={field.idFor + index}
              label={field.label}
              idFor={field.idFor}
              value={field.value}
              onInputChange={inputChange(field.label)}
            />
          )
        }
      </Group>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    fields: [
      { label: 'Валюта', idFor: 'currency', value: state.currency },
      { label: 'Номер заказа в системе магазина', idFor: 'numberInSystem', value: state.numberInSystem },
      { label: 'Сумма заказа (в копейках)', idFor: 'pennyOrderSum', value: state.pennyOrderSum },
      { label: 'Язык пользователя', idFor: 'language', value: state.language },
      { label: 'Адрес возврата', idFor: 'returnAddress', value: state.returnAddress },
      { label: 'Описание заказа', idFor: 'orderDescription', value: state.orderDescription },
      { label: 'ID клиента', idFor: 'clientId', value: state.clientId },
      { label: 'ID связки', idFor: 'bondId', value: state.bondId }
    ]
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onInputChange: dispatch(updateProfileParam)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RightColumn);


{/* <InputRow
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
/> */}