/* eslint-disable react/prop-types */
import './Banner.css'
import React from 'react';
import { IoCheckmarkCircleSharp, IoCloseCircle, IoWarning, IoAlertCircle } from 'react-icons/io5';

export default function Banner({ status = "neutral", title, text }) {
    const type = {
        error: ["#FEF2F2", "#991B1B","#B45309","#F87171", IoCloseCircle], warning: ["#FFFBEB", "#92400E","#B45309","#FBBF24" , IoWarning],
        success: ["#ECFDF5", "#065F46","#047857","#34D399", IoCheckmarkCircleSharp], neutral: ["#EFF6FF", "#1E40AF","#1C51B9","#60A5FA", IoAlertCircle]
    }

    return (
        <div className="banner"
            style={{ backgroundColor: type[status][0], color: type[status][1] }
            }>
            <div className='icon'>
                <span className='icon' style={{color: type[status][3] }}> {React.createElement(type[status][4])}</span>
            </div>
            <div className='content'>
                <h2>{title}</h2>
                <p style={{color: type[status][2] }}>{text}</p>
            </div>

        </div>
    )
}

