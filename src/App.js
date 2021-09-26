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
import ModalPopap from './PopupCallback';

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
   ccal:
  {
    height: '4vh',

    width: '10vw',
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
    width: '30vw',
    height: '4vh',
    '&:hover': {
      backgroundColor: green[600],
      borderColor: green[600],
      boxShadow: 'none',
    }
  },

   buttCallback:
  {
    color: grey[5],
    borderRadius: 15,
    border: '2px solid #ff9800',
    width: '20vw',
    height: '4vh',
    '&:hover': {
      backgroundColor: '#ff9800',
      borderColor: '#ff9800',
      boxShadow: 'none',
    }
  }

}));

function App() {
    const classes = useStyles();

    const [kkal, setKkal] = useState('0')
    const [trigger, setTrigger] = useState(0);
    const [mapLayers, setMapLayers] = useState([]);
    const [fieldFrom, setFieldFrom] = useState('');
    const [fieldTo, setFieldTo] = useState('');
    const [geojsonvisible,setGeo] = useState(false);
      const [open, setOpen] = React.useState(false);

  function setKK(val){
    console.error(val.toFixed(1))
    setKkal(parseFloat(val).toFixed(2).toString())
  }

  function onGeojsonToggle(bool) {
    setGeo(bool)
    setTrigger(trigger+1)
  }

  function CallbackButton() {
    if (geojsonvisible)
      handleOpen();
  }

  const handleValue = (event) =>
  {
    setFieldFrom(event.target.value);
  }
  const handleValueTo = (event) =>
  {
    setFieldTo(event.target.value);
  }
  function setValue(value) {
    setFieldFrom(value);
  }
  function setValueTo(value) {
    setFieldTo(value);
  }

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (


         <Grid container
          direction="column"
          justifyContent="flex-end"
          alignItems="center">

            <Card className={classes.root}>
               <Typography align="center" variant="h6" component="h4" className={classes.text}>
                      ЭкоМаршруты
                    </Typography>
              <BasicMap mapLayers={mapLayers} trigger={trigger} setMapLayers={setMapLayers} geojsonvisible={geojsonvisible} setGeo={onGeojsonToggle} setValue={setValue} setValueTo={setValueTo} fieldFrom={fieldFrom} fieldTo={fieldTo} setKK={setKK} />

              <Grid className={classes.textField} container   direction="column" justifyContent="space-evenly" alignItems="center">
                <CardActions>
                     <TextField className={classes.textx}
                      required
                      id="standard-required"
                      label="Откуда"
                      defaultValue=""
                      variant="standard"
                      onChange={handleValue}
                      value={fieldFrom}
                    />
                </CardActions>
  
                <CardActions>
                     <TextField className={classes.textx}
                      required
                      id="standard-required"
                      label="Куда"
                      defaultValue=""
                      variant="standard"
                      onChange={handleValueTo}
                      value={fieldTo}

                    />
                </CardActions>
                <Grid container
          direction="row"
          justifyContent="space-evenly" alignItems="center">
                <CardActions>
                  <Button variant="outlined" size="medium" className={classes.butt} onClick={()=>onGeojsonToggle(true)} >
                    ВПЕРЕД
                  </Button>
                </CardActions>
                <CardActions>
                     <TextField className={classes.ccal}
                      required
                      id="standard-required"
                      label="Ккал"
                      defaultValue=""
                      variant="standard"
                      value={kkal}

                    />
                </CardActions>
                <CardActions>
                  <Button variant="outlined" size="medium" className={classes.buttCallback} onClick={CallbackButton} >
                    Оценить
                  </Button>

                  <ModalPopap open={open} handleClose={handleClose}/>

                </CardActions>
                </Grid>
                </Grid>

        </Card>

      </Grid>


    );
}

export default App;