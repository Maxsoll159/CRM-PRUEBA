"use client"
import DataTable, { TableColumn } from 'react-data-table-component';
import { StyleComponents } from './components/StyleComponent';
import { data } from './interface/data';
import { DataRow } from './interface/interfaceData';

const columns: TableColumn<DataRow>[] = [
    {
        name: 'ID',
        sortable: true,
        selector: row => row.Id,

    },
    {
        name: 'Codigo',
        sortable: true,
        selector: row => row.Codigo,
    },
    {
        name: 'Registro',
        sortable: true,
        selector: row => row.Registro,
    },
    {
        name: 'Nombre',
        sortable: true,
        selector: row => row.Nombre,
    },
    {
        name: 'Dni',
        sortable: true,
        selector: row => row.Dni,
    },
    {
        name: 'Categoria',
        sortable: true,
        selector: row => row.Categoria,
    },
    {
        name: 'Programa',
        sortable: true,
        selector: row => row.Programa,
    },
    {
        name: 'Mes',
        sortable: true,
        selector: row => row.Mes,
    },
    {
        name: 'Acciones',
    },
];

export default function TableData() {

    return (
        <>
            <DataTable
                title="Contact List"
                columns={columns}
                data={data}
                pagination
                subHeader
                highlightOnHover
                customStyles={StyleComponents}

            />
        </>
    )
}