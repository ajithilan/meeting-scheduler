import { useContext, useRef, useEffect } from "react"
import { cardContext } from "./schedulecardcomp"

export const Timeselect = ()=>{
    const {
        selectedDateTime,
        setSelectedDateTime,
        setDetailsPage
    } = useContext(cardContext);
    const timeRef = useRef('');
    const time = ['09:00','09:30','10:00','10:30','11:00','11:30','12:00','12:30','01:00','01:30','02:00','02:30','03:00','03:30','04:00','04:30','05:00','05:30']

    var displayDate = selectedDateTime.date.split(',');
    displayDate.pop();
    displayDate = displayDate.join(',');
    document.querySelector('.demo-component')?.classList.remove('initial');

    const handletime = ()=>{
        setSelectedDateTime(prev=>{
            const temp = {...prev};
            temp.startTime = timeRef.current;
            const [hours, minutes] = timeRef.current.split(':');
            const date = new Date();
            date.setHours(parseInt(hours, 10));
            date.setMinutes(parseInt(minutes, 10));
            date.setMinutes(date.getMinutes() + 30);
            const newHours = String(date.getHours()).padStart(2, '0');
            const newMinutes = String(date.getMinutes()).padStart(2, '0');
            temp.endTime = `${newHours}:${newMinutes}`;
            return temp;
        });
        setDetailsPage(true);
    }

    const handlebtns = (e)=>{
        function addBtn(){
            const targetBtn = e.target;
            const time = targetBtn.dataset.time;
            const nextbtn = document.createElement('button');
            nextbtn.className = `next ${time} flex-grow bg-blue-500 hover:bg-blue-600 text-white
            font-bold p-3.5 rounded border border-[rgb(59,130,246)] hover:border-[rgb(37,99,235)]`;
            nextbtn.dataset.time = time;
            nextbtn.textContent = 'Next';
            nextbtn.onclick = handletime;
            const prevActive = document.querySelector('button.time-select.active');
            prevActive?.classList.remove('active');
            prevActive?.removeAttribute('disabled');
            document.querySelector('button.next')?.remove();
            targetBtn?.classList.add('active');
            targetBtn?.setAttribute('disabled', true);
            document.querySelector(`div[data-time="${time}"]`).append(nextbtn);
            timeRef.current = targetBtn.textContent;
        }
        e.target.tagName === 'BUTTON' && addBtn();
    }

    useEffect(()=>{
        document.querySelector('.timeselect-container').scrollIntoView({ behavior: "smooth" });
    },[])

    return <div className="timeselect-container flex flex-col flex-grow min-w-[200px] pt-[74px] pr-[3px]">
        <h4 className="display-date pb-5">{displayDate}</h4>
        <div className="time-container overflow-y-scroll py-4" onClick={handlebtns}>
            <div className="time-section flex flex-col max-w-[80%] gap-2.5">
            {
                time.map(t=>{
                    return <div className={'timebtn-container flex gap-1.5 time-'+t} data-time={'time-'+t} key={t}>
                        <button
                        data-time={'time-'+t}
                        className="time-select flex-grow border border-[rgba(40,94,180,0.6)]
                        rounded-[4px] p-3.5 text-[rgb(59,130,246)] font-bold transition duration-100
                        hover:bg-[rgb(59,130,246)] hover:border-transparent hover:text-white"
                        >
                        {t}
                        </button>
                    </div>
                })
            }
            </div>
        </div>
    </div>
}