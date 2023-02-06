import { Box , makeStyles } from '@material-ui/core'
import './App.css';
import Allposts from './Components/Allposts';
import Header from "./Components/Header"
import Headline from './Components/Headline';

const useStyle= makeStyles(theme=>({
headline_style:{
  width:"70%",
  margin:"0 auto",
  marginTop:"30px",
  [theme.breakpoints.down('md')]:{
    width:"80%"
  },
  [theme.breakpoints.down('sm')]:{
    width:"90%"
  }
}
}))

function App() {
  const classes=useStyle();
  return (
    
    <Box>
      <Header/>
      <Box className={classes.headline_style} >
      <Headline/>
      <Allposts/>    
      </Box>
    </Box>
    
  );
}

export default App;
