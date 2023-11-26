import{ RouterProvider,createBrowserRouter} from "react-router-dom"
import ROUTER from "./routes/ROUTER"


const router=createBrowserRouter(ROUTER)
function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
