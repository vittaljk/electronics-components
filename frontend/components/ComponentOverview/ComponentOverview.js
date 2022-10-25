import React from 'react'
import ComponentInfo from '../ComponentInfo';
import ReplacableComponentOverview from '../ReplacableComponentOverview';
import styles from './ComponentOverview.module.scss';

function ComponentOverview(props) {
    const { component } = props;
    return (
        <div className={styles.componentOverviewContainer}>
            <ComponentInfo component={component}/>
            {component.replacableComponents.data.length > 0 &&
                <ReplacableComponentOverview />
            }
        </div>
    )
}

export default ComponentOverview