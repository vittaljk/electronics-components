import React from 'react'
import Image from 'next/image'
import Card from '@mui/material/Card';
import { CONFIG } from '../../config';
import styles from './ComponentInfo.module.scss';

function ComponentInfo(props) {
    const { 
        component: {
            name = '',
            description = '',
            modelNumber = '',
            categories = [],
            dataSheet = '',
            package: packageName = '',
        }
    } = props;
    
    const make = props.component?.make?.data?.attributes?.name || null
    const images = props.component?.images?.data?.map(({ id, attributes: { name, url } }) => ({ id, name, url }));

    return (
        <div>
            <Card sx={{ minWidth: 275 }} className="p-5">
                <div className="text-blue-400">{name}</div>
                <p className="text-sm">Model number <span className="font-bold">{modelNumber}</span></p>
                <p>{packageName}</p>
                {make && <p className="text-sm">Manufactured by <span className="font-bold">{make}</span></p>}
                <p>{dataSheet}</p>            
                <div className="text-xs">{description}</div>
                {/* TODO: need fix change it to carousel */}
                <div className={`${styles.componentImagesWrapper} mt-7`}>
                    {images.map(({id, name, url}) => (
                        <div key={id} className={`${styles.componentImageContainer}`}>
                            <Image
                                width="100"
                                height="100"
                                src={`${CONFIG.HOST}${url}`}
                                alt={name}
                            />
                        </div>
                    ))}
                </div>
            </Card>

            {/* images scroll */}
        </div>
    )
}

export default ComponentInfo