import { useContext, useRef } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { cardContext } from './schedulecardcomp';

export const DetailsInput = ({ handleBackEvent }) => {
  const { setName, setOnschedule, setDetailsPage } = useContext(cardContext);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const purpose = {
    'Myself': '🥕',
    '< 10 people': '👭🏽',
    '10-50 people': '🦄',
    '50+ people': '🦅'
  }
  const qualities = {
    'Leadership': '🏔️',
    'Consulting': '🦉',
    'Product Management': '🌞',
    'Design': '🎨',
    'Engineering': '💻',
    'Sales': '🎣',
    'Marketing': '💣',
    'Human Resources': '💎',
    'Education': '📚',
    'Something else': '❓'
  }

  const handleSchedule = ()=>{
    if(nameRef.current.value === '' || emailRef.current.value === ''){
      alert('Please enter Name/Email fields to continue')
    }else{
      setName(nameRef.current.value);
      setDetailsPage(false);
      setOnschedule(true);
    }
  }



  return <div className="userdetails-container">
      <section className='flex flex-col items-start gap-3'>
        <h4 className='font-extrabold text-[19px]'>Enter Details</h4>
        <label htmlFor="name" className='font-extrabold text-[13px]'>Name *</label>
        <input ref={nameRef} type="text" name='name' placeholder='John Doe' className='input-detail'/>
        <label htmlFor="email" className='font-extrabold text-[13px]'>Email *</label>
        <input ref={emailRef} type="email" name='email' placeholder='account@refero.design' className='input-detail'/>
        <button className='addguests-btn border-2 border-solid rounded-3xl border-slate-700
        px-3 py-1 text-[14px] font-normal'>Add Guests</button>
      </section>
      <section className="purpose-container flex flex-col items-start gap-3 py-4">
        <h4 className='font-extrabold text-[13px]'>I want Fibery to work for: *</h4>
        {
          Object.keys(purpose).map(key=>{
            return <div className='flex justify-center items-center gap-2' key={key}>
              <input type="checkbox" name={key} className='w-[19px] h-[19px]'/>
              <label htmlFor={key} className='text-[15px]'>{purpose[key]+key}</label>
            </div>
          })
        }
      </section>
      <section className="qualities-container flex flex-col items-start gap-3 py-4">
        <h4 className='font-extrabold text-[13px]'>You are more about *</h4>
        {
          Object.keys(qualities).map(key=>{
            return <div className='flex justify-center items-center gap-2' key={key}>
              <input type="checkbox" name={key} className='w-[19px] h-[19px]'/>
              <label htmlFor={key} className='text-[15px]'>{qualities[key]+key}</label>
            </div>
          })
        }
      </section>
      <section className='input-grp py-2 w-96'>
        <h6 className='font-extrabold text-[13px]'>Please, share anything that will help prepare for our meeting</h6>
        <textarea className='input-area'></textarea>
      </section>
      <section className='input-grp py-2 w-96'>
        <h6 className='font-extrabold text-[13px]'>Please, share with us the name of your Fibery workspace (if any)</h6>
        <input className='input-area'/>
      </section>
      <button className='schedule-btn mt-2' onClick={handleSchedule}>Schedule Event</button>
      <button className='absolute back-btn' onClick={handleBackEvent}><ArrowBackIcon sx={{fontSize:'28px'}}/></button>
    </div>
};