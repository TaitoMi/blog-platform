import * as Yup from 'yup';

const isRequired = 'Обязательное поле';
const validationSchema = Yup.object().shape({
  username: Yup.string()
    .required(isRequired)
    .min(4, 'Не меньше 4 символов')
    .max(50, 'Не более 50 символов'),
  password: Yup.string()
    .min(8, 'Не меньше 8')
    .max(40, 'Не больше 40')
    .required(isRequired),
  email: Yup.string()
    .required(isRequired)
    .email('Неправильный email адрес'),
});

export default validationSchema;
