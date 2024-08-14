
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

import { useState, useEffect } from 'react';

import './About.css'




const About = () => (
    <>
    <div className='container'>
    <Card className='card'>
        <CardActionArea >
            <CardMedia 
            component="img"
            image='/public/yo.jpg'
            />
            <CardContent>
            <h1>Hola, soy Janice Garcia</h1>
            <h2>Acabé la universidad pero aun no estoy titulada</h2>
            <p>Tengo 24 años. No se que hacer con mi vida, busco empleo para poder subsistir y hacer valer el titulo :'v </p>
            <p>Correo de contacto: janice.a.garciasamperio24@gmail.com</p>
            <p></p>
            <p><small>Hasta aqui mi reporte joaquin</small></p>
            </CardContent>
            
        </CardActionArea>
    </Card>
    </div>
     
    </>
)

export default About;