import React from 'react';
import {Link, SpeedDial, SpeedDialAction, Box} from "@mui/material"
import {GitHub, Instagram, LinkedIn} from '@mui/icons-material';
import "./SocialMedia.css"

import SpeedDialIcon from '@mui/material/SpeedDialIcon';

import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import {Button} from 'react-bootstrap';

const actions = [
    {
        icon: <Instagram style={
            {fill: '#c38d9e'}
        }/>,
        name: 'Instagram',
        link: "https://www.instagram.com/hashemi_vida/",
        target: "_blank"
    }, {
        icon: <GitHub style={
            {fill: '#c38d9e'}
        }/>,
        name: 'GitHub',
        link: "https://github.com/Vidaaaaa",
        target: "blank"

    }, {
        icon: <LinkedIn style={
            {fill: '#c38d9e'}
        }/>,
        name: 'LinkedIn',
        link: "https://www.linkedin.com/in/vida-hashemi-front-end-developer/",
        target: "_blank"
    },
];

export const SocialMedia = () => {


    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <> 
            <div className="bodySocialMedia">
                <Box sx={
                    {
                        height: 320,
                        transform: 'translateZ(0px)',
                        flexGrow: 1,
                                           }
                }>
                    <SpeedDial 
                        sx={
                            {
                                position: 'absolute',
                                bottom: 16,
                                right: 16,
                                left: 28,
                            }
                        }
                        icon={<SpeedDialIcon style={{color: "#c38d9e"}}/>}
                        ariaLabel=""
                        onClose={handleClose}
                        onOpen={handleOpen}
                        open={open}>

                        {
                        actions.map((action) => (
                            <SpeedDialAction className='iconSocialMedia' 
                             key={
                                    action.name
                                }
                                icon={
                                    action.icon
                                }

                                tooltipTitle={
                                    action.name
                                }
                                onClick={handleClose}
                                href={
                                    action.link
                                }
                                target={
                                    action.target
                                }/>
                        ))
                    } </SpeedDial>
                </Box>
            </div>

        </>
    );
}
