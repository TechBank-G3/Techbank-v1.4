import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

function SignInComponent() {

    const navigate = useNavigate()

    const usuarioInput = useRef()
    const passwordInput = useRef()

    const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    const loginUsuario = (e) => {

        e.preventDefault()

        const usuario = usuarioInput.current.value
        const password = passwordInput.current.value

        if (usuario == "itba" && password == 1234) {
            Toast.fire({
                icon: 'success',
                title: `Has iniciado sesion correctamente`
            })
            navigate("/")
            
        } else if (usuario == "" || password == "") {
            Toast.fire({
                icon: 'error',
                title: `Usuario o contraseña incorrecta`
            })  
        } else {
            Toast.fire({
                icon: 'error',
                title: `No has podido iniciar sesion, revise los datos`
            })
        }
    }

    return (
        <>
            <div className='w-screen h-screen bg-gradient-to-r from-purple-500 to-indigo-500 flex justify-center items-center'>
                <form action="" onSubmit={loginUsuario} className='h-96 w-80 bg-white grid rounded-xl shadow-black shadow-lg'>
                    <p className='text-3xl mt-8 text-center'>Iniciar Sesion</p>

                    <label className='grid pl-8 pr-8 mt-8 text-center'>Usuario
                        <input type="text" name='usuario' ref={usuarioInput} className="border-b border-black" />
                    </label>

                    <label className='grid pl-8 pr-8 mt-3 text-center'>Contraseña
                        <input type="password" name='password' ref={passwordInput} className="border-b border-black" />
                    </label>

                    <div className="mt-8 mb-10 ml-8 mr-8 grid gap-2">
                        <button className=' h-8 text-sm bg-purple-500 hover:bg-purple-600 text-white font-bold rounded-md'>
                            <p className=''>Sing In</p>
                        </button>


                        <button className=' h-8 text-sm bg-purple-500 hover:bg-purple-600 text-white font-bold rounded-md'>
                            <Link to="/">
                                <p className=''>Home</p>
                            </Link>
                        </button>

                    </div>
                </form>
            </div>
        </>
    )
}

export default SignInComponent