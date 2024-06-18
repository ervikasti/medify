import { useState } from 'react';
import BookingForm from '../BookingForm/BookingForm';
import styles from './HospitalCard.module.css';

const HospitalCard = ({hospitalList}) => {

    console.log(hospitalList);

    const [bookingFormEnabled,setBookingFormEnabled] = useState(false);


    return(
        <>
            <div>{hospitalList.length} medical center avalilable in {hospitalList[0].City}</div>
            { hospitalList.map( (data)=> (
                <div>
                    <div key={data['Provider ID']}className={styles.container}>
                        <div><img src='/images/hospital_animated.svg' alt='logo'/></div>
                        <div className={styles.container_details}>
                            <h3>{data['Hospital Name']}</h3>
                            <h5>{data['City']},{data['State']}</h5>
                            <p>{data['Hospital Type']}</p>
                            <p>Free Consultation</p>
                            <div>Rating {data['Hospital overall rating']}</div>
                        </div>
                        <div>
                            <div>Status</div> 
                            <button onClick={()=>{setBookingFormEnabled(!bookingFormEnabled)}}>Book a free center visit</button>
                        </div>
                    </div>
                    { bookingFormEnabled && (<BookingForm></BookingForm>)}
                </div>
                ))
            }

           
        </>
        
        
    );
}

export {HospitalCard};