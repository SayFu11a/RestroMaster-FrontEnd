import { Routes, Route, Router, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Container from '@mui/material/Container';

import { Header } from './components';
import { Home, FullPost, Registration, AddPost, Login } from './pages';
import React, { useRef } from 'react';
import { fetchAuthMe, selectIsAuth } from './redux/slices/auth';
import { Link } from 'react-router-dom';

//=========================

import axios from 'axios';
import BookingPage from './pages/BookingPage';
import GuestInfo from './pages/GuestInfo';
import ReservationPage from './pages/ReservationPage';
import LeafletMapComponent from './LeafletMapComponent';
import AboutUs from './pages/AboutUs';

// import Header from './components/Header';
// import Drawer from './components/Drawer';
//import Home from './pages/Home';
//import Favorites from './pages/Favorites';
//import Orders from './pages/Orders';

//import AppContext from './context';
// ====

// import AppRouter from './components/adimMB/AppRouter';
// import Admin from './components/adimMB/Admin';
// import Login from './components/adimMB/Login';

function App() {
   const [items, setItems] = React.useState([]);
   const [cartItem, setCartItem] = React.useState([]);
   const [favorites, setFavorites] = React.useState([]);

   const [searchValue, setSearchValue] = React.useState('');
   const [isCartOpened, setIsCartOpened] = React.useState(false);
   const [isLoading, setIsLoading] = React.useState(true);

   const location = useLocation();
   // ==

   const dispatch = useDispatch();
   const isAuth = useSelector(selectIsAuth);

   const targetRef = useRef(null);

   const scrollToTarget = () => {
      targetRef.current.scrollIntoView({ behavior: 'smooth' });
   };

   // ================

   React.useEffect(() => {
      async function fetchData() {
         try {
            const [itemsResponse, cartResponse, favoritesResponse] = await Promise.all([
               axios.get('https://63a826327989ad3286fb1b90.mockapi.io/items'),
               axios.get('https://63a826327989ad3286fb1b90.mockapi.io/cart'),
               axios.get('https://63ca4346d0ab64be2b4f3f3c.mockapi.io/Favorite'),
            ]);

            setIsLoading(false);

            setFavorites(favoritesResponse.data);
            setCartItem(cartResponse.data);
            setItems(itemsResponse.data);
         } catch (err) {
            alert('ошибка при получении данных ;(');
         }
      }
      dispatch(fetchAuthMe());

      fetchData();
   }, []);

   // ================

   return (
      <>
         <Header />
         {location.pathname === '/' && (
            <div className="private">
               <div className="private__column">
                  <div className="private__image ibg">{/* <img src="./01.jpg" alt="" /> */}</div>
               </div>
               <div className="private__column">
                  <div className="private-body">
                     <div className="private-body-content">
                        <div className="private-body__title">Добро пожаловать!</div>
                        <div className="private-body__text">
                           Насладитесь изысканными блюдами и уютной атмосферой в нашем ресторане.
                        </div>
                        <div className="private-body-buttons">
                           <Link to="/about-us" className="private-body-buttons__item btn btn--w">
                              О Нас
                           </Link>
                           <div
                              style={{ cursor: 'pointer' }}
                              onClick={scrollToTarget}
                              className="private-body-buttons__link">
                              меню
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         )}
         <Container maxWidth="lg">
            <Routes>
               <Route path="/" element={<Home ref={targetRef} />} />
               <Route path="/posts/:id" element={<FullPost />} />
               <Route path="/posts/:id/edit" element={<AddPost />} />
               <Route path="/add-post" element={<AddPost />} />
               <Route path="/login" element={<Login />} />
               <Route path="/register" element={<Registration />} />
               <Route path="/booking" element={<BookingPage />} />
               <Route path="/guest-info" element={<GuestInfo />} />
               <Route path="/reservation" element={<ReservationPage />} />
               <Route path="/about-us" element={<AboutUs />} />
            </Routes>
         </Container>
         {location.pathname === '/' && (
            <div class="why">
               <div class="why-top">
                  <div class="why-top__column">
                     <div class="why-top__text">Почему Стоит ВЫБРАТЬ ИМЕННО нас?</div>
                  </div>
                  <div class="why-top__column">
                     <div class="why-top__image ibg">{/* <img src="./why/01.jpg" alt="" /> */}</div>
                  </div>
               </div>
               <div class="why-body">
                  <div
                     style={{ 'max-width': '1200px', margin: '0 auto', width: '100%' }}
                     class="container">
                     <div class="why-body-row">
                        <div class="why-body__column">
                           <div class="why-body-item">
                              <div class="why-body-item__icon">
                                 <img src="./why/icons/01.svg" alt="" />
                              </div>
                              <div class="why-body-item-body">
                                 <div class="why-body-item-body__title">Всегда свежие продукты</div>
                                 <div class="why-body-item-body__text">
                                    Свежая, сезонная и простая кухня. Еда - это наш бизнес и наша
                                    страсть.
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="why-body__column">
                           <div class="why-body-item">
                              <div class="why-body-item__icon">
                                 <img src="./why/icons/02.svg" alt="" />
                              </div>
                              <div class="why-body-item-body">
                                 <div class="why-body-item-body__title">БЫСТРОТА ПРИГОТОВЛЕНИЯ</div>
                                 <div class="why-body-item-body__text">
                                    Мы ценим ваше время. Ваш заказ будет готов в кратчайшие сроки.
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="why-body__column">
                           <div class="why-body-item">
                              <div class="why-body-item__icon">
                                 <img src="./why/icons/03.svg" alt="" />
                              </div>
                              <div class="why-body-item-body">
                                 <div class="why-body-item-body__title">НАТУРАЛЬНЫЕ ПРОДУКТЫ</div>
                                 <div class="why-body-item-body__text">
                                    Мы готовим только из натуральных ингредиентов. Здоровье и вкус -
                                    наш приоритет.
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="why-body__column">
                           <div class="why-body-item">
                              <div class="why-body-item__icon">
                                 <img src="./why/icons/04.svg" alt="" />
                              </div>
                              <div class="why-body-item-body">
                                 <div class="why-body-item-body__title">Доступный цениик</div>
                                 <div class="why-body-item-body__text">
                                    Высокое качество по доступным ценам. Наслаждайтесь изысканными
                                    блюдами, не переплачивая.
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         )}

         {location.pathname === '/' && (
            <div class="contacts">
               <div class="contacts-top">
                  <div
                     style={{ 'max-width': '1200px', margin: '0 auto', width: '100%' }}
                     class="container">
                     <div class="contacts__title">Обратная связь</div>
                     <div class="contacts-body">
                        <div class="contacts-body__column">
                           <div class="contacts-body__item contacts-body__item--1">
                              45-35 #B 39th, Sunnyside, NY 11104{' '}
                           </div>
                        </div>
                        <div class="contacts-body__column">
                           <a
                              href="mailto:contact@primeome.com"
                              class="contacts-body__item contacts-body__item--2">
                              contact@primeome.com
                           </a>
                        </div>
                        <div class="contacts-body__column">
                           <a
                              href="tel:7187777777"
                              class="contacts-body__item contacts-body__item--3">
                              (718) 777-7777
                           </a>
                        </div>
                        <div class="contacts-body__column">
                           <div class="contacts-social">
                              <div class="contacts-social__item contacts-social__item--1">
                                 <img src="./social/01.png" alt="" />
                              </div>
                              <div class="contacts-social__item contacts-social__item--2">
                                 <img src="./social/02.png" alt="" />
                              </div>
                              <div class="contacts-social__item contacts-social__item--3">
                                 <img src="./social/03.png" alt="" />
                              </div>
                              <div class="contacts-social__item contacts-social__item--4">
                                 <img src="./icons/social/04.png" alt="" />
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="contacts-content">
                  <div class="contacts-content__column">
                     <LeafletMapComponent />
                  </div>
                  <div class="contacts-content__column">
                     <div class="contacts-content-form">
                        <div class="contacts-content-form__title">Отправить сообщение</div>
                        <form action="#" class="contacts-content-form__body">
                           <div class="contacts-content-form-line">
                              <input
                                 placeholder="Имя"
                                 autocomplete="off"
                                 type="text"
                                 name="form[]"
                                 data-value="Name"
                                 class="input req"
                              />
                           </div>
                           <div class="contacts-content-form-line">
                              <input
                                 placeholder="E-mail или номер телефона"
                                 autocomplete="off"
                                 type="text"
                                 name="form[]"
                                 data-value="E-mail or phone number"
                                 class="input req"
                              />
                           </div>
                           <div class="contacts-content-form-line">
                              <textarea
                                 placeholder="Ваше сообщение"
                                 autocomplete="off"
                                 name="form[]"
                                 data-value="Your message"
                                 class="input req"></textarea>
                           </div>
                           <div class="contacts-content-form-button">
                              <button type="submit" class="contacts-content-form__btn btn btn--w">
                                 Отправить
                              </button>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         )}
         {location.pathname === '/' && (
            <footer>
               <div class="container">
                  <div class="footer-body">
                     <div class="footer-body__column">
                        <div class="footer__text">
                           © RestroMaster Catering 2024.{' '}
                           <a href="" target="blank">
                              Terms & Conditions
                           </a>
                        </div>
                     </div>
                     <div class="footer-body__column">
                        <a href="" class="footer__logo">
                           <img
                              src="https://raw.githubusercontent.com/SayFu11a/chocolade/b498a58c74cfec3b935dd84f93923338ce2a6433/Home_files/chrome_lYYepB2Wq8.png"
                              alt=""
                           />
                        </a>
                     </div>
                  </div>
               </div>
            </footer>
         )}
         <script src="https://maps.google.com/maps/api/js?sensor=false&amp;key="></script>
         <script src="https://maps.google.com/maps/api/js?sensor=false&amp;key="></script>
      </>
   );
}

export default App;
