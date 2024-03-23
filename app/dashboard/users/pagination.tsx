import styles from "./pagination.module.scss";
import NextIcon from "@/public/icons/next-icon";
import PrevIcon from "@/public/icons/prev-icon";
import React from "react";

interface PaginationProps {
  pageCount: number;
  pageIndex: number;
  setPage: (pageIndex: number) => void;
  table: any;
}

const Pagination = ({
  pageCount,
  pageIndex,
  setPage,
  table,
}: PaginationProps) => {
  const pageNumbers: (number | string)[] = [];
  const maxPages = 7;

  for (let i = 1; i <= pageCount; i++) {
    if (
      i <= 3 ||
      i > pageCount - 2 ||
      (i >= pageIndex - 1 && i <= pageIndex + 1)
    ) {
      pageNumbers.push(i);
    } else if (i === 4 && pageCount > maxPages) {
      pageNumbers.push("...");
    }
  }

  return (
    <div className={styles.pagination}>
      <button
        onClick={() => {
          table.previousPage();
        }}
        disabled={!table.getCanPreviousPage()}
      >
        <PrevIcon />
      </button>
      {pageNumbers.map((pageNumber, index) => (
        <span
          key={index}
          onClick={() => {
            if (typeof pageNumber === "number") {
              setPage(pageNumber - 1);
            }
          }}
          className={`${styles.pages} ${pageNumber === pageIndex + 1 && styles["cur-page"]}`}
        >
          {pageNumber}
        </span>
      ))}
      <button
        onClick={() => {
          table.nextPage();
        }}
        disabled={!table.getCanNextPage()}
      >
        <NextIcon />
      </button>
    </div>
  );
};

export default Pagination;
