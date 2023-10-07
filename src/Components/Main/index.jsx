import React from 'react'
import img1 from "./Imagenes/mono.jpeg"
import img2 from "./Imagenes/prestamo.png"
import img3 from "./Imagenes/tac.png"
import card1 from "./Imagenes/tarjeta1.png"
import card2 from "./Imagenes/tarjeta2.png"
import card3 from "./Imagenes/tarjeta3.png"
import { Card, Carousel } from 'flowbite-react';
import { Button } from 'flowbite-react'


function Main() {

    return (<>

        <Carousel className='w-screen bg-gradient-to-r from-cyan-800 to-cyan-900'>
            <img
                alt="..."
                src={img1}
            />
            <img
                alt="..."
                src={img2}
            />
            <img
                alt="..."
                src={img3}
                className='h-full'
            />
        </Carousel>


        <div className='w-screen bg-gradient-to-r from-purple-500 to-indigo-500'>

            <p className='pt-12 text-6xl text-center text-white font-extralight'>Tu dia en TechBank</p>

            <div className='mt-10 mb-10 mr-4 ml-4 gap-4 flex justify-center bg-gradient-to-r from-purple-500 to-indigo-500'>

                <Card >
                    <img width={800} height={800} src={card1} />
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Hagamos tus claves, usuario y token.
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Te ayudamos a crearlos o recuperarlos.
                    </p>
                    <Button gradientMonochrome="info">
                        Conocé más presionando aquí
                    </Button>
                </Card>

                <Card >
                    <img width={800} height={800} src={card2} />
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Queremos cuidarte de las estafas y fraudes virtuales.
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Te contamos todo lo que tenes que saber.
                    </p>
                    <Button gradientMonochrome="info">
                        Conocé más presionando aquí
                    </Button>
                </Card>

                <Card >
                    <img width={800} height={800} src={card3} />
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Videos para aprender a realizar todo de forma online.
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Te mostramos como usar la App Galicia y Online Banking.
                    </p>
                    <Button gradientMonochrome="info">
                        Conocé más presionando aquí
                    </Button>
                </Card>

            </div>
            <div className='flex justify-center mb-8'>

                <Card className="max-w-sm">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        <p>
                            Solicita tu turno
                        </p>
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        <p>
                            Podés solicitar tu turno para ser atendido en sucursales ingresando a Banca Online
                        </p>
                    </p>
                    <Button gradientMonochrome="info">
                        <p>
                            Saca tu turno
                        </p>
                    </Button>
                    <Button gradientMonochrome="info">
                        <p>
                            No tengo acceso a banca online
                        </p>
                    </Button>
                </Card>
            </div>

            <p className='mt-12 mb-12 text-4xl text-center text-white font-extralight'>Información para consumidoras y consumidores</p>

            <div className='grid grid-cols-2 justify-center mb-12'>
                <div className='list-none grid justify-center'>
                    <li><a className='text-white' href="">Cuenta Gratuita Universal</a></li>
                    <li><a className='text-white' href="">Cuenta Ceconar</a></li>
                    <li><a className='text-white' href="">Cuenta para la Repatriacion de Fondos</a></li>
                    <li><a className='text-white' href="">Cuenta Ceproar</a></li>

                </div>
                <div className='list-none grid justify-center'>
                    <li><a className='text-white' href="">Hacer reclamo en Defensa del Consumidor</a></li>
                    <li><a className='text-white' href="">Informacion al Usuario Financiero</a></li>
                    <li><a className='text-white' href="">Boton de arrepentimiento</a></li>
                    <li><a className='text-white' href="">Contratos de Adhesion - Ley 24.240 de Def. del Consumidor</a></li>
                </div>
            </div>

            <Card>
                <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
                    ¿ Necesitas ayuda ?
                </h5>
                <p className="mb-5 text-base text-gray-500 dark:text-gray-400 sm:text-lg">
                    <p>
                        Descargá Banca Móvil TechBank para comunicarte mas rapido con nuestra atencion al cliente
                    </p>
                </p>
                <div className="items-center justify-center space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
                    <a
                        className="inline-flex w-full items-center justify-center rounded-lg bg-gray-800 px-4 py-2.5 text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 sm:w-auto"
                        href="#"
                    >
                        <div className="text-left">
                            <div className="mb-1 text-xs">
                                Descargar en
                            </div>
                            <div className="-mt-1 font-sans text-sm font-semibold">
                                Mac App Store
                            </div>
                        </div>
                    </a>
                    <a
                        className="inline-flex w-full items-center justify-center rounded-lg bg-gray-800 px-4 py-2.5 text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 sm:w-auto"
                        href="#"
                    >
                        <div className="text-left">
                            <div className="mb-1 text-xs">
                                Obtenla en
                            </div>
                            <div className="-mt-1 font-sans text-sm font-semibold">
                                Google Play
                            </div>
                        </div>
                    </a>
                    <a
                        className="inline-flex w-full items-center justify-center rounded-lg bg-gray-800 px-4 py-2.5 text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 sm:w-auto"
                        href="#"
                    >
                        <div className="text-left">
                            <div className="mb-1 text-xs">
                                Atencion al cliente online
                            </div>
                            <div className="-mt-1 font-sans text-sm font-semibold">
                                20 minutos de espera
                            </div>
                        </div>
                    </a>
                </div>
            </Card>
        </div>
    </>
    )
}

export default Main