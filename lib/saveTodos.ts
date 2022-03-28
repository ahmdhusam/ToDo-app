import type { ITodos } from '../store/todos';

export default function saveTodos(todos: ITodos): void {
    localStorage.setItem('todos', JSON.stringify(todos));
}
