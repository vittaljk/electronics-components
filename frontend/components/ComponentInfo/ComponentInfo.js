import React from 'react'
import Image from 'next/image'
import Card from '@mui/material/Card';
import { CONFIG } from '../../config';
import styles from './ComponentInfo.module.scss';

function ComponentInfo(props) {
    const { 
        component: {
            attributes: {
                name = '',
                description = '',
                modelNumber = '',
                categories = [],
                dataSheet = '',
                package: packageName = '',
            }
        }
    } = props;
    
    const make = props.component?.attributes?.make?.data?.attributes?.name || null;
    const images = props.component?.attributes?.images?.data?.map(({ id, attributes: { name, url } }) => ({ id, name, url })) || [];

    return (
        <div>
            <Card sx={{ minWidth: 275 }} className="p-5">
                <div className="text-blue-400">{name}</div>
                <p className="text-sm">Model number <span className="font-bold">{modelNumber}</span></p>
                <p className="text-sm">Package <span className="font-bold">{packageName}</span></p>
                {make && <p className="text-sm">Manufactured by <span className="font-bold">{make}</span></p>}
                <p className="underline text-xs text-red-400">
                    <a href={dataSheet} target="_blank" rel="noopener noreferrer">Datasheet</a>
                </p>            
                <div className="text-xs">{description}</div>
                {images?.length > 0 &&
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
                }
            </Card>
        </div>
    )
}

export default ComponentInfo