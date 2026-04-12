
import Circle from '../../components/Circle'
import Banner from './components/Banner'
import { Outlet } from 'react-router-dom'

const Auth = () => {
    return (
        <div className="flex items-center justify-between gap-10 p-10 min-h-screen relative">
            <div className='w-[50%]'>
            <Banner />
            </div>
            <Outlet />
            <Circle style={{ width: "200px", height: "200px", backgroundColor: "rgba(0,188,187)", position: "absolute", borderRadius: "50%", top: "-12%", left: "-5%" }} />
            <Circle style={{ width: "200px", height: "200px", backgroundColor: "rgba(0,188,187)", position: "absolute", borderRadius: "50%", top: "0%", left: "-10%" }} />
            <Circle style={{ width: "200px", height: "200px", backgroundColor: "rgba(0,188,187,0.2)", position: "absolute", borderRadius: "50%", bottom: "15%", left: "-9%" }} />
            <Circle style={{ width: "200px", height: "200px", backgroundColor: "rgba(0,188,187,0.3)", position: "absolute", borderRadius: "50%", bottom: "0%", left: "-11%" }} />
        </div>
    )
}

export default Auth