import React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import TagIcon from '@mui/icons-material/Tag';
import ListItemText from '@mui/material/ListItemText';
import Skeleton from '@mui/material/Skeleton';

import { SideBlock } from './SideBlock';

export const TagsBlock = ({ items, isLoading = true }) => {
   return (
      <SideBlock title="Меню PDF">
         <List>
            <a style={{ textDecoration: 'none', color: 'black' }}>
               <ListItem>
                  <ListItemButton>
                     <ListItemIcon>Скачать</ListItemIcon>
                  </ListItemButton>
               </ListItem>
            </a>
         </List>
      </SideBlock>
   );
};
