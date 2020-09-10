import React from 'react';
import Group from '../../../components/layout/group/group';
import InputRow from '../../../components/ui/input-row/input-row';
import BaseSelect from '../../../components/ui/base-select/base-select';
import BaseButton from '../../../components/ui/base-button/base-button';
import './left-column.scss';

function LeftColumn() {
  return (
    <div className="left-col">
      <Group legend="Сохраненные параметры">
        <BaseSelect
          label="Выберите профиль"
          idFor="profileName"
          onInputChange={(e) => console.log('aaa')}
        />
        <InputRow
          label="Имя профиля"
          idFor="profileName"
          onInputChange={(e) => console.log('aaa')}
        />
        <BaseButton className="btn-sm" title="Сохранить профиль" onClicked={() => console.log('aaa')} />
      </Group>
      <Group legend="Параметры магазина">
        <InputRow
          label="Адрес системы (используется только для запроса)"
          idFor="systemAddress"
          onInputChange={(e) => console.log('aaa')}
        />
        <InputRow
          label="Имя пользователя магазина"
          idFor="userName"
          onInputChange={(e) => console.log('aaa')}
        />
        <InputRow
          label="Пароль магазина"
          idFor="password"
          onInputChange={(e) => console.log('aaa')}
        />
      </Group>
    </div>
  )
}

export default LeftColumn;
