import React, { useState } from 'react';
import Card from '@mui/material/Card';
import ComponentInfo from '../ComponentInfo';
import styles from './ReplacableComponentOverview.module.scss';

function ReplacableComponent(props) {
    const { components } = props;
    const [selectedComponent, setSelectedComponent] = useState(components[0] || null);

    function selectComponentHandler(component) {
        setSelectedComponent(component);
    }

    return (
        <div className={styles.replacableComponentContainer}>
            <Card className="p-5 bg-gray-300">
                <div className="text-xl font-medium">Replacable components</div>
                <div className="py-4 grid gap-3 grid-cols-[300px_1fr] items-start">
                    <div className={`grid ${styles.replacableComponentsListContainer}`}>
                        {components.map(component => (
                            <div 
                                className={`text-sm px-3 py-1 cursor-pointer text-gray-500 border-gray-400 ${styles.replacableComponentsListItemContainer} ${selectedComponent.id === component.id ? styles.selectedComponent : ''}`} key={component.id} 
                                onClick={() => selectComponentHandler(component)}>{component.attributes.name}
                            </div>
                        ))}
                    </div>
                    <ComponentInfo component={selectedComponent} />
                </div>
            </Card>
        </div>
    )
}

export default ReplacableComponent