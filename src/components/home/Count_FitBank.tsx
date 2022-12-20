import React, { useEffect, useState } from 'react';
import '../../styles/components-styles/Count_FitBank.scss';
import { useSelector } from "react-redux";
import { usetotais } from '../../redux/sliceTransition';

export default function Count_FitBank() {

    const totais = useSelector(usetotais)


    return (
        <div className='div-count'>


            {totais.map((totais) =>
                <div className='div-numbers'>
                    <div className='text-tit'>
                        <p className='text-title' style={{ color: totais.total == '18' || totais.total == '+602' ? '#5E80A4' : '' }}>{totais.total}</p>
                    </div>
                    <p>{totais.description}</p>
                </div>
            )}
        </div>

    );
}