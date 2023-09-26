import '../Styles/DayCare.scss'
import { GiJumpingDog, GiDogBowl, GiDogHouse } from 'react-icons/gi'

function DayCare() {
return(
    <div className="main">
        <h1 className="heading1">Day Care in Happy Dog</h1>
        <p className='care'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eaque hic ullam necessitatibus voluptatem itaque autem dolorum molestiae molestias? Velit dignissimos sed dolorem! Harum facere incidunt eaque delectus sit ad.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eaque hic ullam necessitatibus voluptatem itaque autem dolorum molestiae molestias? Velit dignissimos sed dolorem! Harum facere incidunt eaque delectus sit ad.orem ipsum dolor sit amet consectetur.
        </p>


        <div className='icons-dog'>
            <div className='service'>
                <GiDogHouse size={'5rem'}/>
                <span>Cozy Bed</span>
            </div>
            <div className='service'>
                <GiJumpingDog size={'5rem'}/>
                <span>Best exercises</span>
            </div>
            <div className='service'>
                <GiDogBowl size={'5rem'}/>
            <span>Healthy Food</span>
            </div>
        
        </div>
    </div>
)
}




export default DayCare