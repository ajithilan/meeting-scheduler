import { ConfirmationPage } from "./confirmationpage";
import { FiberDemo } from "./fiberdemo"
import { TimeDateInput } from "./timedateInput"
import { Timeselect } from "./timeselect";
import { DetailsInput } from "./userdetails";
import { createContext, useEffect, useRef, useState } from "react";

export const cardContext = createContext();

export const ScheduleCard = ()=>{
  const [ detailsPage, setDetailsPage ] = useState(false);
  const [ onschedule, setOnschedule ] = useState(false);
  const [onDateChange, setOnDateChange] = useState(false);
  const [selectedDateTime, setSelectedDateTime] = useState({
    date:'',
    startTime:'',
    endTime:''
  });
  const [timezone, setTimezone] = useState('America/New_York');
  const [name, setName] = useState('');
  const ref992px = useRef(window.innerWidth<'992px');

  const contextValues = {
    detailsPage,
    setDetailsPage,
    setOnschedule,
    onDateChange,
    setOnDateChange,
    selectedDateTime,
    setSelectedDateTime,
    timezone,
    setTimezone,
    name,
    setName,
    ref992px
  }

  const handleBackEvent = ()=>{
    setDetailsPage(false);
  }

  useEffect(()=>{
    const cardScroll = document.querySelector('.card-scroll');
    cardScroll.style.height = detailsPage ? 'fit-content' : '100%';
    onschedule && document.querySelector('.card-scroll').classList.add('final');
    (detailsPage || onschedule) && (
      document.querySelector('.card').style.scrollBehavior = 'smooth',
      document.querySelector('.card').scrollTo(0, 0)
    )
  },[onschedule, detailsPage])

    return <div className="card">
      <cardContext.Provider value={contextValues}>
        <div className={"card-scroll flex " + (ref992px.current ? 'h-fit' : 'h-full')}>
          {!onschedule && <FiberDemo/>}
          <section className="secondhalf">
            {
              !detailsPage ? (
              !onschedule ? <>
                <TimeDateInput/>
                { selectedDateTime.date && <Timeselect/> }
              </> : <ConfirmationPage/>
            ) : <DetailsInput handleBackEvent={handleBackEvent}/> }
          </section>
          <button className='cookie-setting'>Cookie settings</button>
        </div>
      </cardContext.Provider>
    </div>
}