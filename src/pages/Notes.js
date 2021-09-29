import React,{useEffect, useState} from 'react'
import { Grid } from '@material-ui/core'
//import { Paper } from '@material-ui/core'
import { Container } from '@material-ui/core'
import { Button } from '@material-ui/core'
import NoteCard from '../components/NoteCard'
import { Typography } from '@material-ui/core'

export default function Notes() {
  const [notes, setNotes] = useState([])


  useEffect(() => {
    fetch('http://localhost:30001/notes')
      .then(res => res.json())
      .then(data => setNotes(data))

  },[])

  const handleDelete = async (id) => { 
    await fetch( 'http://localhost:3001/notes' + id, {
      method: 'DELETE'
    })
    const newNotes = notes.filter( note => note.id !== id)
    setNotes(newNotes)
  }
  return (
    
    <Container>
         <Typography 
        variant = "h6"
        component = "h2"
        align = "center"
        color = "primary"
        gutterBottom
        
      >
        These are all the complaints 
      </Typography>
      <Grid container spacing = {4}>
      {notes.map(note => (
        <Grid item key = {note.id} xs = {12} md = {6} lg ={4}>
          <NoteCard note = {note} handleDelete = {handleDelete}/>
        </Grid>
      ))}
      </Grid>
      <br/>
      < br/>
      <Button href="http://localhost:3001/create" variant = "contained" color = "secondary"> 
              File a complaint
            </Button>
    </Container>
  )
} 
