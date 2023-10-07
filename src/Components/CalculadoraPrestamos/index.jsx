import React, { useRef, useState } from 'react'
import Swal from 'sweetalert2';
import { formatearDineroUSD } from '../../servicies';

function CalculadoraPrestamos() {

    const montoInput = useRef()
    const cuotasInput = useRef()

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

    const [totalAPagar, setTotalAPagar] = useState(0);
    const [totalAPagarMes, setTotalAPagarMes] = useState(0);
    const [meses, setMeses] = useState(0);

    const calcularTotal = (e) => {

        e.preventDefault()

        const montoI = (parseFloat(montoInput.current.value));
        console.log(montoI);
        const mesesI = (parseFloat(cuotasInput.current.value));
        console.log(mesesI);
        setMeses(mesesI)

        if (isNaN(montoI)) {
            setMeses(0)
            setTotalAPagar(0)
            setTotalAPagarMes(0)
            Toast.fire({
                icon: 'error',
                title: "Ingrese un monto valido"
            })
        }
        else if (isNaN(mesesI)) {
            setMeses(0)
            setTotalAPagar(0)
            setTotalAPagarMes(0)
            Toast.fire({
                icon: 'error',
                title: "Ingrese los meses"
            })

        }
        else if (mesesI == 6) {
            const total = montoI * 1.75
            setTotalAPagar(total);
            setTotalAPagarMes(total / mesesI);
        }
        else if (mesesI == 12) {
            const total = montoI * 2.5
            setTotalAPagar(total);
            setTotalAPagarMes(total / mesesI);
        }

        else if (mesesI == 24) {
            const total = montoI * 5.4
            setTotalAPagar(total);
            setTotalAPagarMes(total / mesesI);
        }

        else if (mesesI == 36) {
            const total = montoI * 7.8
            setTotalAPagar(total);
            setTotalAPagarMes(total/mesesI)
        }
    }


    return (
        <div className='w-screen h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-500'>
            <form action="" onSubmit={calcularTotal} className='h-100px w-80 bg-white grid rounded-xl shadow-black shadow-lg'>
                <p className='text-3xl mt-8 text-center'>Calculadora de prestamos</p>

                <label className='grid pl-8 pr-8 mt-8 text-center'>Monto
                    <input ref={montoInput} className="border-b border-black" />
                </label>

                <label className='grid pl-8 pr-8 mt-3 text-center'>Cuotas
                    <select name="" id="" ref={cuotasInput}>
                        <option value=""></option>
                        <option value="6">6</option>
                        <option value="12">12</option>
                        <option value="24">24</option>
                        <option value="36">36</option>
                    </select>
                </label>

                <div id="resultado" class="resultado">
                </div>

                <div className="mt-8 mb-10 ml-8 mr-8 grid gap-2">
                    <button className=' h-8 text-sm bg-purple-500 hover:bg-purple-600 text-white font-bold rounded-md'>
                        <p className=''>Calcular</p>
                    </button>
                </div>

                <div className="mb-8 mt-4">
                    <h2 className="text-xl font-extrabold text-gray-500 text-center">
                        Resumen <span className="text-purple-500">de pagos</span>
                    </h2>
                    <div className='ml-8 mt-2'>
                        <p className="text-lg text-gray-500 font-bold"><span className="text-purple-500">{meses}</span> Meses</p>
                        <p className="text-lg text-gray-500 font-bold"><span className="text-purple-500">{formatearDineroUSD(totalAPagar)}</span> Total a pagar</p>
                        <p className="text-lg text-gray-500 font-bold"><span className="text-purple-500">{formatearDineroUSD(totalAPagarMes)}</span> Mensuales</p>
                    </div>
                </div>

            </form>

        </div>
    )
}

export default CalculadoraPrestamos