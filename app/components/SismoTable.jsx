'use client'

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Pagination
} from '@nextui-org/react'
import { useListSismos } from '@/app/hooks/useSWR'
import { TableSkeleton } from '@/app/components/TableSkeleton'

const columns = [
  {
    key: 'id',
    label: 'ID'
  },
  {
    key: 'magnitud',
    label: 'Magnitud'
  },
  {
    key: 'fecha',
    label: 'Fecha'
  },
  {
    key: 'epicentro',
    label: 'Epicentro'
  },
  {
    key: 'latitud',
    label: 'Latitud'
  },
  {
    key: 'longitud',
    label: 'Longitud'
  },
  {
    key: 'profundidad',
    label: 'Profundidad'
  }
]

export function SismoTable() {
  // ejemplo
  // sismo =  {
  //     id: '1day_6',
  //     magnitud: '3.5',
  //     fecha: '2024-01-07    04:06:33',
  //     epicentro: '28 km al NORESTE de MATIAS ROMERO, OAX',
  //     latitud: '28 km al NORESTE de MATIAS ROMERO, OAX',
  //     longitud: '17.00',
  //     profundidad: '123 km'
  //   },
  const { isLoading, listSismos, isError } = useListSismos()

  if (isLoading) return <TableSkeleton columns={columns} />
  if (isError) return <p>Error...</p>

  return (
    <Table aria-label='Example table with dynamic content'>
      <TableHeader columns={columns}>
        {columns.map(column => (
          <TableColumn key={column.key}>{column.label}</TableColumn>
        ))}
      </TableHeader>
      <TableBody>
        {listSismos.map(sismo => (
          <TableRow key={sismo.id}>
            {columns.map(column => (
              <TableCell key={column.key}>{sismo[column.key]}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
