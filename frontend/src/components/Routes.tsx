/* eslint-disable prettier/prettier */
import { Route, Routes as RoutesWrapper } from 'react-router-dom'
import Users from './pages/Users'

export function Routes() {
  return (
    <RoutesWrapper>
      <Route path="/" element={<Users />} />
    </RoutesWrapper>
  )
}
