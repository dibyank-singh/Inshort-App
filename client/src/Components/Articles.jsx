import { Card, CardContent, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyle = makeStyles(theme => ({
    cardconten:{
        marginTop :"20px",
         marginBottom:"22px",
         boxShadow :" 0 5px 7px 0 rgb( 0 0 0 /14%), 0 4px 6px 0 rgb(0 0 0 /16%)",
    },
    textCont:{
        margin:"4px 0 0 -36px",
        // display:"flex",
        // flexDirection:"column",
        [theme.breakpoints.down('md')]:{
            margin:'5px 0',
         },
        [theme.breakpoints.down('sm')]:{
           margin:'5px 0',
        }
    }, 

    image: {
        height: 270,
        width: "80%",
        borderRadius: 8,
        objectFit: "cover",
        [theme.breakpoints.down('sm')]:{
            width:"100%"
         }
        
    }, 
    title:{
        color:'#545557',
        fontSize:"30",
        fontWeight:800,
        lineHeight:"18px",
        
    },
    author:{
        fontSize:13,
        lineHeight:"23px"
    },
    description:{
        marginTop:"14px"
    },
    publisher:{
        marginTop:"50px",
        fontSize:13,
        '& > *':{
            textDecoration:"none",
            color:"#000",
            fontWeight:800,


        }

    }
}))

const Articles = ({ post }) => {
    const classes = useStyle();
    console.log(post)
    return (
        <>
            <Card className={classes.cardconten}>
                <CardContent>
                    <Grid container>
                        <Grid item lg={5} md={5} sm={5} xs={12}>  <img src={post.url} alt="postImage " className={classes.image} />   </Grid>
                        <Grid item lg={7} md={7} sm={7} xs={12} className={classes.textCont}>
                          <Typography className={classes.title}>{post.title}</Typography>
                          <Typography className={classes.author}>
                              <b>Short</b> by {post.author} / {new Date(post.timestamp).toDateString()}
                          </Typography>
                          <Typography className={classes.description}>
                              {post.description}
                          </Typography>
                          <Typography className={classes.publisher}>
                              Read more at <a href={post.link} target="_blank" > {post.publisher}</a>
                          </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>

        </>
    );
};

export default Articles;
