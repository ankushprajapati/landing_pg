import React, { useState } from 'react'
import Logo from '../Assets/Logo.svg';
import { BsCart2} from 'react-icons/bs';
import {HiOutlineBars3} from 'react-icons/hi2';
import {
    Box,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,

} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import CommentIcon from '@mui/icons-material/Comment';
import PhoneIcon from '@mui/icons-material/Phone';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState (false);
    const menuOptions = [
        {
            text:'Home',
            icon: <HomeIcon />,
        },
        {
            text:'Info',
            icon: <InfoIcon />,
        },
        {
            text:'Comment',
            icon: <CommentIcon />,
        },
        {
            text:'Phone',
            icon: <PhoneIcon />,
        },
        {
            text:'Cart',
            icon: <ShoppingCartIcon />,
        },
    ];

  return (

    <nav>
        <div className='nav-logo-container'>
            <img src={Logo} alt='' />
        </div>
        <div className='navbar-links-container'>
            <a href='https://github.com/ankushprajapati'>Home</a>
            <a href='https://github.com/ankushprajapati'>About</a>
            <a href='https://github.com/ankushprajapati'>Testimonials</a>
            <a href='https://github.com/ankushprajapati'>Contact</a>
            <a href='https://github.com/ankushprajapati'>
                <BsCart2 className='navbar-cart-icon'/>
            </a>
            <button className='primary-button'>Booking Now</button>
        </div>
        <div className='navbar-menu-container'>
            <HiOutlineBars3 onClick={() => setOpenMenu(true)} />

        </div>

        <Drawer open={openMenu} onclose={()=> setOpenMenu} anchor='right'>
            <Box
            sx={{ width:250 }}
            role='presentation'
            onClick={() => setOpenMenu(false)}
            onKeyDown={()=> setOpenMenu(false)}
            >
            <List>
                {menuOptions.map((item)=>(
                    <ListItem key={item.text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                        </ListItem>
                ))}
            </List>
            </Box>  
        </Drawer>

    </nav>



  );
};

export default Navbar;
