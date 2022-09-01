import { NavLink } from 'react-router-dom';
import styled from "styled-components";


export const NavContainer = styled.div`
display: flex;
position: sticky;
background-color: #c7d6ed;

align-items: center;
padding: 10px 30px;
/* border-bottom: 1px solid black; */
border-radius: 4px;
/* box-shadow:
inset rgba(1,1,1.6) 0 -1px 1px,
inset rgba(1,1,1.7) 0 1px 1px,
rgba(0,0,0,.4) 0 1px 1px -1px; 
 */
`
export const NavigationLink = styled(NavLink)`
 font-size: 16px;
font-weight: 400;
text-decoration:none;
/* color: #1688c9; */
color: white;
background-color:#226ae0;
padding: 8px 17px;
border-radius: 7px;
margin-left: 17px;
transform: translatex(0px);
&:hover{
    cursor: pointer;
    /* scale: 1.05; */
    transform: translatex(-2px);
    transition-duration: 200ms;
    box-shadow: -1px 3px 16px -2px rgba(75,99,204,1);

    background-color: #044cba;


}
    /* box-shadow:
inset rgba(109, 167, 209.6) 0 -1px 2px,
inset rgba(109, 167, 209.7) 0 1px 4px,
rgba(0,0,0,.4) 0 1px 4px -3px; 
   */

/* border: 2px solid white; */
  /* background-color: #edf8ff; */
  
  
  /* padding: 14px 28px; */
  font-size: 16px;
  cursor: pointer;
  border-radius: 8px;

/* Green */

  /* border-color: #04AA6D; */
  /* color: green; */

`

export const ButtonS = styled.button`
margin-left: auto;
background-color: black;
color: white;
/* margin-right: 20px; */
 font-size: .8em;
 font-weight: 400;
 padding: 5px 4px;
 border-radius: 6px;
 
  /* font-family: 'Oswald', sans-serif;  */
  /* box-shadow: inset 1px -1px 86px 8px rgba(130,135,131,1); */
  border: 2px solid gray;
  &:hover{
    cursor: pointer;
    transform: translatex(-4px);
    transition-duration: 200ms;
  }
`




