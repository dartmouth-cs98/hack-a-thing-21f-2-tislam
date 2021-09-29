import React, {useState} from 'react'
import { Container, TextField, Typography } from '@material-ui/core'
import { Button } from '@material-ui/core'
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
//import { Box } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  field: { 
    marginTop: 20,
    marginBottom: 20,
    display: 'block' 
  }
})

export default function Create() {
  const classes = useStyles()
  const [title,setTitle] = useState('')
  const [details,setDetails] = useState('')
  const [titleError, setTitleError] = useState(false)
  const [detailsError, setDetailsError] = useState(false)

  const handleSubmit = (e) => { 
    e.preventDefault()
    setTitleError(false)
    setDetailsError(false)
    if (title === '') {
      setTitleError(true)
    }
    if (details === '') {
      setDetailsError(true)
    }
    if(title && details){
      console.log(title, details)
    }
  }

  return (
    
    <Container>
    <div>
      <Typography 
        variant = "h6"
        component = "h2"
        align = "center"
        color = "primary"
        gutterBottom
        
      >
        Create a New Note 
      </Typography>
      <form noValidate autoComplete="off" onSubmit = {handleSubmit}>
        <TextField
          onChange = {(e)=> setTitle(e.target.value)}
          className = {classes.field}
          label="Note Title" 
          variant="outlined" 
          color="secondary" 
          fullWidth
          required
          error = {titleError}
        />
        < SentimentSatisfiedIcon fontsize = "large" color = "secondary" />
        <TextField
          onChange = {(e)=> setDetails(e.target.value)}
          className = {classes.field}
          label="Note Title" 
          variant="outlined" 
          color="secondary" 
          multiline
          rows = {4}
          fullWidth
          required
          error = {detailsError}
        />
       < br />  
      <Button 
        type= "submit" 
        variant= "contained"
        color = "secondary"
        endIcon = { <SendIcon/>}
        > 
        Submit 
        </Button>
      
    

    </form>
    </div>
    </Container>
    
  )
}
