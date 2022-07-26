import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export const schema = yup.object().shape({
  firstName: yup.string().required('Vui lòng nhập họ'),
  lastName: yup.string().required('Vui lòng nhập tên'),
  email: yup
    .string()
    .required('Vui lòng nhập email')
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'email không tồn tại'
    ),
  password: yup.string().trim().required('vui lòng nhập mật khẩu').min(6, 'Nhập mật khẩu có ít nhất 6 kí tự'),

  confirmPassword: yup
    .string()
    .trim()
    .required('vui lòng nhập lại mật khẩu')
    .oneOf([yup.ref('password'), null], 'mật khẩu nhập lại không khớp'),
  checkRules: yup.array().typeError('Bạn chưa đồng ý với điều khoản'),
  address: yup.array().typeError('Please choose your address').min(1, 'Please choose your address'),
  gender: yup.array().typeError('Please choose your gender').min(1, 'Please choose your gender'),
  favorites: yup.array().typeError('Please choose your favorites').min(1, 'Please choose your favorites'),
});
