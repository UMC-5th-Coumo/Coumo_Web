import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import getCustomers from '../../redux/thunks/getCustomers';
import CustomerContainer from '../../components/admin/customer/customerManage/CustomerContainer';
import CustomerForm from '../../components/admin/customer/customerManage/CustomerForm';

const CustomerManage = () => {
  const { storeId } = useSelector((state) => state.user);
  const [number, setNumber] = useState('');
  const [filter, setFilter] = useState('all');

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { customers, regularCustomers, newCustomers, status } = useSelector(
    (state) => state.customer
  );
  const [filteredData, setFilteredData] = useState(null);

  /* ----- 마운트 될 때 고객 데이터 받아오기 ----- */
  useEffect(() => {
    dispatch(getCustomers(storeId));
  }, []);

  /* ----- 고객 데이터 조회 로딩 후 ----- */
  useEffect(() => {
    if (!status.loading) {
      setFilteredData(customers);
      setLoading(false);
    }
  }, [status.loading]);

  /* ----- 고객 필터링 검색 함수 ----- */
  const searchCustomer = () => {
    let filterGroup = [];

    // 그룹별 필터링
    switch (filter) {
      case 'regular':
        filterGroup = regularCustomers;
        break;
      case 'new':
        filterGroup = newCustomers;
        break;
      default:
        filterGroup = customers;
        break;
    }

    // 입력한 전화번호가 있다면?
    if (number) {
      filterGroup = filterGroup.filter(
        (data) => data.phone.slice(-4) === number
      );
    }

    // 필터링 데이터
    setFilteredData(filterGroup);
  };

  return (
    <Container>
      <CustomerForm
        number={number}
        setNumber={setNumber}
        filter={filter}
        setFilter={setFilter}
        searchCustomer={searchCustomer}
      />
      <CustomerContainer loading={loading} filteredData={filteredData} />
    </Container>
  );
};

export default CustomerManage;

const Container = styled.div`
  width: 100%;
  height: cal(100vh - 80px);
  display: flex;
  flex-direction: column;
`;
