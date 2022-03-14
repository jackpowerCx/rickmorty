import axios from 'axios';
import { useState,useEffect } from 'react';



const SearchBox = ({setLocation}) => {
    const [locationName, setLocationName]= useState("");
    const [ listLocationsName, setListLocationsName ] = useState([])
    const[toggles, setToggles] =useState(false);

    const search =(locationId)=>{ 
        if(locationId){
            axios.get(`https://rickandmortyapi.com/api/location/${locationId}`)
            .then(res =>{
             setLocation(res.data);
            })
        }
        
    }


    const searchID =()=>{
        axios.get(`https://rickandmortyapi.com/api/location/${parseInt(locationName) }`).then(res =>{setLocation(res.data);})
    }


    useEffect(() => {
        if(locationName){
            axios.get(`https://rickandmortyapi.com/api/location/?name=${locationName}`)
                .then(res => setListLocationsName(res.data.results))
        }else{
            setLocationName("")
        }
    }, [ locationName ]);

    const searchViews =(listLocationsName)=>{
        if(locationName !==''){
           return listLocationsName.map(location => <button className='buttonSearch' onClick={() => {search(location.id);setListLocationsName([])}} key={location.id} >{location.name}</button>)
        }
    }
    return (
   
        <div >
        <section className='seachBlock'>
          <input type="text" className='input' onChange={e =>setLocationName(e.target.value)}  placeholder='Type a location name or id' value={locationName} />
          <button className='button' onClick={ searchID}><b>Search</b></button>
        </section>
          <section className='sectionSearch'>
          { 
            searchViews(listLocationsName)
          }
          </section>
         
        </div>
       
    );
};

export default SearchBox;