import React from "react";

//styles
import "./Pagination.styles.css";

const Pagination = ({
  residentsByPage,
  totalresidents,
  handlePaginate,
  currentPageSelected,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalresidents / residentsByPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="paginationCard">
      {pageNumbers.map((pageNumber) => (
        <button
          className={
            pageNumber === currentPageSelected ? "pageSelected" : "not"
          }
          key={pageNumber}
          onClick={() => handlePaginate(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
