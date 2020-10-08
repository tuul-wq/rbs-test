import React from 'react';
import { compose } from 'redux';
import { connect, ConnectedProps } from 'react-redux';

import { AppState } from 'Store/store';
import withService from 'Components/hoc/with-service';
import GroupRows, { IFields } from '../../group-rows/group-rows';
import { updateProfileParam } from 'Store/actions/storage-actions';

function Options(props: PropsFromRedux) {
  return (
    <GroupRows groupName="Параметры магазина" {...props} />
  )
}

function mapStateToProps({ storage }: AppState) {
  const { selectedIndex, profiles } = storage;
  const current = profiles[selectedIndex];
  return {
    fields: {
      systemAddress: { label: 'Адрес системы (используется только для запроса)', value: current.systemAddress },
      userName: { label: 'Имя пользователя магазина', value: current.userName },
      password: { label: 'Пароль магазина', value: current.password }
    } as IFields
  }
}

const mapDispatchToProps = {
  onInputChange: updateProfileParam
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default compose(
  withService(),
  connector
)(Options);
