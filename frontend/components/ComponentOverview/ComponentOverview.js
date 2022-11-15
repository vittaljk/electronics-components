import React from 'react';
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ComponentInfo from '../ComponentInfo';
import ReplacableComponentOverview from '../ReplacableComponentOverview';
import styles from './ComponentOverview.module.scss';

function ComponentOverview(props) {
    const { component } = props;
    return (
        <div>
            <div className="mb-5 flex items-center gap-3">
                <div className="cursor-pointer h-6">
                    <Link className="cursor-pointer" href="/"><ArrowBackIcon /></Link>
                </div>
                <span className="text-2xl font-medium">{component?.attributes.name}</span>
            </div>
            <div className={`grid grid-cols-[2fr_3fr] gap-3 ${styles.componentOverviewContainer}`}>
                <ComponentInfo component={component}/>
                {component?.attributes?.replacableComponents.data.length > 0 &&
                    <ReplacableComponentOverview components={component.attributes.replacableComponents.data}/>
                }
            </div>
        </div>
    )
}

export default ComponentOverview