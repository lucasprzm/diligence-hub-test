/* eslint-disable prettier/prettier */
import { Button, TextField } from '@mui/material'
import { useEffect, useState } from 'react'
import { SubmitHandler, useForm, Controller } from 'react-hook-form'
import { User } from 'utils/types/user'
import SaveIcon from '@mui/icons-material/Save'
import { api } from 'services/api'
import { useNavigate, useParams } from 'react-router-dom'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'react-toastify'

const userSchema = yup.object({
  name: yup.string().required('Preencha o nome do usuário'),
  address: yup.string().required('Preencha o endereço do usuário'),
  phone: yup.string().required('Preencha o telefone do usuário'),
  age: yup.number().max(200).required('Preencha a idade do usuário'),
  nickName: yup.string().required('Preencha o apelido do usuário')
})

export default function EditUser() {
  const [user, setUser] = useState<User>()
  const { id } = useParams()
  const navigate = useNavigate()

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<User>({
    resolver: yupResolver(userSchema)
  })

  const onSubmit: SubmitHandler<User> = (data: User) => {
    api
      .put('/users/update/' + id, data)
      .then(({ status, data }) => {
        if (status === 200) {
          toast.success(data.message)
          navigate('/')
        }
      })
      .catch(({ response }) => {
        toast.error(response.data.error)
      })
  }

  function getUserData() {
    api
      .get('/users/get/' + id)
      .then(({ status, data }) => {
        if (status === 200) {
          setUser(data)
        }
      })
      .catch(({ response }) => {
        toast.error(response.data.error)
        navigate('/')
      })
  }
  useEffect(() => {
    getUserData()
  })

  if (!user) {
    return <h1>Carregando...</h1>
  }

  return (
    <div className="flex flex-col items-center">
      <div>
        <h1 className="text-xl font-bold ">Editar Usuário</h1>
      </div>
      <form
        className="flex w-96 flex-col items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          control={control}
          name="name"
          defaultValue={user.name}
          render={({ field }) => (
            <TextField
              id="name"
              name={field.name}
              label="Nome*"
              variant="standard"
              onChange={(e) => field.onChange(e.target.value)}
              margin="normal"
              fullWidth
              InputLabelProps={{ shrink: true }}
              value={field.value}
            />
          )}
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        <Controller
          control={control}
          name="address"
          defaultValue={user.address}
          render={({ field }) => (
            <TextField
              id="address"
              label="Endereço*"
              variant="standard"
              name={field.name}
              onChange={(e) => field.onChange(e.target.value)}
              value={field.value}
              margin="normal"
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
          )}
        />
        {errors.address && (
          <p className="text-red-500">{errors.address.message}</p>
        )}
        <Controller
          control={control}
          name="phone"
          defaultValue={user.phone}
          render={({ field }) => (
            <TextField
              name={field.name}
              id="phone"
              label="Telefone*"
              variant="standard"
              onChange={(e) => field.onChange(e.target.value)}
              value={field.value}
              margin="normal"
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
          )}
        />
        {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
        <Controller
          control={control}
          name="age"
          defaultValue={user.age}
          render={({ field }) => (
            <TextField
              name={field.name}
              id="age"
              type="number"
              label="Idade*"
              variant="standard"
              onChange={(e) => field.onChange(e.target.value)}
              value={field.value}
              margin="normal"
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
          )}
        />
        {errors.age && <p className="text-red-500">{errors.age.message}</p>}
        <Controller
          control={control}
          name="nickName"
          defaultValue={user.nickName}
          render={({ field }) => (
            <TextField
              name={field.name}
              id="nickName"
              label="Apelido*"
              variant="standard"
              onChange={(e) => field.onChange(e.target.value)}
              value={field.value}
              margin="normal"
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
          )}
        />
        {errors.nickName && (
          <p className="text-red-500">{errors.nickName.message}</p>
        )}
        <Button type="submit" variant="contained" startIcon={<SaveIcon />}>
          Salvar
        </Button>
      </form>
    </div>
  )
}
