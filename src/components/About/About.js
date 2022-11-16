import React, {useState} from 'react';
import {
    Box,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Rating,
    Typography
} from "@mui/material"
import {Public, Face, LocationCity, Email} from '@mui/icons-material';
import {MyAbout} from '../../Services/PersonalData';
import "./About.css"


export const About = () => {
    const [MyAboutData, SSetMyAboutData] = useState(MyAbout)
    return (
        <>
            <Card className="cardAbout">
                <p id="About"></p>
                <CardMedia>
                    <img src="/images/Profile.jpg" className="imgAbout"/>
                </CardMedia>
                <CardContent className="contantAbout">
                    <div>{
                        MyAboutData.map((items) => {
                            const {Aboutdes, Aboutintro} = items;
                            return (
                                <div>
                                    <h1 className="h1About">
                                        {Aboutintro} </h1>
                                    <Typography className="paragraphAbout">
                                        {Aboutdes} </Typography>
                                </div>
                            );
                        })
                    }</div>
                    <div className="ratingAbout">
                        <Typography>
                            How well do you know me?
                        </Typography>
                        <Rating/>

                        <Typography>
                            Would you like to join me on this journey?
                        </Typography>
                        <Rating/>
                    </div>
                    <div className="info">
                        {
                        MyAboutData.map((items) => {
                            const {
                                Aboutcontact,
                                Aboutcontactname,
                                Aboutcontactcountry,
                                Aboutcontactcity,
                                Aboutcontactgmail
                            } = items;
                            return (
                                <div>
                                    <h4 className="h4">
                                        {Aboutcontact} </h4>
                                    <Typography className="paragraph">
                                        <Face className="iconAbout"/> {Aboutcontactname} </Typography>
                                    <Typography className="paragraph">
                                        <Public className="iconAbout"/> {Aboutcontactcountry} </Typography>
                                    <Typography className="paragraph">
                                        <LocationCity className="iconAbout"/>{Aboutcontactcity} </Typography>
                                    <Typography className="paragraph">
                                        <Email className="iconAbout"/> {Aboutcontactgmail} </Typography>
                                </div>
                            );
                        })
                    }</div>
                </CardContent>
            </Card>
        </>
    )
}
