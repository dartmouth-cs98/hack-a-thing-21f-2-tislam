import React, {useState} from 'react'
import { Container, FormControlLabel, TextField, Typography } from '@material-ui/core'
import { Button } from '@material-ui/core'
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
//import { Box } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { makeStyles } from '@material-ui/core';
import { Radio } from '@material-ui/core';
import { RadioGroup } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { FormLabel } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
const useStyles = makeStyles({
  field: { 
    marginTop: 20,
    marginBottom: 20,
    display: 'block' 
  }
})

export default function Create() {
  const classes = useStyles()
  const history = useHistory()
  const [title,setTitle] = useState('')
  const [details,setDetails] = useState('')
  const [titleError, setTitleError] = useState(false)
  const [detailsError, setDetailsError] = useState(false)
  const [category, setCategory] = useState('Student')


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
      fetch('http://localhost:30001/notes',{
        method: "Post",
        headers: {"Content-type": "application/json"},
        body : JSON.stringify({title,details,category})

      }).then(()=> history.push('/'))
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
        Fill out a complaint 
      </Typography>
      <form noValidate autoComplete="off" onSubmit = {handleSubmit}>
        <TextField
          onChange = {(e)=> setTitle(e.target.value)}
          className = {classes.field}
          label="Complaint title " 
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
          label="Complaint description" 
          variant="outlined" 
          color="secondary" 
          multiline
          rows = {4}
          fullWidth
          required
          error = {detailsError}
        />
       < br />  
       <FormControl className = {classes.field}>
       <FormLabel> Status </FormLabel>
       < RadioGroup value = {category} onChange ={(e) => setCategory(e.target.value)}>
        <FormControlLabel value= "Student" control = {<Radio />} label = "Student" />
        <FormControlLabel value= "Professor" control = {<Radio />} label = "Professor" />
        <FormControlLabel value= "Residential operations staff " control = {<Radio />} label = "Residential operations staff" />
        <FormControlLabel value= "Dean" control = {<Radio />} label = "Dean" />
      </RadioGroup>
      </ FormControl>
      


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
