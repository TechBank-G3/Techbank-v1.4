import React from 'react'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2';
import { formatearDineroEUR, formatearDineroUSD } from '../../servicies';

function ConversorDivisas() {

    const [dolar, setDolar] = useState();
    const [euro, setEuro] = useState();


    useEffect(() => {
        axios('https://api.bluelytics.com.ar/v2/latest')
            .then(({ data }) => setDolar(data.blue.value_avg))
        axios('https://api.bluelytics.com.ar/v2/latest')
            .then(({ data }) => setEuro(data.blue_euro.value_avg))
    }, [])

    const montoInput = useRef()
    const monedaDesdeInput = useRef()

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

    const convertirMoneda = (e) => {

        e.preventDefault()

        const monto =(parseFloat(montoInput.current.value));
        const monedaDesde = monedaDesdeInput.current.value;
        

        if (isNaN(monto)) {
            Toast.fire({
                icon: 'error',
                title: "Ingrese un monto valido"
            })
        }

        if (monedaDesde == "USD" && !isNaN(monto)) {
            console.log(monto);
            const montoConvertido = monto * dolar
            Toast.fire({
                icon: 'success',
                title: `El monto convertido es: ${formatearDineroUSD(montoConvertido)} USD `
            })

        } if (monedaDesde == "EUR" && !isNaN(monto)) {
            const montoConvertido = monto * euro
            Toast.fire({
                icon: 'success',
                title: `El monto convertido es: ${formatearDineroEUR(montoConvertido)} EUR `
            })

        } if (monedaDesde=="") {
            Toast.fire({
                icon: 'error',
                title: `Seleccione una moneda`
            })

        }
    }

    return (
        <>
            <div className='w-screen h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-500'>
                <form action="" onSubmit={convertirMoneda} className='h-96 w-80 bg-white grid rounded-xl shadow-black shadow-lg'>
                    <p className='text-3xl mt-8 text-center'>Conversor de divisas</p>

                    <label className='grid pl-8 pr-8 mt-8 text-center'>Monto
                        <input ref={montoInput} className="border-b border-black" />
                    </label>

                    <label className='grid pl-8 pr-8 mt-3 text-center'>Moneda
                        <select name="" id="" ref={monedaDesdeInput}>
                            <option value=""></option>
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                        </select>
                    </label>

                    <div id="resultado" class="resultado">
                    </div>

                    <div className="mt-8 mb-10 ml-8 mr-8 grid gap-2">
                        <button className=' h-8 text-sm bg-purple-500 hover:bg-purple-600 text-white font-bold rounded-md'>
                            <p className=''>Convertir</p>
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ConversorDivisas