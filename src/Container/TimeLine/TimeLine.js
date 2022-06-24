import React from 'react';
import TimeLine from "../../images/time_line.png";
import plane1 from "../../images/plane1.png";
import { FaArrowDown } from 'react-icons/fa';


const Timeline = () => {
    const timeLineDetails = [
        {
            flightName: 'Launching  Q2 2022',
            flightDsc: 'LAUNCH AEROPUPS - AIRBORNE'
        },
        {
            flightName: 'Q3/Q4 2022',
            flightDsc: 'ACQUIRE AIRCRAFT AND PLACE INTO LEASE.'
        },
        {
            flightName: 'Q1 2023',
            flightDsc: 'BEGIN ACCESS FLIGHTS. CONTINUE PLACING AIRCRAFT IN IDEAL SITUATIONS, REFLECT AND FIX ALL PROCESSES TO FLOW SEAMLESLY.'
        },
        {
            flightName: 'Q2/Q3 2023',
            flightDsc: 'CONCLUDE ALL ACCESS FLIGHTS AND MEET AND GREETS AT AIRSHOWS, PREPARE V2/V3'
        },
        {
            flightName: 'Q4 2023',
            flightDsc: 'LAUNCH V2'
        },
        {
            flightName: 'Q1 2024',
            flightDsc: 'LAUNCH V3'
        },
        {
            flightName: 'Q2 2024',
            flightDsc: 'LAUNCH NON PROFIT'
        },
        {
            flightName: 'Q3/Q4 2024',
            flightDsc: 'BUILD AND NURTURE NON PROFIT'
        },
        {
            flightName: 'Q1 2025',
            flightDsc: 'LAUNCH FINAL VERSION'
        },
        {
            flightName: 'Q2 2025',
            flightDsc: 'AQUIRE AIRCRAFT AND PLACE INTO LEASE'
        },
    ]


    return (
        <>

        <div className="time_line d-none d-md-block">
            <img src={TimeLine} alt={'timeline_img'} />
        </div>

        <div className={'time_line_mob_view .d-block .d-md-none'}>
            <h4 className={'mb-4'}>aEROpUpS OFFICIaL FLIGHT pLaN</h4>

            <div className={'container'}>
                <div className={'row'}>
                    {
                        timeLineDetails.map((detail) => (
                            <div className={'col-12 flight_col'}>
                                <img src={plane1} alt={'plane1'} />
                                <h5>{detail.flightName}</h5>
                                <p>{detail.flightDsc}</p>
                                <FaArrowDown />
                            </div>
                        ))
                    }
                    <div className={'col-12 flight_col'}>
                        <img src={plane1} alt={'plane1'} />
                        <h5>Q3 2025-FOrEVER</h5>
                        <p>TEND TO THE FLEET, MANAGE AND GROW AEROPUPS BRAND AND CULTIVATE VALUE WITHIN OUR COMMUNITY</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};
export default Timeline;