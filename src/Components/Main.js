import React from 'react'
import { Divider, Grid, Typography } from "@mui/material"
import Markdown from "markdown-to-jsx"
import { posts } from "./Data"
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    postBody: {
        // border: "1px solid red",
        marginBottom: "10px",
        marginTop: theme.spacing(3),
        fontSize: "18px"


    },

}))

const Main = ({ title }) => {
    const classes = useStyles()
    return (
        <Grid item xs={12} md={8}>
            <Typography variant='h6' gutterBottom >
                {title}
            </Typography>
            <Divider />
            {
                posts.map((post) => (
                    <Markdown key={post.body} className={classes.postBody} >
                        {post.body}
                    </Markdown>
                ))}


        </Grid>
    )
}

export default Main
