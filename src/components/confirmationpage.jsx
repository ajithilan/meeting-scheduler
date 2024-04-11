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

  return <div className="confirmation-container w-full flex justify-center items-center overflow-hidden">
    <div className="center w-[430px] h-full flex flex-col items-center py-5">
      <div className="image-container flex flex-col justify-center pt-[10px] pb-5">
        <img
          src={profilecard}
          alt="user logo"
          width={60}
          height={60}
          className='rounded-full'
        />
      </div>
      <h2 className='flex justify-center items-center gap-2 text-[22px] font-extrabold pb-2'>
        <FontAwesomeIcon icon={faCircleCheck} style={{color:'green', fontSize:'18px'}}/>
        <span>You are scheduled</span>
      </h2>
      <h4 className=' text-[14px] text-[rgba(0,0,0,.8)]'>A calendar invitation has been sent to your email address.</h4>
      <div
        className='detail-confirmation grid gap-2.5 w-full border-2 border-[rgba(0,0,0,.2)]
        rounded-lg px-5 py-[18px] mb-[30px]'
      >
        <h2 className='text-[18px] font-extrabold p-0'>Fibery Demo</h2>
        <h4 className='flex justify-start items-center gap-2.5 text-[rgba(0,0,0,.6)]'>
          <FontAwesomeIcon icon={faUser}/>
          <span className='text-[14px] font-bold'>{name}</span>
        </h4>
        <h4 className='flex justify-start items-center gap-2.5 text-[rgba(0,0,0,.6)]'>
          <FontAwesomeIcon icon={faCalendar}/>
          <span className='text-[14px] font-bold'>{eventTime()}</span>
        </h4>
        <h4 className='flex justify-start items-center gap-2.5 text-[rgba(0,0,0,.6)]'>
          <FontAwesomeIcon icon={faGlobeAsia}/>
          <span className='text-[14px] font-bold'>{timezone}</span>
        </h4>
        <h4 className='flex justify-start items-center gap-2.5 text-[rgba(0,0,0,.6)]'>
          <FontAwesomeIcon icon={faVideo}/>
          <span className='text-[14px] font-bold'>Web conferencing details to follow.</span>
        </h4>
      </div>
      <div className='promo flex flex-col gap-1 w-full border-t-2 border-t-[rgba(0,0,0,.2)] pt-5 pb-4'>
        <span className='font-extrabold text-[12.1px]'>Schedule  your own meetings with Calendly for free</span>
        <span className='text-[12px]'>Elimintate the back-and-forth emails for finding time.</span>
      </div>
      <div className='btn-grp flex gap-5'>
        <button
          className='sign-up flex justify-center items-center flex-grow border-2 border-[rgba(0,0,0,.6)] rounded-[60px]
          px-[30px] py-2 whitespace-nowrap text-xs font-medium bg-none gap-1'
        >
          <Google sx={iconStyle}/>
          Sign up with Google
        </button>
        <button
          className='sign-up flex justify-center items-center border-2 border-[rgba(0,0,0,.6)] rounded-[60px]
          px-[30px] py-2 whitespace-nowrap text-xs font-medium bg-none gap-1'
        >
          <Microsoft sx={iconStyle}/>
          Sign up with Microsoft
        </button>
      </div>
      <button className='work-email text-[12px] font-medium text-[#1c90dd] p-5'>Sign up with work email</button>
    </div>
  </div>
};