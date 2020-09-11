import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Group from '../../../components/layout/group/group';
import InputRow from '../../../components/ui/input-row/input-row';
import { updateProfileParam } from '../../../store/actions';
import './right-column.scss';

function RightColumn({ fields, onInputChange }) {
  const inputChange = (label) => (value) => {
    onInputChange(label, value);
  }

  return (
    <div className="right-col">
      <Group legend="Параметры заказа">
        {
          Object.entries(fields).map(([key, object], index) =>
            <InputRow
              key={key + index}
              label={object.label}
              idFor={key}
              value={object.value}
              onInputChange={inputChange(key)}
            />
          )
        }
      </Group>
    </div>
  )
}

function mapStateToProps({ currentProfileIndex, profiles }) {
  const current = profiles.find((_, index) => index === currentProfileIndex);
  return {
    fields: {
      currency: { label: 'Валюта', value: current.currency },
      numberInSystem: { label: 'Номер заказа в системе магазина', value: current.numberInSystem },
      pennyOrderSum: { label: 'Сумма заказа (в копейках)', value: current.pennyOrderSum },
      language: { label: 'Язык пользователя', value: current.language },
      returnAddress: { label: 'Адрес возврата', value: current.returnAddress },
      orderDescription: { label: 'Описание заказа', value: current.orderDescription },
      clientId: { label: 'ID клиента', value: current.clientId },
      bondId: { label: 'ID связки', value: current.bondId }
    }
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onInputChange: updateProfileParam
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RightColumn);
