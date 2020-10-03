import React from 'react';
import { connect } from 'react-redux';

import GroupRows from '../group-rows/group-rows';
import { updateProfileParam } from 'Store/actions/storage';

function RightColumn(props) {
  return (
    <GroupRows groupName="Параметры заказа" {...props} />
  )
}

function mapStateToProps({ storage }) {
  const { selectedIndex, profiles } = storage;
  const current = profiles.find((_, index) => index === selectedIndex);
  return {
    fields: {
      currency: { label: 'Валюта', value: current.currency },
      numberInSystem: { label: 'Номер заказа в системе магазина', value: current.numberInSystem },
      orderSum: { label: 'Сумма заказа (в копейках)', value: current.orderSum },
      language: { label: 'Язык пользователя', value: current.language },
      returnAddress: { label: 'Адрес возврата', value: current.returnAddress },
      orderDescription: { label: 'Описание заказа', value: current.orderDescription },
      clientId: { label: 'ID клиента', value: current.clientId },
      bondId: { label: 'ID связки', value: current.bondId }
    }
  }
}

const mapDispatchToProps = {
  onInputChange: updateProfileParam
};

export default connect(mapStateToProps, mapDispatchToProps)(RightColumn);
