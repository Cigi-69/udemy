const filters = {
    searchText: '',
    checkgoxActivated: false
}

const getFilters = () => filters

const setFilters = (updates) => {
    if ( typeof updates.searchText === 'string') {
        filters.searchText = updates.searchText
    }
    if (typeof updates.checkgoxActivated === 'boolean') {
        filters.checkgoxActivated = updates.checkgoxActivated
    }
}

export { getFilters, setFilters }