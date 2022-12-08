/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-key */
/* eslint-disable prettier/prettier */
import MaterialReactTable, {
  MRT_ColumnDef,
  MRT_Row
} from 'material-react-table'
import { useEffect, useMemo, useState } from 'react'
import { api } from 'services/api'
import type {
  ColumnFiltersState,
  PaginationState,
  SortingState
} from '@tanstack/react-table'
import { MRT_Localization_PT_BR } from 'material-react-table/locales/pt-BR'
import { Box, IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

import { useNavigate } from 'react-router-dom'
import { User } from 'utils/types/user'
import { toast } from 'react-toastify'

export default function Users() {
  const [data, setData] = useState<User[]>([])
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isRefetching, setIsRefetching] = useState(false)
  const [rowCount, setRowCount] = useState(0)

  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [globalFilter, setGlobalFilter] = useState('')
  const [sorting, setSorting] = useState<SortingState>([])
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10
  })
  const navigate = useNavigate()

  const getUsers = async () => {
    const { data } = await api.get('/users/all')
    setData(data)
  }

  function removeUser(userId: string) {
    api
      .delete('/users/delete/' + userId)
      .then(({ status, data }) => {
        if (status === 200) {
          toast.success(data.message)
          window.location.reload()
        }
      })
      .catch(({ response }) => {
        toast.error(response.data.error)
      })
  }

  useEffect(() => {
    const fetchData = async () => {
      if (!data.length) {
        setIsLoading(true)
      } else {
        setIsRefetching(true)
      }

      try {
        getUsers()
        setData(data)
        setRowCount(data.length)
      } catch (error) {
        setIsError(true)
        console.error(error)
        return
      }
      setIsError(false)
      setIsLoading(false)
      setIsRefetching(false)
    }
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    columnFilters,
    globalFilter,
    pagination.pageIndex,
    pagination.pageSize,
    sorting
  ])

  const actionButtons = (row: MRT_Row<User>) => {
    return (
      <Box>
        <IconButton onClick={() => navigate('/editar-usuario/' + row.id)}>
          <EditIcon color='secondary'/>
        </IconButton>
        <IconButton onClick={() => removeUser(row.id)}>
          <DeleteIcon color='secondary'/>
        </IconButton>
      </Box>
    )
  }

  const columns = useMemo<MRT_ColumnDef<User>[]>(
    () => [
      {
        accessorKey: 'name',
        header: 'Nome'
      },
      {
        accessorKey: 'address',
        header: 'Endereço'
      },
      {
        accessorKey: 'phone',
        header: 'Telefone'
      },
      {
        accessorKey: 'age',
        header: 'Idade'
      },
      {
        accessorKey: 'nickName',
        header: 'Apelido'
      }
    ],
    []
  )

  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      getRowId={(row) => row.id}
      initialState={{ showColumnFilters: true }}
      enablePagination={false}
      muiToolbarAlertBannerProps={
        isError
          ? {
              color: 'error',
              children: 'Erro ao carregar dados'
            }
          : undefined
      }
      onColumnFiltersChange={setColumnFilters}
      onGlobalFilterChange={setGlobalFilter}
      onPaginationChange={setPagination}
      onSortingChange={setSorting}
      rowCount={rowCount}
      state={{
        columnFilters,
        globalFilter,
        isLoading,
        pagination,
        showAlertBanner: isError,
        showProgressBars: isRefetching,
        sorting
      }}
      localization={MRT_Localization_PT_BR}
      enableRowActions
      renderRowActions={({ row }) => actionButtons(row)}
      enableRowNumbers
      positionActionsColumn="last"
      enableTopToolbar={false}
    />
  )
}
