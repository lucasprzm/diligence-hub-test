/* eslint-disable prettier/prettier */
import { Button, TextField } from '@mui/material'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { User } from 'utils/types/user'
import SendIcon from '@mui/icons-material/Send'
import { api } from 'services/api'

export default function NewUser() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<User>()
  const onSubmit: SubmitHandler<User> = async (data: User) => {
    await api.post('/users/new', data).then( (response) => console.warn(response))
    console.log("Usuário criado!");
    
  }
  console.log(errors)

  return (
    <div className='flex h-60 flex-col'>
      <h1>Novo Usuário</h1>
    <form className='flex w-full flex-col items-center' onSubmit={handleSubmit(onSubmit)}>
      <TextField
        required
        id="name"
        label="Nome"
        variant="standard"
        className='my-4 w-1/4'
        {...register('name', { required: true })}
      />
      <TextField
        required
        id="address"
        label="Endereço"
        variant="standard"
        className='my-4 w-1/4'
        {...register('address', { required: true })}
      />
      <TextField
        required
        id="phone"
        label="Telefone"
        variant="standard"
        className='my-4 w-1/4'
        {...register('phone', { required: true, maxLength: 15 })}
      />
      <TextField
        required
        type='number'
        id="age"
        label="Idade"
        variant="standard"
        className='my-4 w-1/4'
        {...register('age', { required: true, maxLength: 15 })}
      />
      <TextField
        required
        id="nickName"
        label="Apelido"
        variant="standard"
        className='my-4 w-1/4'
        {...register('nickName', { required: true })}
      />
      <Button type='submit' className='mb-4 w-1/4' variant="contained" endIcon={<SendIcon />}>Criar Usuário</Button>
    </form>
    </div>
  )
}
