import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';
import ResidentsList from './ResidentsList';
import image2 from '../images/image2.png';
import SearchBox from './SearchBox';
const LocationInfo = () => {
    const [location, setLocation] = useState([]);
    let ramdos = Math.floor(Math.random() *126)+ 1;
    const[page,setPage]=useState(1);
    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/location/${ramdos}`).then(res=>setLocation(res.data));
    }, [1])

      const pageCharacters = 7;
      const indexLast = page * pageCharacters;
      const indexFirst= indexLast - pageCharacters;
      const characterPages =  location.residents?.slice(indexFirst,indexLast);
      const maxPages= Math.ceil( location.residents?.length /pageCharacters) ; 

      const next= ">>";
      const Last= "<<";
      let buttonPages = [];
 
      for(let i=1 ;i<=maxPages;i++){
        buttonPages.push(i);
      }
    return (
        <div className='main'>
            <section className='caja c1'>
                    <header className='header'>
                        <img src={ image2 } className='titleImg' alt="" />
                        <SearchBox setLocation={setLocation}/>
                    </header> 

            </section>

            <section className='caja c2'>    
                    <section className='container'>
                        <h2>{location.name}</h2>
                        <ul>
                            <li className='li'><b>Type: </b> {location.type}</li>
                            <li className='li'><b>dimension: </b> {location.dimension}</li>
                            <li className='li'><b>Population: </b>{location.residents?.length}</li>
                        </ul>
                    </section>
                            
  

            </section>

            <section className='caja'>
                <section className='c3'>
                    <ResidentsList characterPages={characterPages}/>
                </section>
            </section>
                

            <section className='caja c4'>

                <section className='sectionPages'>
                    {
                        page!==1 &&(<button className='button buttonLast' onClick={()=>setPage(page -1)}><b> {Last} </b></button>)
                    }
                    {
                        buttonPages.map(number =><button className='buttonNumber' onClick={()=>setPage(number)} key={number}><b>{number}</b></button>)
                    }
                    {
                        
                        page!== maxPages &&(<button className='button buttonNext' onClick={()=>setPage(page +1)}><b> {next} </b></button>)
                    }
                </section> 

            </section>





        
        </div>
    );
};

export default LocationInfo;