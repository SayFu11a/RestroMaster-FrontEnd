import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Link from '@mui/material/Link';

const AboutUs = () => {
   return (
      <Container maxWidth="lg" style={{ padding: '2rem 0' }}>
         <Typography variant="h3" component="h1" gutterBottom>
            О нас
         </Typography>
         <Typography variant="body1" component="p" gutterBottom>
            Добро пожаловать в наш ресторан! Мы предлагаем изысканную кухню, уютную атмосферу и
            отличный сервис. Наш ресторан - идеальное место для семейных ужинов, романтических
            вечеров и деловых встреч. Мы стремимся предоставить нашим гостям лучшие впечатления от
            еды и обслуживания.
         </Typography>
         <Typography variant="h5" component="h2" gutterBottom>
            ПОЧЕМУ СТОИТ ВЫБРАТЬ ИМЕННО НАС?
         </Typography>
         <List>
            <ListItem>
               <ListItemText primary="1. Скорость;" />
            </ListItem>
            <ListItem>
               <ListItemText primary="2. Возможность отправки данных о бронировании и обратной связи;" />
            </ListItem>
            <ListItem>
               <ListItemText primary="3. Доступность;" />
            </ListItem>
            <ListItem>
               <ListItemText primary="4. Натурельные продукты." />
            </ListItem>
         </List>

         <Typography variant="h5" component="h2" gutterBottom>
            Контакты
         </Typography>
         <List>
            <ListItem>
               <ListItemText
                  primary="Адрес: 45-35 #B 39th, Sunnyside, NY 11104"
                  secondary={
                     <Link href="https://www.google.com/maps" target="_blank" rel="noopener">
                        Посмотреть на карте
                     </Link>
                  }
               />
            </ListItem>
            <ListItem>
               <ListItemText
                  primary="Телефон:"
                  secondary={<Link href="tel:+17187777777">(718) 777-7777</Link>}
               />
            </ListItem>
            <ListItem>
               <ListItemText
                  primary="Электронная почта:"
                  secondary={<Link href="mailto:contact@primeome.com">contact@primeome.com</Link>}
               />
            </ListItem>
         </List>
      </Container>
   );
};

export default AboutUs;
