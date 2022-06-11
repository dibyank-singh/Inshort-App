import React from 'react'
import { AppBar, Toolbar, IconButton, makeStyles } from '@material-ui/core'
import {Menu} from '@material-ui/icons'

const useStyle = makeStyles({
header:{
backgroundColor:"#fff",
height:"90px"
},
logo : {
  height:"70px",
  margin:"auto",
  paddingRight:75

  
},
menu_color:{
  color:"black"
}

})
const Header = () => {
  const classes =useStyle()
  const url = 'https://assets.inshorts.com/website_assets/images/logo_inshorts.png';
  return (
    <div>
      <AppBar  className={classes.header} position="static">
        <Toolbar>
          <Menu className={classes.menu_color}/>
       <img className={classes.logo} src={url} alt="insort-logo" />
        </Toolbar>
      </AppBar>

    </div>
  )
}

export default Header
