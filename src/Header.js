import React from 'react'
import { IconButton, Avatar } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import ArrowDropDown from '@material-ui/icons/ArrowDropDown'
import AppIcon from '@material-ui/icons/Apps'
import NoticationsIcon from '@material-ui/icons/Notifications'
import './Header.css'
import { useSelector, useDispatch } from 'react-redux'
import { selectUser, logout } from './features/counter/userSlice'
import { auth } from './firebase'
export default function Header() {
const user=useSelector(selectUser)
const dispatch=useDispatch()
    
    
    const logOut = () => {
        auth.signOut()
        dispatch(logout())
}



    return (
      <div className="header">
        <div className="header__left">
          <IconButton>
            <MenuIcon />
          </IconButton>
          <img
            alt="logo"
            src="https://i1.wp.com/ihelpyourmac.com/wordpress/wp-content/uploads/2014/07/gmail-logo.png?ssl=1"
          />
        </div>
        <div className="header__center">
          <SearchIcon />
          <input placeholder="search" type="text" />
          <ArrowDropDown className="header__inputCard" />
        </div>
        <div className="header__right">
          <IconButton>
            <AppIcon />
          </IconButton>
          <IconButton>
            <NoticationsIcon />
          </IconButton>

          <IconButton onClick={logOut}>
            <Avatar src={user?.photoUrl} />
          </IconButton>
        </div>
      </div>
    );
}
