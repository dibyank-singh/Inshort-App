import React from 'react'
import {Box, Typography , makeStyles} from '@material-ui/core'

const useStyle= makeStyles(theme=>({
box:{
    height:70,
    backgroundColor:"red",
    color:"#ffffff",
    display:"flex",
    alignItems:"center",
    [theme.breakpoints.down('md')]:{
        display:"none"
    }
},
text:{
    paddingLeft:"20px"
},logo:{
    height:45,
    '&:last-child':{
        margin:"0 60px 0 20px"
    }
}

}))
const Headline = () => {
    const classes=useStyle()
    const Ios = 'https://assets.inshorts.com/website_assets/images/appstore.png';
    const Playstore = 'https://assets.inshorts.com/website_assets/images/playstore.png';
    return (
       <Box className={classes.box}>
          <Typography className={classes.text}> For the best experience use <b>inshorts </b> app on your smartphone </Typography>
          <Box style={{marginLeft:"auto"}}>
              <img src={Ios} alt="Ios" className={classes.logo} />
              <img src={Playstore} alt="playstore" className={classes.logo} />
          </Box>

       </Box>
    )
}

export default Headline ;
