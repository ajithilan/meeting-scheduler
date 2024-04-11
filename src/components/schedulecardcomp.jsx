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
  const [ onDateChange, setOnDateChange ] = useState(false);
  const [ selectedDateTime, setSelectedDateTime ] = useState({
    date:'',
    startTime:'',
    endTime:''
  });
  const [ timezone, setTimezone ] = useState('America/New_York');
  const [ name, setName ] = useState('');
  const [mobileStyle, setMobileStyle] = useState(false);
  const timeoutID = useRef();

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
    mobileStyle
  }

  const handleBackEvent = ()=>{
    setDetailsPage(false);
  }

  useEffect(()=>{
    const cardScroll = document.querySelector('.card-scroll');
    if(detailsPage) cardScroll.style.height = 'fit-content';
    onschedule && document.querySelector('.card-scroll').classList.add('final');
    (detailsPage || onschedule) && (
      document.querySelector('.card').style.scrollBehavior = 'smooth',
      document.querySelector('.card').scrollTo(0, 0)
    )
  },[onschedule, detailsPage])

  const handleStyle = (e)=>{
    clearTimeout(timeoutID.current);
    timeoutID.current = setTimeout(() => {
        const width = e.target.innerWidth;
        if(!detailsPage){
            document.querySelector('.card-scroll').style.height = width < 992 ? 'fit-content' : '100%'
        };
        setMobileStyle(width < 481);
    }, 100);
  }

  window.onresize = (e)=>{ handleStyle(e) };

  useEffect(()=>{
      handleStyle({target: window})
  },[])
  

    return <div className="card flex min-w-[580px] h-[600px] bg-white rounded-lg overflow-y-scroll">
      <cardContext.Provider value={contextValues}>
        <div className="card-scroll flex relative min-h-full">
          {!onschedule && <FiberDemo/>}
          <section className="secondhalf flex flex-auto min-w-[570px]">
            {
              !detailsPage ? (
              !onschedule ? <>
                <TimeDateInput/>
                { selectedDateTime.date && <Timeselect/> }
              </> : <ConfirmationPage/>
            ) : <DetailsInput handleBackEvent={handleBackEvent}/> }
          </section>
          <button
            className='cookie-setting absolute left-[30px] bottom-5 w-fit h-fit text-sm font-medium text-[#1c90dd]'
          >
            Cookie settings
          </button>
        </div>
      </cardContext.Provider>
    </div>
}