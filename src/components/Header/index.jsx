import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

import styles from './Header.module.scss';
import Container from '@mui/material/Container';
import { logout, selectIsAuth } from '../../redux/slices/auth';

export const Header = () => {
   const dispatch = useDispatch();
   const isAuth = useSelector(selectIsAuth);

   const onClickLogout = () => {
      if (window.confirm('Вы уверены что хотите выйти?')) {
         dispatch(logout());
         window.localStorage.removeItem('token');
      }
   };

   return (
      <div className={styles.root}>
         <Container maxWidth="lg">
            <div className={styles.inner}>
               <Link className={styles.logo} to="/">
                  <img
                     width={80}
                     height={56}
                     src="https://raw.githubusercontent.com/SayFu11a/chocolade/b498a58c74cfec3b935dd84f93923338ce2a6433/Home_files/chrome_lYYepB2Wq8.png"
                     alt="Logopng"
                  />
                  <div className={styles.title}>RestroMaster</div>
               </Link>
               <div className={styles.buttons}>
                  {isAuth ? (
                     <>
                        <Link to="/reservation">
                           <Button variant="contained">Заказы</Button>
                        </Link>
                        <Link to="/add-post">
                           <Button variant="contained">Добавить блюдо</Button>
                        </Link>
                        <Button onClick={onClickLogout} variant="contained" color="error">
                           Выйти
                        </Button>
                     </>
                  ) : (
                     <>
                        <Link to="/login">
                           <Button variant="outlined">Войти</Button>
                        </Link>
                        <Link to="/register">
                           <Button variant="contained">Создать аккаунт</Button>
                        </Link>
                     </>
                  )}
               </div>
            </div>
         </Container>
      </div>
   );
};
