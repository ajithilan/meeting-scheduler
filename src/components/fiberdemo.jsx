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

    return <div className="demo-component initial min-w-[180px] max-w-[330px] h-auto border-r-[1px]">
        <div className="logo-container flex justify-center h-[180px] p-5 border-b-2">
            <img src={fiberyimage} alt="fiberylogo" width={150} className='fibery-image object-contain'/>
        </div>
        <div className="details-container px-7 py-[18px] font-medium">
            <section className='details flex flex-col justify-between gap-4'>
                <h3 className='text-[28px] font-bold'>Fibery Demo</h3>
                <section className="details-icons flex flex-col items-start gap-2.5 text-[rgba(0,0,0,.6)]">
                    <span>
                        <FontAwesomeIcon className='icon-sizing' icon={faClock} size='lg'/>
                        <span className='pl-2 text-base font-bold'>30 min</span>
                    </span>  
                    {
                        detailsPage && <>
                            <span className='flex justify-center items-center'>
                                <FontAwesomeIcon className='icon-sizing' icon={faCalendar} size='lg'/>
                                <span className='pl-2 text-base font-bold'>
                                    {`${selectedDateTime.startTime} - ${selectedDateTime.endTime}, ${selectedDateTime.date}`}
                                </span>
                            </span>
                            <span>
                                <FontAwesomeIcon className='icon-sizing' icon={faGlobeAsia} size='lg'/>
                                <span className='pl-2 text-base font-bold'>{timezone}</span>
                            </span>
                        </>
                    }
                </section>
                <p className='text-base'>
                    Book a meeting with our Fibery team. Talk to a real person about
                    how to get your processes set up with us &#129412; or not &#128169;
                </p>
            </section>
        </div>
    </div>
}