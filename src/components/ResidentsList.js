import React from 'react';
import ResidentInfo from './ResidentInfo';

const ResidentsList = ({characterPages}) => {
    return (
        <div className='containerCards'>
            {
                characterPages?.map((result) =>(
                    
                        <div  key={result}>
                            <ResidentInfo result={result} />
                        </div>
                ))
            }
        </div>
    );
};


export default ResidentsList;