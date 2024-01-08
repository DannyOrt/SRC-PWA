'use client'
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Skeleton
} from '@nextui-org/react'

const dummy = [
  {
    "id": 1,
    "magnitud": "4.0",
    "fecha": "2024-01-07    15:59:31",
    "epicentro": "25 km al NORESTE de MATIAS ROMERO, OAX",
    "latitud": "25 km al NORESTE de MATIAS ROMERO, OAX",
    "longitud": "17.07",
    "profundidad": "124.3 km"
  },
  {
    "id": 2,
    "magnitud": "4.0",
    "fecha": "2024-01-07    14:22:03",
    "epicentro": "52 km al ESTE de MIAHUATLAN, OAX",
    "latitud": "52 km al ESTE de MIAHUATLAN, OAX",
    "longitud": "16.33",
    "profundidad": "70.7 km"
  },
  {
    "id": 3,
    "magnitud": "4.0",
    "fecha": "2024-01-07    10:46:08",
    "epicentro": "81 km al SUROESTE de PIJIJIAPAN, CHIS",
    "latitud": "81 km al SUROESTE de PIJIJIAPAN, CHIS",
    "longitud": "15.07",
    "profundidad": "14.3 km"
  },
  {
    "id": 4,
    "magnitud": "3.3",
    "fecha": "2024-01-07    05:01:23",
    "epicentro": "84 km al SUR de COALCOMAN, MICH",
    "latitud": "84 km al SUR de COALCOMAN, MICH",
    "longitud": "18.02",
    "profundidad": "15.1 km"
  },
  {
    "id": 5,
    "magnitud": "4.2",
    "fecha": "2024-01-07    04:54:28",
    "epicentro": "104 km al SURESTE de SALINA CRUZ, OAX",
    "latitud": "104 km al SURESTE de SALINA CRUZ, OAX",
    "longitud": "15.39",
    "profundidad": "16.1 km"
  },
  {
    "id": 6,
    "magnitud": "3.3",
    "fecha": "2024-01-07    04:48:45",
    "epicentro": "90 km al SUROESTE de GPE VICTORIA(KM.43), BC",
    "latitud": "90 km al SUROESTE de GPE VICTORIA(KM.43), BC",
    "longitud": "31.59",
    "profundidad": "10.4 km"
  },
  {
    "id": 7,
    "magnitud": "1.8",
    "fecha": "2024-01-07    04:18:16",
    "epicentro": "3 km al NORTE de ZACATECAS, ZAC",
    "latitud": "3 km al NORTE de ZACATECAS, ZAC",
    "longitud": "22.80",
    "profundidad": "2 km"
  },
  {
    "id": 8,
    "magnitud": "3.5",
    "fecha": "2024-01-07    04:06:33",
    "epicentro": "28 km al NORESTE de MATIAS ROMERO, OAX",
    "latitud": "28 km al NORESTE de MATIAS ROMERO, OAX",
    "longitud": "17.00",
    "profundidad": "123 km"
  },
  {
    "id": 9,
    "magnitud": "3.4",
    "fecha": "2024-01-07    03:40:07",
    "epicentro": "20 km al NOROESTE de PINOTEPA NACIONAL, OAX",
    "latitud": "20 km al NOROESTE de PINOTEPA NACIONAL, OAX",
    "longitud": "16.42",
    "profundidad": "29.3 km"
  },
  {
    "id": 10,
    "magnitud": "3.6",
    "fecha": "2024-01-07    03:29:27",
    "epicentro": "11 km al SUROESTE de PINOTEPA NACIONAL, OAX",
    "latitud": "11 km al SUROESTE de PINOTEPA NACIONAL, OAX",
    "longitud": "16.27",
    "profundidad": "18.5 km"
  },
  {
    "id": 11,
    "magnitud": "2.9",
    "fecha": "2024-01-07    03:22:40",
    "epicentro": "15 km al SUR de ATOYAC DE ALVAREZ, GRO",
    "latitud": "15 km al SUR de ATOYAC DE ALVAREZ, GRO",
    "longitud": "17.07",
    "profundidad": "22.4 km"
  },
  {
    "id": 12,
    "magnitud": "4.0",
    "fecha": "2024-01-07    03:19:21",
    "epicentro": "25 km al NOROESTE de CASIMIRO CASTILLO, JAL",
    "latitud": "25 km al NOROESTE de CASIMIRO CASTILLO, JAL",
    "longitud": "19.73",
    "profundidad": "48.2 km"
  },
  {
    "id": 13,
    "magnitud": "2.9",
    "fecha": "2024-01-07    02:25:59",
    "epicentro": "4 km al SUROESTE de COQUIMATLAN, COL",
    "latitud": "4 km al SUROESTE de COQUIMATLAN, COL",
    "longitud": "19.17",
    "profundidad": "22.2 km"
  },
  {
    "id": 14,
    "magnitud": "3.7",
    "fecha": "2024-01-07    02:11:00",
    "epicentro": "11 km al SURESTE de SALINA CRUZ, OAX",
    "latitud": "11 km al SURESTE de SALINA CRUZ, OAX",
    "longitud": "16.12",
    "profundidad": "10.3 km"
  },
  {
    "id": 15,
    "magnitud": "3.1",
    "fecha": "2024-01-07    02:05:33",
    "epicentro": "25 km al SURESTE de LAZARO CARDENAS, BC",
    "latitud": "25 km al SURESTE de LAZARO CARDENAS, BC",
    "longitud": "30.38",
    "profundidad": "12.7 km"
  },
  {
    "id": 16,
    "magnitud": "3.7",
    "fecha": "2024-01-07    01:36:19",
    "epicentro": "88 km al SUR de SALINA CRUZ, OAX",
    "latitud": "88 km al SUR de SALINA CRUZ, OAX",
    "longitud": "15.40",
    "profundidad": "16.1 km"
  },
  {
    "id": 17,
    "magnitud": "3.4",
    "fecha": "2024-01-07    00:18:06",
    "epicentro": "71 km al NORESTE de MATIAS ROMERO, OAX",
    "latitud": "71 km al NORESTE de MATIAS ROMERO, OAX",
    "longitud": "17.33",
    "profundidad": "130 km"
  },
  {
    "id": 18,
    "magnitud": "3.2",
    "fecha": "2024-01-07    00:14:47",
    "epicentro": "55 km al NOROESTE de CINTALAPA, CHIS",
    "latitud": "55 km al NOROESTE de CINTALAPA, CHIS",
    "longitud": "17.00",
    "profundidad": "134.1 km"
  }
]
export  const TableSkeleton = ({columns}) => {
  return (
    <Table aria-label='Example table with dynamic content'>
      <TableHeader columns={columns}>
        {columns.map(column => (
          <TableColumn key={column.key}>{column.label}</TableColumn>
        ))}
      </TableHeader>
      <TableBody>
        {dummy.map(item => (
          <TableRow key={item.id} >
            {
              columns.map(column => (
                <TableCell key={column.key}><Skeleton className="w-4/5 rounded-lg">
                  <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
                </Skeleton></TableCell>
              ))
            }
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
