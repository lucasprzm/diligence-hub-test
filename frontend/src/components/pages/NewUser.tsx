/* eslint-disable prettier/prettier */
import { Button, TextField } from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form'
import { User } from 'utils/types/user'
import SendIcon from '@mui/icons-material/Send'
import { api } from 'services/api'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const userSchema = yup.object({
  name: yup.string().required('Preencha o nome do usuário'),
  address: yup.string().required('Preencha o endereço do usuário'),
  phone: yup.string().required('Preencha o telefone do usuário'),
  age: yup.number().max(200).required('Preencha a idade do usuário'),
  nickName: yup.string().required('Preencha o apelido do usuário')
})

export default function NewUser() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<User>({ resolver: yupResolver(userSchema) })

  const onSubmit: SubmitHandler<User> =  (data: User) => {
    api.post('/users/new/', data).then(({ status, data }) => {
        if (status === 201) {
          toast.success(data.message)
          navigate('/')
        }
      })
      .catch(({ response }) => {
        toast.error(response.data.error)
      })
  }
  
  return (
    <div className="mt-8 flex h-full flex-col items-center">
      <div>
        <h1 className="text-2xl font-bold text-[#733590]">Novo Usuário</h1>
      </div>
      <form
        className="flex w-96 flex-col items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          id="name"
          label="Nome*"
          variant="standard"
          {...register('name')}
          margin="normal"
          fullWidth
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        <TextField
          id="address"
          label="Endereço*"
          variant="standard"
          {...register('address')}
          margin="normal"
          fullWidth
        />
        {errors.address && (
          <p className="text-red-500">{errors.address.message}</p>
        )}
        <TextField
          id="phone"
          label="Telefone*"
          variant="standard"
          {...register('phone')}
          margin="normal"
          fullWidth
        />
        {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
        <TextField
          type="number"
          id="age"
          label="Idade*"
          variant="standard"
          {...register('age')}
          margin="normal"
          fullWidth
        />
        {errors.age && <p className="text-red-500">{errors.age.message}</p>}
        <TextField
          id="nickName"
          label="Apelido*"
          variant="standard"
          {...register('nickName')}
          margin="normal"
          fullWidth
        />
         {errors.nickName && (
          <p className="text-red-500">{errors.nickName.message}</p>
        )}
        <div className='mt-8'>
          <Button size='large'  type="submit" variant="contained" endIcon={<SendIcon />}>
            Criar Usuário
          </Button>
        </div>
      </form>
    </div>
  )
}
