import { COMPONENTS_JSON_MOCK } from './Mocks';

const MAP_CSV_TO_JSON = {
    name: 'Name',
    modelNumber: 'Model Number (Part Number)',
    package: 'Package',
    make: 'Make',
    eolDate: 'EOL Date',
    category: 'Category',
    dataSheet: 'Datasheet'
}

const CATEGORIES_ID_MAP = {
    'Electronic Component': 7,
    'Microcontroller': 8,
    'Integrated Circuit': 9
}

const MAKE_ID_MAP = {
    'Toshiba': 1
}

export function getComponentsData() {
    return COMPONENTS_JSON_MOCK.map(component => ({
        name: component[MAP_CSV_TO_JSON.name],
        modelNumber: component[MAP_CSV_TO_JSON.modelNumber],
        package: component[MAP_CSV_TO_JSON.package],
        make: MAKE_ID_MAP[component[MAP_CSV_TO_JSON.make]],
        // eolDate: component[MAP_CSV_TO_JSON.eolDate] || new Date().toLocaleString().split(',')[0].replace(/\//g, '-'),
        categories: [CATEGORIES_ID_MAP[component[MAP_CSV_TO_JSON.category]].toString()],
        dataSheet: component[MAP_CSV_TO_JSON.dataSheet]
    }));
}
