import { useContext, useEffect, useRef, useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { cardContext } from './schedulecardcomp';
import dayjs from 'dayjs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAsia } from '@fortawesome/free-solid-svg-icons/faGlobeAsia';
import { calendarStyling, mobileCalendarStyling } from '../styling/calendarStyling';

export const TimeDateInput = ()=>{
    const {
        setSelectedDateTime,
        setTimezone,
        ref992px
    } = useContext(cardContext);
    const [mobileStyle, setMobileStyle] = useState(false);
    var timeoutID = useRef();

    const handleDateChange = (e) => {
        const data = e.$d;
        const fullDay = dayjs(data).format('dddd');
        const fullMonth = dayjs(data).format('MMMM');
        const setDate = [fullDay, fullMonth,' ', data.getDate(), data.getFullYear()];
        setSelectedDateTime((prev)=>{
            const temp = {...prev};
            setDate.splice(1, 0, ', ');
            setDate.splice(5, 0, ', ');
            temp.date = setDate.join('')
            return temp
        });
    };

    const handleTimezone = (e)=>{
        setTimezone(e.target.value);
    }

    const handleStyle = (e)=>{
        clearTimeout(timeoutID.current);
        timeoutID.current = setTimeout(() => {
            const width = e.target.innerWidth;
            ref992px.current = width < 992;
            document.querySelector('.card-scroll').style.height = ref992px.current ? 'fit-content' : '100%';
            setMobileStyle(width < 481);
        }, 100);
    }

    window.onresize = (e)=>{ handleStyle(e) };

    useEffect(()=>{
        handleStyle({target: window})
    },[])


    return <div className="flex flex-col items-center time-date-input py-[30px] px-4">
        <div className='flex flex-col'>
            <h1 className="text-[18px] font-extrabold pl-3">Select a Date & Time</h1>
            <div className="calendar-container py-5">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateCalendar
                    sx={mobileStyle ? mobileCalendarStyling : calendarStyling}
                    disablePast={true}
                    onChange={handleDateChange}
                    />
                </LocalizationProvider>
                <section className='timezone'>
                    <h4 className='text-[15px] font-extrabold pb-1 pl-3'>Time zone</h4>
                    <section className='flex items-center gap-1 pl-5'>
                        <FontAwesomeIcon icon={faGlobeAsia}/>
                        <select
                        name="timezone"
                        className="text-[14px] text-[rgba(0,0,0,.9)] "
                        defaultValue={'EST - GMT-5 (New York)'}
                        onChange={handleTimezone}
                        >
                            <option value="America/New_York">EST - GMT-5 (New York)</option>
                            <option value="America/Los_Angeles">PST - GMT-8 (Los Angeles)</option>
                            <option value="Europe/London">GMT - GMT+0 (London)</option>
                            <option value="Europe/Paris">CET - GMT+1 (Paris)</option>
                            <option value="Asia/Tokyo">JST - GMT+9 (Tokyo)</option>
                            <option value="Australia/Sydney">AEDT - GMT+11 (Sydney)</option>
                            <option value="Canada/Mountain">MST - GMT-7 (Canada)</option>
                            <option value="Canada/Central">CST - GMT-6 (Canada)</option>
                            <option value="Canada/Eastern">EST - GMT-5 (Canada)</option>
                            <option value="Europe/Berlin">CET - GMT+1 (Berlin)</option>
                            <option value="Asia/Dubai">GST - GMT+4 (Dubai)</option>
                            <option value="Asia/Singapore">SGT - GMT+8 (Singapore)</option>
                        </select>
                    </section>
                </section>
            </div>
        </div>
    </div>
}