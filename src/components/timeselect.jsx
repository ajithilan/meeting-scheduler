import { useContext, useRef } from "react"
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
            nextbtn.className = `next ${time} bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded`;
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

    return <div className="timeselect-container">
        <h4 className="display-date pb-5">{displayDate}</h4>
        <div className="time-container" onClick={handlebtns}>
            <div className="time-section">
            {
                time.map(t=>{
                    return <div className={'flex timebtn-container time-'+t} data-time={'time-'+t} key={t}>
                        <button data-time={'time-'+t} className="time-select">{t}</button>
                    </div>
                })
            }
            </div>
        </div>
    </div>
}