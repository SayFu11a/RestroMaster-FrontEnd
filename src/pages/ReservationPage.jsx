// ReservationPage.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useSelector } from 'react-redux';

import { selectIsAuth } from '../redux/slices/auth';

import { baseURL } from '../axios';

function ReservationPage() {
   const isAuth = useSelector(selectIsAuth);
   const [reservations, setReservations] = useState([]);

   useEffect(() => {
      // Fetch data from the server when the component mounts
      axios
         .get(`${baseURL}/booking`)
         .then((response) => {
            setReservations(response.data);
         })
         .catch((error) => {
            console.error('Ошибка при получении данных:', error);
         });
      console.log(reservations);
   }, []);

   console.log(reservations);
   return (
      <div>
         <h2>Список бронирований</h2>

         {isAuth ? (
            <>
               <ul>
                  {reservations.map((reservation) => (
                     <li key={reservation._id}>
                        <p>Название блюда: {reservation.title}</p>
                        <p>
                           Дата бронированияда:{' '}
                           {new Date(reservation.checkInDate).toLocaleDateString()}
                        </p>

                        <p>Имя бронирующего: {reservation.contactInfo.fullName}</p>
                        <p>Email: {reservation.contactInfo.email}</p>
                        <p>Номер телефона: {reservation.contactInfo.phoneNumber}</p>
                        <p>Персоны:</p>
                        {reservation.guests[0].fullName ? (
                           <ul>
                              {reservation.guests.map((guest) => (
                                 <li key={guest._id}>{guest.fullName}</li>
                              ))}
                           </ul>
                        ) : (
                           <p>Персон нет</p>
                        )}
                        <p>Цена: {reservation.tags}</p>
                        <br />
                     </li>
                  ))}
               </ul>
            </>
         ) : (
            <>Нет Доступа</>
         )}
      </div>
   );
}

export default ReservationPage;
