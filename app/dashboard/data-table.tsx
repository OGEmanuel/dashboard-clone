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
import PrevIcon from "@/public/icons/prev-icon";
import NextIcon from "@/public/icons/next-icon";
import ShowMoreIcon from "@/public/icons/show-more-icon";

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
              {headerGroup.headers.map((header, i) => (
                <th key={header.id}>
                  <span>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {i !== table.getHeaderGroups()[0].headers.length - 1 && (
                      <>
                        <button>
                          <FilterResultsButtonIcon />
                        </button>
                      </>
                    )}
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
      {/* pagination */}
      <div className={styles.pagination}>
        <div className={styles["pagination-view"]}>
          <p>Showing</p>
          <div className={styles["pagination-view__dropdown"]}>
            <p>100</p>
            <ShowMoreIcon />
          </div>
          <p>Out of 100</p>
        </div>
        <div className={styles['pagination-pages']}>
          <button
            onClick={() => {
              table.previousPage();
            }}
            disabled={table.getCanPreviousPage()}
          >
            <PrevIcon />
          </button>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>...</span>
          <span>15</span>
          <span>16</span>
          <button
            onClick={() => {
              table.nextPage();
            }}
            disabled={table.getCanNextPage()}
          >
            <NextIcon />
          </button>
        </div>
      </div>
    </section>
  );
};

export default DataTable;
