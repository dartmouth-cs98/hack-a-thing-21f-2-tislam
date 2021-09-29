import React from 'react'
import { ButtonGroup, Typography } from '@material-ui/core'
import { Button } from '@material-ui/core'
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import { Box } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
  btn: {
    fontsize: 60, 
    backgroundColor: 'violet'
  }
})
export default function Create() {
  const classes = useStyles() 
  return (
    <div>
      <Typography 
        variant = "h6"
        color = "secondary"
        component = "h2"
        align = "center"
        gutterBottom
      >
        Create a New Note 
      </Typography>
      <SentimentSatisfiedIcon fontsize = "large" color = "secondary" />
      < br />  
      < br />  

      <Box textAlign = 'center'>
        <Button 
        className = {classes.btn}
        type= "submit" 
        variant= "contained"
        color = "secondary"
        onClick = {() => console.log("You clicked me!")} 
        endIcon = { <SendIcon/>}
        
        > 
        Submit 
        </Button>

        < br />  


        <ButtonGroup color = "primary">
          <Button> One </Button>
          <Button> two </Button>
          <Button> three </Button>




        </ButtonGroup>
    </Box > 

    </div>
  )
}
