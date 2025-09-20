import { Provider } from "react-redux"
import { store } from "./redux/store";
import Tasks from "./components/ShowTasks";


function App() {

  return (
    <Provider store={store}>
    <>
    <Tasks/>
    </>
    </Provider>
  )
}

export default App
