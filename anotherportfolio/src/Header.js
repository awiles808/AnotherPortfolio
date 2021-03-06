import React from 'react';
import { makeStyles, useTheme  } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { withRouter } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import avatar from "./logo.png";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        [theme.breakpoints.down('sm')] : {
        flexGrow: 1
        } 
    },
    headerOptions: {
        display: "flex",
        flex: 1,
        justifyContent: "space-evenly"
    },
    avatar: {
        display: "block",
        margin: "0.5 rem auto",
        width: theme.spacing(11),
        height: theme.spacing(11)
    }
     
}));

const Header= (props) => {
    const { history } =props;
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const theme  =useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClick = pageURL => {
        history.push(pageURL);
        setAnchorEl(null);
    };
    const handleButtonClick = pageURL => {
        history.push(pageURL)
         
    }

    return (
        <div className={classes.root}>
        {/* <SideBar /> */}
          
            <AppBar position="static" style={{ background: "#222" }}>
                <Toolbar>
                    {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton> */}
                    <Avatar className={classes.avatar} src={avatar} alt="Auburn" />
                    {/* <Typography variant="h6" className={classes.title}>
                        Wiles Development
                    </Typography> */}
                        
                        {isMobile ? (
                            <>
                            <IconButton 
                            edge="start" 
                            className={classes.menuButton} 
                            color="inherit" 
                            aria-label="menu" 
                            onClick={handleMenu}
                            >
                            <MenuIcon />
                        </IconButton>

                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={open}
                                onClose={() => setAnchorEl(null)}
                            >
                                <MenuItem onClick={() => handleMenuClick('/')}>Home</MenuItem>
                                <MenuItem onClick={() => handleMenuClick('about')}>About Me</MenuItem>
                                <MenuItem onClick={() => handleMenuClick('/portfolio')}>Portfolio</MenuItem>
                                <MenuItem onClick={() => handleMenuClick('/contact')}>Contact</MenuItem>
                            </Menu>
                            </>  
                            ) : (
                                <div className={classes.headerOptions}>
                                <Button variant="contained" onClick={() => handleButtonClick('/')}>Home </Button>
                                <Button variant="contained" onClick={() => handleButtonClick('/about')}>About </Button>
                                <Button variant="contained" onClick={() => handleButtonClick('/portfolio')}>Portfolio </Button>
                                <Button variant="contained" onClick={() => handleButtonClick('/contact')}>Contact </Button>
                                </div>

                            )}
                         
                       
                   
                </Toolbar>
            </AppBar>
        </div>
    );
}; 

export default withRouter (Header);