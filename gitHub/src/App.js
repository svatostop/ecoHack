import React, { Suspense, useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import BasicMap from './basic';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import grey from '@material-ui/core/colors/grey';
import green from '@material-ui/core/colors/green';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: grey[5],
    borderRadius: 20,
  },
  textx:
  {
    height: '4vh',

    width: '70vw',
 },
  textField:
  {
    height: '27vh',
    width: '90vw',
  },
  butt:
  {
    color: grey[5],
    borderRadius: 15,
    border: '2px solid #00B337',
    width: '40vw',
    height: '4vh',
    '&:hover': {
      backgroundColor: green[600],
      borderColor: green[600],
      boxShadow: 'none',
    }
  }

}));

function App() {
    const classes = useStyles();

    return (


         <Grid container
          direction="column"
          justifyContent="flex-end"
          alignItems="center">

            <Card className={classes.root}>
               <Typography align="center" variant="h6" component="h4" className={classes.text}>
                      Мария Фул-стэк
                    </Typography>
              <BasicMap/>

              <Grid className={classes.textField} container   direction="column" justifyContent="space-evenly" alignItems="center">
                <CardActions>
                     <TextField className={classes.textx}
                      required
                      id="standard-required"
                      label="Откуда"
                      defaultValue=""
                      variant="standard"
                    />
                </CardActions>
  
                <CardActions>
                     <TextField className={classes.textx}
                      required
                      id="standard-required"
                      label="Куда"
                      defaultValue=""
                      variant="standard"
                    />
                </CardActions>
  
                <CardActions>
                  <Button variant="outlined" size="medium" className={classes.butt} >
                    ВПЕРЕД
                  </Button>
                </CardActions>
                </Grid>

        </Card>

      </Grid>


    );
}

export default App;