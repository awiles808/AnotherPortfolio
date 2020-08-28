import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import ParticlesFun from  "./PartilcesFun";


import {
    Box,
    Grid,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Link,
    Typography
} from "@material-ui/core";
// import Navbar from './Navbar';
import project1 from "./PowderPlannerFull.png";
// import project2 from "./images/503Dev.png";
// import project3 from "./images/LouiesSchedule.png";
// import project4 from "./images/pong.png"


const useStyles = makeStyles({
    mainContainer: {
        background: "#A5B2BA", 
        height: "100%"
    },
    cardContainer: {
        maxWidth: 400,
        background: "white",
    
        margin: "5rem auto"
    },
    // Box: {
    //     boxSizing: 'border-box',
    //     minWidth: 0,
    // }

});

const Portfolio = () => {
    const classes = useStyles();
    return (

        <>
        <ParticlesFun />
        <Box component="div" className={classes.mainContainer}>
            {/* <Navbar /> */}
            <Grid container justify="center">
            {/* Project 1 */}
            <Grid item xs={12} sm={8} md={6}>
                <Card className={classes.cardContainer}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Project 1"
                            height="240"
                            width="340"
                            image={project1}
                            
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Powder Planner
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lorem30
                                </Typography>  
                                </CardContent>
                            </CardActionArea>
                                <CardActions>
                            
                            <Link href="https://fathomless-atoll-71863.herokuapp.com/" target="_blank" >
                                View Powder Planner
                                </Link>
                                    
                                    <Link href="https://github.com/awiles808/PowderPlanner" target="_blank"size="small" color="primary">
                                        Git Hub Repo
                                    </Link>
                                </CardActions>
                    </Card>
                    </Grid>
                
                
{/*                 
                    <Grid item xs={12} sm={8} md={6}>
                        <Card className={classes.cardContainer}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Project 2"
                                    height="240"
                                    width="340"
                                    image={project2}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5">
                                        503 Development Company
                                </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lorem30
                                </Typography>
                                </CardContent>
                        </CardActionArea>
                                <CardActions>
                            <Link href="http://503developmentcompany.com/" target= "_blank" size="small" color="primary">
                                        503 Development CO
                                    </Link>
                                    <Link href="https://github.com/awiles808/WaterHeaterSchedule" target="_blank" size="small" color="primary">
                                        Git Hub Repo
                                    </Link>
                                </CardActions>                            
                        </Card>
                </Grid>
              
              



                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Project 3"
                                height="240"
                                width="340"
                                image={project3}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Plumbers's Log
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lorem30
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                            <CardActions>
                            <Link href="https://water-heater-schedule.firebaseapp.com/" target="_blank" size="small" color="primary">
                                    Plumber's Log
                                    </Link>
                            <Link href="https://github.com/awiles808/WaterHeaterSchedule" target="_blank" size="small" color="primary">
                                    Git Hub Repo
                                    </Link>
                            </CardActions>                       
                    </Card>
                </Grid>
                



                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Project 4"
                                height="240"
                                width="340"
                                image={project4}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Pong
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
Can You Beat A Computer In Pong? Take It Back To One Of The Original Games, And See How Your Skills Match Up Against A Computer!

                                </Typography>
                            </CardContent>
                        </CardActionArea>
                            <CardActions>
                                <Link href="" size="small" color="primary">
                                    Share
                                    </Link>
                                <Link size="small" color="primary">
                                    Git Hub Repo
                                    </Link>
                            </CardActions>                       
                    </Card>
                </Grid> */}
            </Grid>
        </Box>

        </>
    );
}

export default Portfolio
