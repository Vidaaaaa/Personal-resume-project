import React from 'react';
import {Link, Box} from "@mui/material"
import {Home, About, Education, Skills} from "./../Takecomponents";
import "./Header.css"

export const Header = () => {
        return (<>
            <Box className='bodyHeader'>
            <Link href='#' className='linkHeader'>Home</Link>
            <Link href='#About' className='linkHeader'>About</Link>
            <Link href='#Education' className='linkHeader'>Education</Link>
            <Link href='#Skills' className='linkHeader'>Skills</Link>
            </Box>   
    </>
    )
}
