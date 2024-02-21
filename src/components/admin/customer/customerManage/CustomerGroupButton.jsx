import React from 'react';
import CustomerRadio from './CustomerRadio';

function CustomerGroupButton({ selected, onChange }) {
  return (
    <>
      <CustomerRadio
        id='all'
        label='전체'
        name='all'
        selected={selected}
        onChange={onChange}
      />
      <CustomerRadio
        id='regular'
        label='단골'
        name='regular'
        selected={selected}
        onChange={onChange}
      />
      <CustomerRadio
        id='new'
        label='신규'
        name='new'
        selected={selected}
        onChange={onChange}
      />
    </>
  );
}

export default CustomerGroupButton;
