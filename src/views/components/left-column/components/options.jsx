import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import GroupRows from '../../group-rows/group-rows';
import withService from '../../../../components/hoc/withService';
import { updateProfileParam } from '../../../../store/actions/storage';

function Options(props) {
  return (
    <GroupRows groupName="Параметры магазина" {...props} />
  )
}

function mapStateToProps({ storage }) {
  const { selectedIndex, profiles } = storage;
  const current = profiles[selectedIndex];
  return {
    fields: {
      systemAddress: { label: 'Адрес системы (используется только для запроса)', value: current.systemAddress },
      userName: { label: 'Имя пользователя магазина', value: current.userName },
      password: { label: 'Пароль магазина', value: current.password }
    }
  }
}

const mapDispatchToProps = {
  onInputChange: updateProfileParam
};

export default compose(
  withService(),
  connect(mapStateToProps, mapDispatchToProps)
)(Options);
