import React from 'react'
import { Card, CardContent, Typography, CardActions, Button } from "@mui/material"
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: "37px !important",
        fontFamily: "Montserrat !important",

        // border: "1px solid white"
    },
    cover: {
        backgroundImage: `url(https://cdn.pixabay.com/photo/2020/04/09/02/26/tree-5019381_960_720.jpg) !important`,
        backgroundPosition: "center !important",
        padding: "35px 25px"
    }
}))
const Featuredpost = () => {
    const classes = useStyles();
    return (
        <Card className={classes.cover}>
            <CardContent className={classes.textContainer}>
                <Typography className={classes.title} gutterBottom variant='h5'>Title of a longer featured blog post</Typography>
                <Typography variant='h5'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, perspiciatis harum? Aperiam cum sed quibusdam ducimus rerum labore cupiditate facere.
                </Typography>
            </CardContent>
            <CardActions>
                <Button className={classes.btn}>
                    Read More...
                </Button>
            </CardActions>
        </Card>
    )
}

export default Featuredpost
