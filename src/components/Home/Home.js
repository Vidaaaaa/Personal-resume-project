import React, {useState} from 'react';
import {Box} from "@mui/system"
import {Perosnal} from "../../Services/PersonalData"
import './Home.css';


export const Home = () => {
    const [PersonalData, SetPersonalData] = useState(Perosnal);
    return (
        <>
            <Box className='boxHome'>
                {/* Text*/}
                <div className="hHome">
                    {
                    PersonalData.map((items) => {
                        const {name, des} = items;
                        return (
                            <section>
                                <h1 className="h1Home">
                                    {name}</h1>
                                <h3 className="h3Home">
                                    {des}</h3>
                            </section>
                        );
                    })
                } </div>
            </Box>
        </>
    )
}
