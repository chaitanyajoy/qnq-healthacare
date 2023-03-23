import FooterTwo from '@/layout/footer/footer-2';
import FooterFour from '@/layout/footer/footer-4';
import HeaderTwo from '@/layout/header/header-two';
import React from 'react';
import DirectContactUs from '../forms/direct-contact-us';
import ProjectDetailsArea from './project-details-area';
import ProjectDetailsBanner from './project-details-banner';

const ProjectDetails = () => {
    return (
        <>
            <HeaderTwo />
            <ProjectDetailsBanner />
            <ProjectDetailsArea />
            <DirectContactUs/>
            <FooterTwo/>
        </>
    );
};

export default ProjectDetails;