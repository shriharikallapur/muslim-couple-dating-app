import { useState, useEffect } from "react"
import { Outlet } from "react-router-dom"
import { useDispatch } from "react-redux"
import authService from "./app/authService"
import { signin, signout } from  "./slices/authSlice"
import { Sidebar } from "./layout/Sidebar"
import { Topbar } from "./layout/Topbar"

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .GetCurrentUser()
      .then((userData) => {
        if (userData) dispatch(signin({ userData }))
        else dispatch(signout())
      })
      .finally(() => setLoading(false))
  }, [dispatch])

  return !loading ? (
    <div className='w-screen h-dvh bg-[#F7F8FC] flex'>
      <Sidebar />
      <div className='w-full h-full'>
        <Topbar />
        <main className='w-full'>
          <Outlet />
        </main>
      </div>
    </div>
  ) : null
}

export default App
