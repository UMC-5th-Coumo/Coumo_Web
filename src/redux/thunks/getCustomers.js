import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

const testAPI = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const getCustomers = createAsyncThunk(
  'customer/getCustomers',
  async (storeId) => {
    try {
      // 서버 연동 코드
      //   const res = await axios.get(`/api/statistics/${storeId}/customer`);
      //   const data = res.data;
      //   return data

      // 테스트 코드
      await testAPI(1000);

      // 서버 요청 후 예상 데이터
      const customers = {
        isSuccess: true,
        code: 'COMMON200',
        message: '성공입니다.',
        result: {
          cnt: 5,
          customers: [
            {
              id: 1,
              name: '고객1',
              gender: 'MALE',
              birthday: '19900101',
              ageGroup: '30대',
              phone: '01012345678',
              totalStamp: 10,
              createdAt: '2023-01-01T00:00:00',
              updatedAt: '2024-01-01T00:00:00',
            },
            {
              id: 3,
              name: '고객3',
              gender: 'MALE',
              birthday: '20020303',
              ageGroup: '20대',
              phone: '01034567890',
              totalStamp: 18,
              createdAt: '2022-01-03T00:00:00',
              updatedAt: '2024-01-03T00:00:00',
            },
            {
              id: 5,
              name: '고객5',
              gender: 'MALE',
              birthday: '20060505',
              ageGroup: '10대',
              phone: '01056789012',
              totalStamp: 12,
              createdAt: '2024-01-05T00:00:00',
              updatedAt: '2024-01-05T00:00:00',
            },
            {
              id: 7,
              name: '고객7',
              gender: 'MALE',
              birthday: '19690707',
              ageGroup: '50대',
              phone: '01078901234',
              totalStamp: 5,
              createdAt: '2024-01-07T00:00:00',
              updatedAt: '2024-01-07T00:00:00',
            },
            {
              id: 8,
              name: '고객8',
              gender: 'FEMALE',
              birthday: '20050808',
              ageGroup: '20대',
              phone: '01089012345',
              totalStamp: 1,
              createdAt: '2024-01-08T00:00:00',
              updatedAt: '2024-01-08T00:00:00',
            },
          ],
        },
      };

      const regularCustomers = {
        isSuccess: true,
        code: 'COMMON200',
        message: '성공입니다.',
        result: {
          cnt: 5,
          customers: [
            {
              id: 1,
              name: '고객1',
              gender: 'MALE',
              birthday: '19900101',
              ageGroup: '30대',
              phone: '01012345678',
              totalStamp: 10,
              createdAt: '2023-01-01T00:00:00',
              updatedAt: '2024-01-01T00:00:00',
            },
            {
              id: 3,
              name: '고객3',
              gender: 'MALE',
              birthday: '20020303',
              ageGroup: '20대',
              phone: '01034567890',
              totalStamp: 18,
              createdAt: '2022-01-03T00:00:00',
              updatedAt: '2024-01-03T00:00:00',
            },
            {
              id: 5,
              name: '고객5',
              gender: 'MALE',
              birthday: '20060505',
              ageGroup: '10대',
              phone: '01056789012',
              totalStamp: 12,
              createdAt: '2024-01-05T00:00:00',
              updatedAt: '2024-01-05T00:00:00',
            },
          ],
        },
      };

      const newCustomers = {
        isSuccess: true,
        code: 'COMMON200',
        message: '성공입니다.',
        result: {
          cnt: 5,
          customers: [
            {
              id: 7,
              name: '고객7',
              gender: 'MALE',
              birthday: '19690707',
              ageGroup: '50대',
              phone: '01078901234',
              totalStamp: 5,
              createdAt: '2024-01-07T00:00:00',
              updatedAt: '2024-01-07T00:00:00',
            },
            {
              id: 8,
              name: '고객8',
              gender: 'FEMALE',
              birthday: '20050808',
              ageGroup: '20대',
              phone: '01089012345',
              totalStamp: 1,
              createdAt: '2024-01-08T00:00:00',
              updatedAt: '2024-01-08T00:00:00',
            },
          ],
        },
      };

      return {
        customers: customers.result,
        regularCustomers: regularCustomers.result,
        newCustomers: newCustomers.result,
      };
    } catch (err) {
      throw err;
    }
  }
);

export default getCustomers;
