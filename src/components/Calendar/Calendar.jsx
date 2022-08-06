import React, { useState } from 'react';
import {useSelector} from 'react-redux';

function Calendar(props) {
    const store = useSelector((store) => store);
    const trueMonth = ['Jan', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const [date, setDate] = useState(new Date());
    const [month, setMonth] = useState(new Date().getMonth());
    const prev = () =>{
        const prevMonth = new Date(date.getFullYear(), month - 1, 1).getMonth();
        setMonth(prevMonth)
    }
    const next = () => {
        const nextMonth = new Date(date.getFullYear(), month + 1, 1).getMonth();
        setMonth(nextMonth)
    }
    const renderCurrentMonthView = () => {
        //TODO
        //define last day of last month
        const lastDayOfLastMonth = new Date(date.getFullYear(), month, 0).getDay();
        // console.log('######lastDayOfLastMonth', lastDayOfLastMonth);
        //define first day of next month
        const lastDayOfCurrMonth = new Date(date.getFullYear(), month, 1).getDay();
        // console.log('######lastDayOfCurrMonth', lastDayOfCurrMonth);
        let nextMonthBeginDay = new Date(date.getFullYear(), month + 1, 1).getDay();
        //define if current month is 30 vs 31
        let lastDateOfCurrentMonth = new Date(date.getFullYear(), month + 1, 0).getDate();
        //define if   last  month is 30 vs 31
        let lastDateOfLastMonth = new Date(date.getFullYear(), month + 1, 0).getDate();
        // console.log('#####LASTDATEOFMONTH', lastDateOfLastMonth);

        const currDate = date.getDate();

        const firstOfCurrMonth = new Date(date.getFullYear(), month, 1).getDay();
        // console.log('######FIRSTDAYOFCURRMONTH', firstOfCurrMonth);


        let days = []
        // const prevDays = lastDateOfLastMonth - lastDayOfLastMonth;
        if(lastDayOfLastMonth !== 6){
            for(let i = lastDayOfLastMonth; i >= 0; i--){
                // if(i === 6) return 
                days.push(<div className='prev-date'>{lastDateOfLastMonth - i}</div>);
            }
        }
        for(let i = 1; i <= lastDateOfCurrentMonth; i++){
            if(i === currDate){
                days.push(<div className='curr-date today'>{i}</div>);
            }else {
                days.push(<div className='curr-date'>{i}</div>);
            }
        }
        if(lastDayOfCurrMonth !== 0){
            for(let i = 1; i <= 7 - nextMonthBeginDay; i++){
                days.push(<div className='next-date'>{i}</div>);
            }
        }
        return <>{days}</>;
    }

    return (
        <div className='container'>
            <div className='calendar'>
                <div className='month'>
                    <button className='prev' onClick={prev}>prev</button>
                    <h1>{trueMonth[month]}</h1>
                    {/* <p>{date.toDateString()}</p> */}
                    <button className='next' onClick={next}>next</button>
                </div>
                <div className="weekdays">
                    <div>Sun</div>
                    <div>Mon</div>
                    <div>Tue</div>
                    <div>Wed</div>
                    <div>Thu</div>
                    <div>Fri</div>
                    <div>Sat</div>
                </div>
                <div className="days">
                    {renderCurrentMonthView()}
                </div>
            </div>
        </div>
    );
}

export default Calendar;
