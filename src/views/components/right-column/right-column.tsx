import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import GroupRows, { IFields } from '../group-rows/group-rows';
import { updateProfileParam } from 'Store/actions/storage-actions';
import { AppState } from 'Store/store';

function RightColumn(props: PropsFromRedux) {
  return (
    <GroupRows groupName="Параметры заказа" {...props} />
  )
}

const mapStateToProps = ({ storage }: AppState) => {
  const { selectedIndex, profiles } = storage;
  const current = profiles.find((_, index) => index === selectedIndex) || profiles[0];
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
    } as IFields
  }
}

const mapDispatchToProps = {
  onInputChange: updateProfileParam
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(RightColumn);
