import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { useForm } from 'react-hook-form';

import { styled } from '@mui/system';

import styles from './Login.module.scss';
import { fetchUserData, fetchRegister, selectIsAuth } from '../../redux/slices/auth';

export const Registration = () => {
   const isAuth = useSelector(selectIsAuth);
   const dispatch = useDispatch();
   const {
      register,
      handleSubmit,
      formState: { errors, isValid },
   } = useForm({
      defaultValues: {
         fullName: 'Василиса Пупкина',
         email: 'vasilisa@test.ru',
         password: '123456',
      },
      mode: 'onChange',
   });

   const CustomButton = styled(Button)(({ theme }) => ({
      backgroundColor: '#000',
      color: '#fff',
      transition: 'background-color 0.3s',
      '&:hover': {
         backgroundColor: '#333',
      },
      '&:disabled': {
         backgroundColor: '#555',
         color: '#ccc',
      },
   }));

   const onSubmit = async (values) => {
      const data = await dispatch(fetchRegister(values));

      if (!data.payload) {
         return alert('Не удалось зарегистрироваться');
      }

      if ('token' in data.payload) {
         window.localStorage.setItem('token', data.payload.token);
      }
   };

   if (isAuth) {
      return <Navigate to="/" />;
   }

   return (
      <div
         style={{
            width: '500px',
            padding: '50px',
            border: '1px solid #000',
            borderRadius: '20px',
            backgroundColor: '#fff',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
            margin: '50px auto',
         }}
         classes={styles.root}>
         <Typography classes={{ root: styles.title }} variant="h5">
            Регистрация
         </Typography>
         <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
               error={Boolean(errors.fullName?.message)}
               helperText={errors.fullName?.message}
               {...register('fullName', { required: 'Имя...' })}
               className={styles.field}
               label="Введите имя"
               fullWidth
            />
            <TextField
               error={Boolean(errors.email?.message)}
               helperText={errors.email?.message}
               type="email"
               {...register('email', { required: 'Укажите E-Mail' })}
               className={styles.field}
               label="Почта"
               fullWidth
            />
            <TextField
               error={Boolean(errors.password?.message)}
               helperText={errors.password?.message}
               type="password"
               {...register('password', { required: 'Укажите пороль' })}
               className={styles.field}
               label="Пароль"
               fullWidth
            />
            <CustomButton
               disabled={!isValid}
               type="submit"
               size="large"
               variant="contained"
               fullWidth>
               Зарегистрироваться
            </CustomButton>
         </form>
      </div>
   );
};
