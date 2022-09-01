import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getLogin } from 'redux/auth/auth-selectors';
import { logOut } from 'redux/auth/auth-operations';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

import { NavigationLink, ButtonS, NavContainer } from './Navigation.styled';

// import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';


export const Navigation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogged = useSelector(getLogin);
  // const name = useSelector(getUsername);


  const onClick = () => {
    dispatch(logOut());
    navigate('/login', { replace: true });
  };
  return (
    <NavContainer>
      {!isLogged && (
        <>
          <NavigationLink to="/">Sign up</NavigationLink>
          <NavigationLink to="/login">Login</NavigationLink>
        </>
      )}

      {isLogged && (
        <><Stack direction="row"  spacing={2}>
          <Avatar  alt="Travis Howard" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4figuc0MHBNlnCY5B5XYo6EuHjEmOsSOFyw&usqp=CAU" />
          </Stack>
          <h4>Welcome!</h4>
         
          <NavigationLink to="/contacts">Contacts</NavigationLink>
          <ButtonS  onClick={onClick}>← LOGOUT</ButtonS>
        </>
      )}
    </NavContainer>
  );
};
