import fiberyimage from '../assets/fiberyimage.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faCalendar } from '@fortawesome/free-regular-svg-icons'
import { faGlobeAsia } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { cardContext } from './schedulecardcomp'

export const FiberDemo = ()=>{
    const {
        detailsPage,
        selectedDateTime,
        timezone
    } = useContext(cardContext);

    return <div className="demo-component initial">
        <div className="logo-container">
            <img src={fiberyimage} alt="fiberylogo" width={150} className='fibery-image object-contain'/>
        </div>
        <div className="details-container">
            <section className='details'>
                <h3>Fibery Demo</h3>
                <section className="details-icons">
                    <span><FontAwesomeIcon className='icon-sizing' icon={faClock} size='lg'/><span className='pl-2'>30 min</span></span>  
                    {
                        detailsPage && <>
                            <span className='flex justify-center items-center'><FontAwesomeIcon className='icon-sizing' icon={faCalendar} size='lg'/><span className='pl-2'>{`${selectedDateTime.startTime} - ${selectedDateTime.endTime}, ${selectedDateTime.date}`}</span></span>
                            <span><FontAwesomeIcon className='icon-sizing' icon={faGlobeAsia} size='lg'/><span className='pl-2'>{timezone}</span></span>
                        </>
                    }
                </section>
                <p>
                    Book a meeting with our Fibery team. Talk to a real person about
                    how to get your processes set up with us &#129412; or not &#128169;
                </p>
            </section>
        </div>
    </div>
}