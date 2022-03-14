import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';


const ResidentInfo = ({result}) => {
    const [infos,setInfos]=useState({});
    
    useEffect(() => {  
        axios.get(`${result}`).then(res=>setInfos(res.data));
    }, [ result ])

    
    const status = (condition) =>{
        if(condition === "Alive"){
            return <div className='Status'> <div className='alive' ></div>{infos.status}</div>
        }else if(condition === "Dead"){
            return <div className='Status'><div className='dead' ></div> {infos.status}</div>
        }else if(condition ==="unknown"){
            return <div className='Status'> <div className='unknown' ></div> {infos.status}</div>
        }
    }

    
    return (
       
            <section className='card'>
                <img src={infos.image} className="img" alt='perfil'/>
                    {
                        status(infos.status)
                    }
                <section className='infoCard'>
                    <h3 className='Resident_inf'>{infos?.name}</h3>
                    <hr></hr>
                    <h5 className='Resident_inf'> {infos.origin?.name}</h5>
                    <p className='Resident_inf'><b>Episodes:</b><br></br> {infos.episode?.length}</p>
                </section>
            </section>
          
    );
};

export default ResidentInfo;