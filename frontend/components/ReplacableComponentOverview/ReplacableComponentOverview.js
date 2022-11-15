import React from 'react'
import ComponentInfo from '../ComponentInfo';
import styles from './ReplacableComponentOverview.module.scss';

function ReplacableComponent(props) {
    const { components } = props;
    return (
        <div className={styles.replacableComponentContainer}>
            {components.map(component => (
                <div key={component.id}>
                    <ComponentInfo component={component}/>
                </div>
            ))}
        </div>
    )
}

export default ReplacableComponent