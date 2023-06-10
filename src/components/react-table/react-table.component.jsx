import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useTable, useSortBy, useFilters, useGlobalFilter, usePagination } from "react-table";

import { Table } from './react-table.styles'

const BasicTable = ({ COLUMNS, DATA }) => {

    const columns = useMemo(() => COLUMNS, [COLUMNS])
    const data = useMemo(() => DATA, [DATA]);
    const nav = useNavigate();
    const onNavigateHandler = (id) => {
        nav(`patient/${id}`)
    }

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        canPreviousPage,
        canNextPage,
        pageOptions,
        state,
        prepareRow,
        setPageSize
    } = useTable(
        {
            columns,
            data
        },
        useFilters,
        useGlobalFilter,
        useSortBy,
        usePagination
    );

    const { pageIndex, pageSize } = state;
    return (
        <>
            <Table {...getTableProps()}>
                <thead>
                    {
                        headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {
                                    headerGroup.headers.map((column) => (
                                        <th {...column.getHeaderProps(column.getSortByToggleProps())} >
                                            {column.render('Header')}
                                            <span>
                                                {column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}
                                            </span>
                                            <div>{column.canFilter ? column.render('Filter') : null}</div>
                                        </th>
                                    ))
                                }


                            </tr>
                        ))
                    }
                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        page.map((row) => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()} onClick={() => onNavigateHandler(row.original.reserved_patient_id)}>
                                    {
                                        row.cells.map((cell) => {

                                            return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                        })
                                    }

                                </tr>
                            )

                        })
                    }

                </tbody>
            </Table>
            <div>
                <div>
                    <strong>

                        Page : {pageIndex + 1} of {pageOptions.length}
                    </strong>
                </div>
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>previous</button>
                <button onClick={() => nextPage()} disabled={!canNextPage}>next</button>
            </div>
            <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
                {
                    [10, 25, 50].map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    )

                    )
                }
            </select>
        </>
    )
}


export default BasicTable;