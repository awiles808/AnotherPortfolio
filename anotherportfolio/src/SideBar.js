// import React, { useState } from 'react';
// import { Link } from "react-router-dom";
// import { makeStyles } from '@material-ui/core/styles';
// import MobileLeftMenuSlider from "@material-ui/core/Drawer";
// import Footer from "./Footer";

// import {
//     AppBar,
//     Toolbar,
//     ListItem,
//     ListItemIcon,
//     IconButton,
//     ListItemText,
//     Avatar,
//     Divider,
//     List,
//     Typography,
//     Box,


// } from "@material-ui/core";
// import {
//     AssignmentInd,
//     // Home,
//     Apps,
//     ContactMail,
//     Menu

// } from "@material-ui/icons";
// import avatar from "./logo.png";

// const useStyles = makeStyles(theme => ({
//     menuSliderContainer: {
//         width: 250,
//         background: '#96CDD4',
//         height: "100%"
//     },
//     avatar: {
//         display: "block",
//         margin: "0.5rem auto",
//         width: theme.spacing(15),
//         height: theme.spacing(15)
//     },
//     listItem: {
//         color: '#222'

//     },
//     typographyStyles: {
//         flex: 1,

//     },
//     appBarBreak: {

//     }




// }));

// const menuItems = [
//     {
//         listIcon: <Menu />,
//         listText: "Menu",
//         listPath: "/"
//     },
//     {
//         listIcon: <AssignmentInd />,
//         listText: "Resume",
//         listPath: "/resume"
//     },
//     {
//         listIcon: <Apps />,
//         listText: "Portfolio",
//         listPath: "/portfolio"

//     },
//     {
//         listIcon: <ContactMail />,
//         listText: "Contacts",
//         listPath: "/contacts"
//     }
// ];

// const Navbar = () => {
//     const [state, setState] = useState({
//         left: false
//     });

//     const toggleSlider = (slider, open) => () => {
//         setState({ ...state, [slider]: open });
//     };


//     const classes = useStyles();

//     const sideList = slider => (
//         <Box
//             className={classes.menuSliderContainer}
//             component="div"
//             onClick={toggleSlider(slider, false)}

//         >
//             <Link to="/">
//                 <Avatar className={classes.avatar} src={avatar} alt="Auburn" /></Link>
//             <Divider />
//             <List>
//                 {menuItems.map((lsItem, key) => (
//                     <ListItem button key={key} component={Link} to={lsItem.listPath}>
//                         <ListItemIcon className={classes.listItem}>
//                             {lsItem.listIcon}
//                         </ListItemIcon>
//                         <ListItemText
//                             className={classes.listItem}
//                             primary={lsItem.listText} />
//                     </ListItem>
//                 ))}
//             </List>
//         </Box>

//     )
//     return (
//         <>


//             <Box component="nav">

//                 <AppBar position="static" style={{ background: "#222" }}>
//                     <Toolbar>
//                         {/* <Avatar className={classes.avatar} src={avatar} alt='Logo'/> */}
//                         {/* Menu */}
//                         <IconButton onClick={toggleSlider("left", true)}>
//                             <Menu style={{ color: "#96CDD4" }} />
//                         </IconButton>
//                         <Typography onClick={toggleSlider("left", true)} className={classes.typographyStyles} variant="h5" style={{ color: "#FFFFFF", cursor: 'pointer' }}>
//                             Menu
//                         </Typography>

//                         {/* Experience */}
//                         <Link to="/resume">
//                             <IconButton >
//                                 <AssignmentInd style={{ color: "#96CDD4" }} />
//                             </IconButton>
//                         </Link>
//                         <Typography variant="h5" style={{ color: "#FFFFFF", cursor: 'pointer' }}>
//                             <Link to='/resume' style={{ color: "inherit", cursor: 'pointer', textDecoration: 'none' }}>
//                                 Experience
//                             </Link>
//                         </Typography>

//                         {/* Portfolio */}
//                         <Link to="/portfolio">
//                             <IconButton >
//                                 <Apps style={{ color: "#96CDD4" }} />
//                             </IconButton>
//                         </Link>
//                         <Typography variant="h5" style={{ color: "#FFFFFF" }}>
//                             <Link to="/portfolio" style={{ color: 'inherit', cursor: 'pointer', textDecoration: 'none' }}>
//                                 Portfolio
//                             </Link>
//                         </Typography>


//                         {/* Contacts */}
//                         <Link to="/contacts">
//                             <IconButton >
//                                 <ContactMail style={{ color: "#96CDD4" }} />
//                             </IconButton>
//                         </Link>
//                         <Typography variant="h5" style={{ color: "#FFFFFF" }}>
//                             <Link to="/contacts" style={{ color: 'inherit', cursor: 'pointer', textDecoration: 'none' }}>
//                                 Contact
//                             </Link>
//                         </Typography>

//                         {/* <Link to="/">
//                             <IconButton >
//                                 <Home style={{ color: "#96CDD4" }} />
//                             </IconButton>
//                         </Link>
//                         <Typography variant="h5" style={{ color: "#FFFFFF" }}>
//                             Home
//                         </Typography> */}
//                     </Toolbar>

//                     <MobileLeftMenuSlider
//                         anchor="left"
//                         open={state.left}
//                         onClose={toggleSlider("left", false)}
//                     >
//                         {sideList("left")}
//                         <Footer />
//                     </MobileLeftMenuSlider>
//                 </AppBar>

//             </Box>
//         </>

//     );
// };

// export default Navbar
