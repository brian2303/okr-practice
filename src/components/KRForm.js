import React from 'react';
import { Button, Divider, Grid, Slider, TextField, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import DatePicker from '../components/DatePicker';


const KRForm = () => {
  return (
    <>
      <h2>Crear KR</h2>
      <Divider style={{ marginBottom: 20 }} />
      <Grid container spacing={2} style={{ marginBottom: 20 }}>
        <Grid item xs={5} >
          <TextField
            required
            variant="outlined"
            fullWidth
            id="input_keyresult_kr"
            label="Resultado clave"
          />
        </Grid>
        <Grid item xs={3}>
          <DatePicker titleField='fecha inicio' />
        </Grid>
        <Grid item xs={3}>
          <DatePicker titleField='fecha fin' />
        </Grid>
      </Grid>
      <h3>Responsable</h3>
      <Grid container spacing={2}  >
        <Grid item xs={6} >
          <TextField
            required
            variant="outlined"
            fullWidth
            id="input_responname_kr"
            label="Nombre"
          />
        </Grid>
        <Grid item xs={5} >
          <TextField
            required
            variant="outlined"
            fullWidth
            id="input_responemail_kr"
            label="Email"
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} style={{ marginTop: 20 }} >
        <Grid item xs={6}>
          <TextField
            id="input_description_okr"
            label="Descripcion"
            multiline
            rows="3"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={4}>
          <Typography id="input_percentage">
            Peso porcentual
          </Typography>
          <Slider
            defaultValue={0}
            getAriaValueText=''
            aria-labelledby="input_percentage"
            valueLabelDisplay="auto"
            step={1}
            min={5}
            max={100}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} style={{ marginTop: 20 }} >
        <Grid item xs={4}>
          <Link to='/okr/create' style={{ textDecoration: 'none' }}>
            <Button variant="contained" style={{ fontFamily: 'Lato', marginRight: 10 }}>
              Volver
            </Button>
          </Link>
          <Button variant="contained" style={{ fontFamily: 'Lato' }}>
            Guardar
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default KRForm;
