import React from 'react';
import { Button, Divider, Grid, TextField } from '@material-ui/core';
import SelectButton from './SelectButton';
import { Link } from 'react-router-dom';

const OKRForm = () => {
  const verticalOptions = [
    { value: 'DESARROLLO', name: 'Desarrollo' },
    { value: 'SCRUM', name: 'Scrum' }
  ]
  return (
    <>
      <h2>Crear objetivo</h2>
      <Divider style={{ marginBottom: 20 }} />
      <Grid container spacing={2} style={{ marginBottom: 20 }}>
        <Grid item xs={6} >
          <TextField
            required
            variant="outlined"
            fullWidth
            id="input_title_okr"
            label="Titulo OKR"
          />
        </Grid>
        <Grid item xs={6}>
          <SelectButton title='Seleccionar vertical' elements={verticalOptions} />
        </Grid>
      </Grid>
      <h3>Responsable</h3>
      <Grid container spacing={2}  >
        <Grid item xs={6} >
          <TextField
            required
            variant="outlined"
            fullWidth
            id="input_respon_okr"
            label="Nombre"
          />
        </Grid>
        <Grid item xs={5} >
          <TextField
            required
            variant="outlined"
            fullWidth
            id="input_responemail_okr"
            label="Email"
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} style={{ marginTop: 20 }} >
        <Grid item xs={7}>
          <TextField
            id="input_description_okr"
            label="Descripcion"
            multiline
            rows="3"
            fullWidth
            variant="outlined"
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} style={{ marginTop: 20 }} >
        <Grid item xs={4}>
          <Link to='/kr/create' style={{ textDecoration: 'none' }}>
            <Button variant="contained" style={{ fontFamily: 'Lato' }}>
              Siguiente
            </Button>
          </Link>
        </Grid>
      </Grid>
    </>
  );
}

export default OKRForm;
