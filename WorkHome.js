import React, { useState } from 'react'
import "./Work.css";

import { MdCancel } from "react-icons/md";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import img from "../pix/img2.jpg";
import img1 from "../pix/img3.jpg";
import img2 from "../pix/img4.jpg";
import img3 from "../pix/img5.jpg";


import moment from "moment"


const WorkHome = () => {
    const [data, setData] = useState([
        {
            id:1,
            name: "Taibat",
            quote: "This course ain't no child's play, all thanks to Mr. Peter for taken it one step at a time and patiently explaining terms and correcting errors with love.",
            time: Date.now(),
            avatar: img,
        },
        {id:2,
            name: "Jay",
            quote: "Naira free fall in the world market has shrinked Nigeria's economy such that povert rate kept increasing geometrically.",
            time: Date.now(),
            avatar: img1,
        },
        {
            id:3,
            name: "Peter",
            quote: "The Gov. of Rivers' State, Gov. Wike and his Lagos State counterpat, Gov. Babajide Sanwoolu fighting for decentrilization of value added tax.",
            time: Date.now(),
            avatar: img2,
        },
        {
            id:4,
            name: "Tosin",
            quote: "The significancy of a particular event is determined by the insignificancy of other events been override by the event stated.",
            time: Date.now(),
            avatar: img3,
        },
    ]);

    return (
        <div className="container">
            <div className="container_wrapper">
                {data.map((props) => {
                    return (
                        <div className="container_card">
                            <div className="container_cardRow">
                                <div className="container_cardRowCancel">
                                    <MdCancel />
                                    </div>
                                    <img className="container_cardRowAvatar" alt="img" src={props.avatar}
                                        />
                                    </div>
                                    
                             <div className="container_cardQuotes">                                    
                                    <ImQuotesLeft/>                                
                                    <div> {props.quote} </div>
                                    <div>
                                        <ImQuotesRight />
                                        </div>
                                        </div> 
                                        <div className="container_cardName">{props.name}</div>
                                        <div className="container_cardTime">
                                            {""}
                                            {moment(props.time).fromNow()}
                                            </div>
                                            </div>
                    );
                })}
            </div>            
        </div>
    );
};

export default WorkHome
