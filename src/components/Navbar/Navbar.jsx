import styles from './Navbar.module.css';

const Navbar = () => {
    const company_name = 'Medify';
    let btnArray = ['Find Doctors', 'Hospitals', 'Medicines', 'Surgeries','Software for Provider', 'facilities']

    return(
        <nav className={styles.navbar}>
            <div className={styles.navbar_logo}><img src='/images/medify_logo.svg' alt='logo'/><span>{company_name}</span></div>
            <div className={styles.navbar_section}>
                {btnArray.map((val)=>(
                    <li>{val}</li>
                ))}

                <button>My Bookings</button>
            </div>
            
        </nav>
    )
}

export {Navbar}