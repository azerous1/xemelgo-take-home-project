export const SOLUTION_TYPES_ = ['Asset', 'Inventory', 'WO']
export const STORAGE_LOCATIONS_NAME = [
    'Storage 1',
    'Storage 2',
    'Storage 3',
    'Storage 4',
    'Storage 5', 
]
export const USERS = [
    {
        name: 'Yichi Zhang',
        role: 'Administrator'
    },
    {
        name: 'Stacy',
        role: 'Customer Support'
    },
    {
        name: 'Yash',
        role: 'Worker'
    },
    {
        name: 'Atttwawa',
        role: 'Worker'
    },
    {
        name: 'Zhang',
        role: 'Worker'
    },
]
export const DASHBOARD_TABLE_COLS = ['Item', 'Solution', 'Location', 'Detail']
export const LOCATION_HISTORY_TABLE_HEADER = ['Location', 'Timestamp']
export const ACTION_HISTORY_TABLE_HEADER = ['User', 'Action', 'Timestamp']
export const SOLUTION_ACTIOON_NAME_MAPPING = {
    asset: {
        locationSelectPrompt: 'Moved to',
        actionName: 'Missing'
    },
    inventory: {
        locationSelectPrompt: 'Scanned at',
        actionName: 'Consumed'
    },
    wo: {
        locationSelectPrompt: 'Received at',
        actionName: 'Complete'
    }
}

