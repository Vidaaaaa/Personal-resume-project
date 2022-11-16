import React from 'react';
import {Card, CardContent, Typography, Link} from '@mui/material'
import {Circle, School, HistoryEdu} from '@mui/icons-material';
import './Education.css'

export const Education = () => {

    var desc = "Academic field of computer network engineering in the university University of Sistan and Baluchestan"

    return (
        <>
            <Card className="bodyEducation">
                <p id="Education"></p>
                <h1 className="h1Education">Education</h1>
                <CardContent className="contantEducation">
                    <h3>University</h3>
                    <br></br>
                    <h4>
                        <HistoryEdu className="iconEducation"/>
                        Information Technology Engineering.
                        <Circle style={
                            {fontSize: "small"}
                        }/>October 2019
                    </h4>
                    <br></br>
                    <Typography className='paragarphEducation'>
                        {desc} </Typography>
                    <br></br>
                    <Link href="https://www.usb.ac.ir/en/" target="_blank">
                        <School className="iconEducation"/>
                        My College
                    </Link>
                </CardContent>
            </Card>
        </>
    )
}
