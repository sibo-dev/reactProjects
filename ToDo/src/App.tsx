import { TodoList, AddTodo } from './components'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    // <div className="flex items-center justify-center h-screen">
    //   <h1 className="text-5xl font-bold">Todo App Tutorial</h1>
      <div>
    <Toaster position="bottom-center" />
    <AddTodo />
    <TodoList />
    </div>
  // </div>
  )
}

export default App
