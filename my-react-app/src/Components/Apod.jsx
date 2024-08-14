import { useState, useEffect } from 'react';
import Progress from './Progress.jsx';
import './APOD.css'

const DATA_URL = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';


const Apod = () => {
    const [apod, setApod] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchApod = async () => {
            try {
                const response = await fetch(DATA_URL);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setApod(data);
            } catch (err) {
                setError(err);
            } 
        };

        fetchApod();
    }, []);


    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className='container'>
            <h1>Foto Astronomica del dia</h1>
            {apod && (
                <div>
                    <h2>{apod.title}</h2>
                    <p>{apod.date}</p>
                    <img src={apod.url} alt={apod.title} style={{ maxWidth: '100%', height: 'auto' }} />
                    <p>{apod.explanation}</p>
                </div>
            )}
        </div>
    );
};

export default Apod;