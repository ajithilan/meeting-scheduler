import { ConfirmationPage } from "./confirmationpage";
import { FiberDemo } from "./fiberdemo"
import { TimeDateInput } from "./timedateInput"
import { Timeselect } from "./timeselect";
import { DetailsInput } from "./userdetails";
import { createContext, useEffect, useState } from "react";

export const cardContext = createContext();

export const ScheduleCard = ()=>{
  const [ detailsPage, setDetailsPage ] = useState(false);
  const [ onschedule, setOnschedule ] = useState(false);
  const [onDateChange, setOnDateChange] = useState(false);
  const [onTimeSelect, setOnTimeSelect] = useState(false);
  const [selectedDateTime, setSelectedDateTime] = useState({
    date:'',
    startTime:'',
    endTime:''
  });
  const [timezone, setTimezone] = useState('America/New_York');
  const [name, setName] = useState('');

  const contextValues = {
    detailsPage,
    setDetailsPage,
    setOnschedule,
    onDateChange,
    setOnDateChange,
    onTimeSelect,
    setOnTimeSelect,
    selectedDateTime,
    setSelectedDateTime,
    timezone,
    setTimezone,
    name,
    setName
  }

  const handleBackEvent = ()=>{
    setDetailsPage(false);
  }

  useEffect(()=>{
    const cardScroll = document.querySelector('.card-scroll');
    cardScroll.style.height = detailsPage ? 'fit-content' : '100%';
    onschedule && document.querySelector('.card-scroll').classList.add('final');
  },[onschedule, detailsPage])

    return <div className="card">
      <cardContext.Provider value={contextValues}>
        <div className="card-scroll flex">
          {!onschedule && <FiberDemo/>}
          <section className="secondhalf">
            {
              !detailsPage ? (
              !onschedule ? <>
                <TimeDateInput/>
                { selectedDateTime.date && <Timeselect/>}
              </> : <ConfirmationPage/>
            ) : <DetailsInput handleBackEvent={handleBackEvent}/> }
          </section>
          <button className='cookie-setting'>Cookie settings</button>
        </div>
      </cardContext.Provider>
    </div>
}