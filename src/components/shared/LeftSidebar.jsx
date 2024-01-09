import { Link, NavLink, useLocation, } from 'react-router-dom';
import { sidebarLinks } from '../../constants/constants';

const LeftSidebar = () => {

  const { pathname } = useLocation();

  return (
    <nav className="bg-[#1E2640] w-[230px] h-full flex flex-col justify-between sticky top-0 left-0">
      <div className="flex flex-col gap-4">


        <div className='flex my-1 p-2 w-full   text-white'>
          <Link to={`/profile/${"userId"}`} className=" flex flex-row items-center gap-3 w-full">
            <img className='rounded-md bg-white p-1 h-14 w-16' alt="logo"
              src={"/assets/logo.png"} loading='lazy'
            />

            <div className='flex-1'>
              <h1 className='text-xl'>Nishyan</h1>
              <Link to="/orders" className='text-gray-400 underline underline-offset-2 '>
                Visit store
              </Link>
            </div>

            <img className='hover:rounded-md hover:bg-gray-600  w-5' alt="logo"
              src={"/assets/down-arrow.svg"}
            />
          </Link>
        </div>



        <ul className='flex flex-col  m-2 '>
          {
            sidebarLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <li key={link.label} className={`group ${isActive ? ' bg-[#343B53]  rounded-md' : ''}`}>
                  <NavLink to={link.path} className={`flex gap-4 items-center py-2 px-4  ${isActive ? 'text-white' : 'text-gray-300'}`}>
                    <img src={link.icon} alt="link" className={`h-6 w-6 ${isActive ? 'text-white' : 'text-gray-300'}`} loading='lazy' />
                    {link.label}
                  </NavLink>
                </li>
              )
            })
          }
        </ul>

      </div>

      <div className={`bg-[#343B53]  rounded-md m-2`}>
        <NavLink to="/" className={`flex gap-4 items-center py-2 px-4  text-white `}>
          <img src="/assets/wallet.svg" alt="link" className={`h-10 w-10 rounded-md p-1 bg-[#5b637c]`} loading='lazy' />
          <div className='flex flex-col '>
            <p className='text-gray-300'>
              Available credits
            </p>
            <p>222.10</p>
          </div>
        </NavLink>
      </div>

    </nav>
  )
}

export default LeftSidebar