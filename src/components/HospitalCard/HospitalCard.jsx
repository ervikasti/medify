import styles from './HospitalCard.module.css';

const HospitalCard = ({hospitalList}) => {

    console.log(hospitalList)


    return(
        <>
            { hospitalList.map( (data)=> (
                <div className={styles.container}>
                    <div>image</div>
                    <div>
                        <h1>{data['Hospital Name']}</h1>
                        <h5>{data['City']},{data['State']}</h5>
                        <p>{data['Hospital Type']}</p>
                        <p>Free Consultation</p>
                        <div>Rating {data['Hospital overall rating']}</div>
                    </div>
                    <div>
                        <text>status</text>
                        <button>Book a free center visit</button>
                    </div>
                </div>
                ))
            }
        </>
        
        
    );
}

export {HospitalCard};