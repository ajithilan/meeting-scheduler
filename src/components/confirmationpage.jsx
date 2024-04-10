import profilecard from '../assets/profilecard.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faUser } from '@fortawesome/free-regular-svg-icons'
import { faGlobeAsia, faVideo, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { Google, Microsoft } from '@mui/icons-material';
import { useContext } from 'react';
import { cardContext } from './schedulecardcomp';

export const ConfirmationPage = () => {
  const {
    name,
    selectedDateTime,
    timezone
  } = useContext(cardContext);
  const iconStyle = { fontSize: '18px' }

  const eventTime = ()=>{
    return `${selectedDateTime.startTime} - ${selectedDateTime.endTime}, ${selectedDateTime.date}`
  }

  return <div className="confirmation-container">
    <div className="center">
      <div className="image-container">
        <img
          src={profilecard}
          alt="user logo"
          width={60}
          height={60}
          className='rounded-full'
        />
      </div>
      <h2 className='flex justify-center items-center gap-2 text-[22px] pb-2'>
        <FontAwesomeIcon icon={faCircleCheck} style={{color:'green', fontSize:'18px'}}/>
        <span>You are scheduled</span>
      </h2>
      <h4 className=' text-[14px] text-[rgba(0,0,0,.8)]'>A calendar invitation has been sent to your email address.</h4>
      <div className='detail-confirmation'>
        <h2 className='text-[18px]'>Fibery Demo</h2>
        <h4><FontAwesomeIcon icon={faUser}/><span className='text-[14px] font-bold text-[rgba(0,0,0,.6)]'>{name}</span></h4>
        <h4><FontAwesomeIcon icon={faCalendar}/><span className='text-[14px] font-bold text-[rgba(0,0,0,.6)]'>{eventTime()}</span></h4>
        <h4><FontAwesomeIcon icon={faGlobeAsia}/><span className='text-[14px] font-bold text-[rgba(0,0,0,.6)]'>{timezone}</span></h4>
        <h4><FontAwesomeIcon icon={faVideo}/><span className='text-[14px] font-bold text-[rgba(0,0,0,.6)]'>Web conferencing details to follow.</span></h4>
      </div>
      <div className='promo'>
        <span className='font-extrabold text-[12.1px]'>Schedule  your own meetings with Calendly for free</span>
        <span className='text-[12px]'>Elimintate the back-and-forth emails for finding time.</span>
      </div>
      <div className='btn-grp'>
        <button className='sign-up'><Google sx={iconStyle}/>Sign up with Google</button>
        <button className='sign-up'><Microsoft sx={iconStyle}/>Sign up with Microsoft</button>
      </div>
      <button className='work-email text-[12px]'>Sign up with work email</button>
    </div>
  </div>
};