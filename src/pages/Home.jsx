import React, { forwardRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

import { Post } from '../components/Post';
import { TagsBlock } from '../components/TagsBlock';
import { CommentsBlock } from '../components/CommentsBlock';
import { fetchPosts, fetchTags } from '../redux/slices/post';

import { baseURL } from '../axios';

// import { get } from 'react-hook-form';

export const Home = forwardRef((props, ref) => {
   const dispatch = useDispatch();
   const userData = useSelector((state) => state.auth.data);
   const { posts, tags } = useSelector((state) => state.posts);

   const isPostsLoading = posts.status === 'loading';
   const isTagsLoading = tags.status === 'loading';

   React.useEffect(() => {
      dispatch(fetchPosts());
      dispatch(fetchTags());
   }, []);

   console.log(posts);

   return (
      <>
         <Tabs
            ref={ref}
            style={{ marginBottom: 15, backgroundColor: '#fff' }}
            value={0}
            aria-label="basic tabs example">
            <Tab label="Меню" />

            <Link to="/about-us">
               <Tab label="О нас" />
            </Link>
         </Tabs>
         <Grid container spacing={4}>
            <Grid xs={8} item>
               {(isPostsLoading ? [...Array(5)] : posts.items).map((obj, index) =>
                  isPostsLoading ? (
                     <Post key={index} isLoading={true} />
                  ) : (
                     <Post
                        id={obj._id}
                        title={obj.title}
                        imageUrl={obj.imageUrl ? `${baseURL}${obj.imageUrl}` : ''}
                        user={obj.user}
                        createdAt={obj.createdAt}
                        viewsCount={obj.viewsCount}
                        commentsCount={3}
                        tags={obj.tags}
                        isEditable={userData?._id === obj.user._id}
                     />
                  ),
               )}
            </Grid>
            <Grid xs={4} item>
               <TagsBlock items={tags.items} isLoading={isTagsLoading} />
               <CommentsBlock
                  items={[
                     {
                        user: {
                           fullName: 'Вася Пупкин',
                           avatarUrl: 'https://mui.com/static/images/avatar/1.jpg',
                        },
                        text: 'Это тестовый комментарий',
                     },
                     {
                        user: {
                           fullName: 'Иван Иванов',
                           avatarUrl: 'https://mui.com/static/images/avatar/2.jpg',
                        },
                        text: 'When displaying three lines or more, the avatar is not aligned at the top. You should set the prop to align the avatar at the top',
                     },
                  ]}
                  isLoading={false}
               />
            </Grid>
         </Grid>
      </>
   );
});
