import React from 'react';
import RadioBtn from '../../../common/RadioBtn';

function CustomerGroupButton({ selected, onChange }) {
  return (
    <>
      <RadioBtn
        id='all'
        label='전체'
        name='all'
        size={80}
        selected={selected}
        onChange={onChange}
      />
      <RadioBtn
        id='regular'
        label='단골손님'
        name='regular'
        size={80}
        selected={selected}
        onChange={onChange}
      />
      <RadioBtn
        id='new'
        label='신규손님'
        name='new'
        size={80}
        selected={selected}
        onChange={onChange}
      />
    </>
  );
}

export default CustomerGroupButton;
