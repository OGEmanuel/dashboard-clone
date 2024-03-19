"use client";

import FilterResultsButtonIcon from "@/public/icons/filter-results-button-icon";
import styles from "./data-table.module.scss";
import {
  ColumnDef,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

const DataTable = <TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) => {
  // const columnHelper = createColumnHelper();

  // const columnsData = [
  //   columnHelper.accessor("organization", {
  //     cell: (info) => <span>{info.getValue()}</span>,
  //   }),
  // ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    // onColumnFiltersChange: setColumnFilters,
    // onSortingChange: setSorting,
    getFilteredRowModel: getFilteredRowModel(),
    // state: {
    //   columnFilters,
    //   sorting,
    // },
  });

  return (
    <section className={styles["table-section"]}>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  <span>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    <button>
                      <FilterResultsButtonIcon />
                    </button>
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.length
            ? table.getRowModel().rows.map((row, i) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                      {i !== table.getRowModel().rows.length - 1 && <hr />}
                    </td>
                  ))}
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </section>
  );
};

export default DataTable;
