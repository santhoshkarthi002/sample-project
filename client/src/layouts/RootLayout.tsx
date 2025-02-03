import { Outlet } from "react-router-dom"

const RootLayout = () => {
  return (
    <div>
        <div className="flex flex-col items-center justify-center">
            <Outlet />
        </div>
    </div>
  )
}

export default RootLayout