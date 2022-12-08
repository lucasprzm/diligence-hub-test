/* eslint-disable prettier/prettier */
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../public/logo.svg'

export default function Header() {
  return (
    <div className='flex h-24 flex-row items-center justify-between bg-[#733590] py-4 px-32'>
      <div><img src={logo} alt="Logo Diligence Hub" /></div>
      <div className='flex flex-row justify-between'>
        <Link to='/' className='mr-8 text-lg font-bold text-white'>Usuários</Link>
        <Link to='/criar-usuario' className='text-lg font-bold text-white'>Criar novo usuário</Link>
      </div>
    </div>
  )
}
