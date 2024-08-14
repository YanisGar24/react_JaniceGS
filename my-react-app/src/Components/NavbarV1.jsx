import './Navbar.css';


const Navbar = () => {

    const aStyles = {
        color: 'white',
        fontSize: '1.3rem',
        textDecoration: 'none',
    }

    return (
        <div className='navbar--container'>
            <div className='navbar--title'>
                <h1>Navbar</h1>
            </div>
            <div className='navbar--links'>
                <div className='navbar--link'>
                    <a href='/' styles={aStyles} >Home</a>
                </div>
                <div className='navbar--link'>
                    <a href='/' >About</a>
                </div>
                <div className='navbar--link'>
                    <a
                        href="/"
                        style={{ 
                            color: 'white',
                            fontSize: '1.3rem',
                            textDecoration: 'none',
                        }}
                    >
                        Astros
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Navbar
