import { setFilters } from './filters'
import { createTodo, loadTodos } from './todos'
import { renderTodos } from './views'


renderTodos()

document.querySelector('#search-text').addEventListener('input', (e) => {
    setFilters({
        searchText: e.target.value
    })
    renderTodos()
})

document.querySelector('#todo-form').addEventListener('submit', (e) => {
    const text = e.target.elements.textTodo.value.trim()
    e.preventDefault()
    if (text.length > 0) {
        createTodo(text)
        renderTodos()
        e.target.elements.textTodo.value = ''
    }
})

document.querySelector('#hide-completed').addEventListener('change', (e) => {
    setFilters({
        checkgoxActivated: e.target.checked
    })
    renderTodos()
})

window.addEventListener('storage', (e) => {
    if (e.key === 'todos') {
        loadTodos()
        renderTodos()
    }
})