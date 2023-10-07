import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {

    const [open, setOpen] = useState(false)

    return (
        <>
            <div className='flex items-center w-screen h-20 bg-black fixed top-0 left-0 right-0'>

                <div className='flex'>

                    <button className='text-white rounded-md h-8 w-20' onClick={() => setOpen(true)}>
                        <span className="material-symbols-outlined">menu</span>
                    </button>

                    <div className={`${!open && "hidden"} bg-gray-600/50 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm`} onClick={() => setOpen(false)}></div>

                    <div className={`${open ? "w-80" : "w-0"} bg-purple-400 min-h-screen fixed top-0 left-0 transition-all duration-300`}>
                        <div className={`${!open && "hidden"} pt-3`}>
                            <button className='ml-4 text-white mb-14' onClick={() => setOpen(false)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <Link to="/">
                                <div className='text-center text-white text-xl hover:bg-purple-600 cursor-pointer py-3 mb-2'>
                                    <a>Inicio</a>
                                </div>
                            </Link>
                            <div className='text-center text-white text-xl hover:bg-purple-600 cursor-pointer py-3 mb-2'>
                                <a>Cuentas</a>
                            </div>
                            <Link to="/transferencias">
                            <div className='text-center text-white text-xl hover:bg-purple-600 cursor-pointer py-3 mb-2'>
                                <a>Transferencias</a>
                            </div>
                            </Link>
                            <div className='text-center text-white text-xl hover:bg-purple-600 cursor-pointer py-3 mb-2'>
                                <a>Pagos</a>
                            </div>
                            <Link to="/calculadoraprestamos">
                            <div className='text-center text-white text-xl hover:bg-purple-600 cursor-pointer py-3 mb-2'>
                                <a>Prestamos</a>
                            </div>
                            </Link>
                            <Link to="/conversordivisas">
                                <div className='text-center text-white text-xl hover:bg-purple-600 cursor-pointer py-3 mb-2'>
                                    <p>Divisas</p>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <p className='text-white text-2xl mr-4 flex items-center'>
                        <span class="material-symbols-outlined mr-1">
                            account_balance
                        </span>
                        TechBank
                    </p>

                </div>

                <div className='w-screen flex justify-end mr-8'>
                    <Link to="/signin">
                        <button className='bg-purple-400 text-white rounded-md h-8 w-20'>
                            <p className='text-center text-xs'>Iniciar Sesion</p>
                        </button>
                    </Link>

                </div>

            </div>
        </>
    )
}

export default Header