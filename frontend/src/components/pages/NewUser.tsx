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
    await api
      .post('/users/new', data)
    console.log('Usuário criado!')
  }
  console.log(errors)

  return (
    <div className="flex flex-col items-center">
      <div>
        <h1 className="text-xl">Novo Usuário</h1>
      </div>
      <form
        className="flex w-80 flex-col items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          required
          id="name"
          label="Nome"
          variant="standard"
          {...register('name', { required: true })}
          margin="normal"
        />
        <TextField
          required
          id="address"
          label="Endereço"
          variant="standard"
          {...register('address', { required: true })}
          margin="normal"
        />
        <TextField
          required
          id="phone"
          label="Telefone"
          variant="standard"
          {...register('phone', { required: true, maxLength: 15 })}
          margin="normal"
        />
        <TextField
          required
          type="number"
          id="age"
          label="Idade"
          variant="standard"
          {...register('age', { required: true, maxLength: 15 })}
          margin="normal"
        />
        <TextField
          required
          id="nickName"
          label="Apelido"
          variant="standard"
          {...register('nickName', { required: true })}
          margin="normal"
        />
        <Button type="submit" variant="contained" endIcon={<SendIcon />}>
          Criar Usuário
        </Button>
      </form>
    </div>
  )
}
