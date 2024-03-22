"use client";

import FilterResultsButtonIcon from "@/public/icons/filter-results-button-icon";
import styles from "./data-table.module.scss";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import PrevIcon from "@/public/icons/prev-icon";
import NextIcon from "@/public/icons/next-icon";
import ShowMoreIcon from "@/public/icons/show-more-icon";
import Filter from "@/components/filter";
import { useState } from "react";
import Pagination from "./pagination";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

const DataTable = <TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) => {
  const [filter, setFilter] = useState(false);
  const [pagination, setPagination] = useState({
    pageIndex: 0, //initial page index
    pageSize: 10, //default page size
  });
  const setPage = (pageIndex: number) => {
    setPagination((prevPagination) => ({
      ...prevPagination,
      pageIndex: pageIndex,
    }));
  };
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: {
      pagination,
    },
    pageCount: data.length / pagination.pageSize,
  });

  const handleFilter = () => {
    setFilter(!filter);
    console.log(filter);
  };

  // console.log(data);

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
                        <button onClick={handleFilter}>
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
            <select
              value={table.getState().pagination.pageSize}
              onChange={(e) => {
                table.setPageSize(Number(e.target.value));
              }}
            >
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  {pageSize}
                </option>
              ))}
            </select>
          </div>
          <p>Out of {data.length}</p>
        </div>

        <Pagination
          pageCount={table.getPageCount()}
          pageIndex={pagination.pageIndex}
          setPage={setPage}
          table={table}
        />
      </div>
      {filter && (
        <div className={styles.filter}>
          <Filter />
        </div>
      )}
    </section>
  );
};

export default DataTable;
