import React from 'react'
import ComponentInfo from '../ComponentInfo';
import styles from './ReplacableComponentOverview.module.scss';

function ReplacableComponent(props) {
    const { component } = props;
    return (
        <div className={styles.replacableComponentContainer}>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
            <ComponentInfo component={component}/>
        </div>
    )
}

export default ReplacableComponent