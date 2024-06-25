import React from 'react';
import { useState } from 'react';
import { Grid, TextField ,Button, Paper} from '@mui/material';

export default function Login() {

    const [userdetails, setUserdeails]=useState("")
    const [userpassword, setUserPassword]=useState("")
  
    function handleusername(e){
        setUserdeails(e.target.value)
    }
    function handlepassword(e){
        setUserPassword(e.target.value)
    }

    function handlesubmit(e){
        if(userdetails === 'test@test.com' && userpassword ==='test@123'){
            alert('Login Successfull')
        }else{
            alert('Invalid User Deatils')
        }
    }
  return (
    <Grid container justifyContent="center" style={{width:"50%"} } >
        <Grid item xs={10} spacing={2}>
            <Paper elevation={3} style={{padding:20}}>
        <form className='form' style={{heigth:"10vh"}}>
        <TextField id="outlined-basic"  type="email" label="Emial" variant="outlined" className="email" onChange={(e)=>{handleusername(e)}} />
        <TextField id="outlined-basic" type="password" label="Password" variant="outlined"  className="password" onChange={(e)=>{handlepassword(e)}}/>
        <Button variant="contained" onClick={handlesubmit} className='button'>Login</Button>

        </form>
     </Paper>
    </Grid>
    </Grid>
  )
}

