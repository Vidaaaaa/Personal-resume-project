import React, {useState} from 'react';
import {
    Card,
    CardContent,
    Typography,
    Slider,
    Box
} from '@mui/material'
import {
    School,
    HistoryEdu,
    WorkspacePremium,
    Css,
    Html,
    Javascript,
    GitHub,
    Storage
} from '@mui/icons-material';
import react from "./react.jpg"
import {MySkills} from "../../Services/PersonalData"
import './Skills.css'

export const Skills = () => {

    const [MYySkillsData, SetMySkillsData] = useState(MySkills)
    const current = new Date();
    const date = `${
        current.getDate()
    }/${
        current.getMonth() + 1
    }/${
        current.getFullYear()
    }`;
    return (
        <>
            <Card className="bodySkills">
                <p id="Skills"></p>
                <h1 className="h1Skills">Skills</h1>
                <CardContent className="contantSkills">
                    <div className='divSkill'>
                        <h3>Progress</h3>
                        <h6 className='h6Skill'>(today is {date})</h6>
                    </div>
                    <br></br>
                    <br></br>
                    <div> {
                        MYySkillsData.map((items) => {
                            const {Skillsdes, Skillsintro} = items;
                            return (
                                <section>
                                    <h4>
                                        <WorkspacePremium className="iconSkills"/> {Skillsdes} </h4>
                                    <h4>
                                        <WorkspacePremium className="iconSkills"/> {Skillsintro} </h4>
                                </section>
                            );
                        })
                    } </div>

                    <img src={react}
                        alt="vidaaa"
                        className="imgSkills"/>
                    <Slider className="sliderSkills" color="primary" disabled
                        defaultValue={88}></Slider>
                    <br></br>
                    <Javascript className="imgSkills"/>
                    <Slider className="sliderSkills" color="primary" disabled
                        defaultValue={83}></Slider>
                    <br></br>
                    <Css className="imgSkills"/>
                    <Slider className="sliderSkills" color="primary" disabled
                        defaultValue={80}></Slider>
                    <br></br>
                    <Html className="imgSkills"/>
                    <Slider className="sliderSkills" color="primary" disabled
                        defaultValue={85}></Slider>
                    <GitHub className="imgSkills"/>
                    <Slider className="sliderSkills" color="primary" disabled
                        defaultValue={89}></Slider>
                    <br></br>
                    <Storage className="imgSkills"/>
                    <Slider className="sliderSkills" color="primary" disabled
                        defaultValue={50}></Slider>
                </CardContent>
            </Card>

        </>
    )
}
