/* eslint-disable prettier/prettier */
import { Route, Routes as RoutesWrapper } from 'react-router-dom'
import EditUser from './pages/EditUser'
import NewUser from './pages/NewUser'
import Users from './pages/Users'

export function Routes() {
  return (
    <RoutesWrapper>
      <Route path="/" element={<Users />} />
      <Route path="/criar-usuario" element={<NewUser />} />
      <Route path="/editar-usuario/:id" element={<EditUser />} />
    </RoutesWrapper>
  )
}
