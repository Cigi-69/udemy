const filters = {
    searchText: '',
    checkgoxActivated: false
}

const getFilters = () => filters

const setFilters = ({ searchText, checkgoxActivated }) => {
    if ( typeof searchText === 'string') {
        filters.searchText = searchText
    }
    if (typeof checkgoxActivated === 'boolean') {
        filters.checkgoxActivated = checkgoxActivated
    }
}

export { getFilters, setFilters }