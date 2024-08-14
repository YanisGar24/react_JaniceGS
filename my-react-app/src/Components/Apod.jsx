import { useState, useEffect } from 'react';
import Progress from './Progress.jsx';
import './APOD.css'

const DATA_URL = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';

{/* Funcion donde desplegar la info de la imagen */}
const Apod = ({date, hdurl, explanation}) => {
    return (
        <div className='Apod--container'>
            <h2 className='Apod--date'>{date}</h2>
            <img src={hdurl} />
            <p className='Apod--explanation'>{explanation}</p>
        </div>
    )
}


const Apods = () => {
    const [apods, setApods] = useState([])

    useEffect(() => {
        fetchApods();
    }, []);

    const fetchApods = () => {
        fetch(DATA_URL)
            .then(res => res.json())
            .then(data => setApods(data.hdurl))
            .catch(err => console.error(err))
    }

    console.log(apods);
    {/*     return (
        <>
            <h2>APOD</h2>
            {
                apods.length !== 0 
                    ? 
                    apods.map((apod, index) => (
                        <Apod key={index} {...apod} />
                    ))
                    :
                    <Progress/>
            }
            
        </>
    )
*/}

}

{/* 
const Apod = () => (
    <>
        <h1>Estamos en APOD</h1>
        <h2>Esto esta muy complicado </h2>
        <p><small>Help</small></p>
    </>
)
*/}

export default Apods;