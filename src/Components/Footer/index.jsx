import React from 'react'
import { AiOutlineTwitter, AiFillFacebook, AiOutlineInstagram, AiFillYoutube, AiOutlineWhatsApp, AiOutlineMail, AiFillPhone } from "react-icons/ai";

function Foot() {

    return (
        <>
            <div className='w-screen h-auto pt-10 bg-black absolute block'>

                <div className='flex justify-center'>

                    <div className='ml-4'>
                        <p className='text-white font-bold mb-4'>Conócenos</p>
                        <ul className='list-none'>
                            <li><a className='text-white' href="">Información Financiera</a></li>
                            <li><a className='text-white' href="">Disciplina de Mercado</a></li>
                            <li><a className='text-white' href="">Resumen de Información Financiera</a></li>
                            <li><a className='text-white' href="">Programa de Integridad</a></li>
                            <li><a className='text-white' href="">Información Corporativa</a></li>
                            <li><a className='text-white' href="">TechBank Sustentable</a></li>
                        </ul>
                    </div>

                    <div class=" ml-4 columna2">
                        <p className='text-white font-bold mb-4'>Información Importante</p>

                        <ul className='list-none'>
                            <li><a className='text-white' href="">Ayuda Urgente</a></li>
                            <li><a className='text-white' href="">Defensa al Consumidor</a></li>
                            <li>
                                <a className='text-white' href=""
                                >Cajeros con Funcionalidad para Personas con Discapacidad
                                </a>
                            </li>
                            <li><a className='text-white' href="">Personas Expuestas Politicamente</a></li>
                            <li><a className='text-white' href="">Reporte Responsable de Vulnerabilidades</a></li>
                            <li><a className='text-white' href="">Política Ambiental</a></li>
                        </ul>
                    </div>

                    <div className='ml-4'>
                        <p className='text-white font-bold mb-4'>Productos</p>
                        <ul className='list-none'>
                            <li><a className='text-white' href="">Tarjetas de Débito y Crédito</a></li>
                            <li><a className='text-white' href="">Préstamos Personales</a></li>
                            <li><a className='text-white' href="">Plazo Fijo</a></li>
                            <li><a className='text-white' href="">Inversiones</a></li>
                            <li><a className='text-white' href="">Cobrá tu Sueldo en TechBank</a></li>
                            <li><a className='text-white' href="">Promociones</a></li>
                        </ul>
                    </div>

                </div>

                <div className='mt-10 grid grid-cols-2'>
                    <div className="flex justify-center gap-2" >
                        <a className='text-white' href="#"><AiFillPhone /> </a>
                        <a className='text-white' href="#"><AiOutlineMail /> </a>
                        <a className='text-white' href="#"><AiOutlineWhatsApp /></a>
                        <a className='text-white' href="https://twitter.com/login?lang=es"
                        ><AiOutlineTwitter /></a>
                        <a className='text-white' href="https://es-la.facebook.com/login"
                        ><AiFillFacebook /></a>
                        <a className='text-white' href="https://www.instagram.com"
                        ><AiOutlineInstagram /></a>
                        <a className='text-white' href="https://www.youtube.com/"
                        ><AiFillYoutube /></a>
                    </div >
                    <div className='flex justify-center gap-2'>
                        <a className='text-white' href="/">Inicio</a>
                        <a className='text-white' href="/cuentas">Cuentas</a>
                        <a className='text-white' href="/transferencias">Transferencias</a>
                    </div>
                </div>
                <div className='mt-10 pb-10 flex justify-center'>
                    <a className='text-white' href="/politica-de-privacidad">Política de Privacidad</a> |
                    <a className='text-white' href="/terminos-y-condiciones">Términos y Condiciones</a> |
                    <a className='text-white' href="">Aviso Legal</a>
                    <a className='text-white' href="">Recomendaciones de Seguridad</a>
                    <p className='text-white'>Derechos de autor © 2023 iBank</p>
                </div>
            </div>
        </>
    )
}

export default Foot