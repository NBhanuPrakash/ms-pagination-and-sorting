import React, { useEffect, useState } from "react";
import "./table.css";
import { fetchAadharData, fetchAadharDataSort } from "../Server";
import Spinner from "./Spinner";

const ClassicTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pageSize, setPageSize] = useState(10); // Default page size
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [fieldName, setFieldName] = useState("id");
  const [sortOrder, setSortOrder] = useState("asc"); // Track sorting order

  const getData = async (fieldName, newOffset, newPageSize) => {
    try {
      setLoading(true);
      const response =
        fieldName === "id"
          ? await fetchAadharData(newOffset, newPageSize)
          : await fetchAadharDataSort(fieldName, newOffset, newPageSize);
      setData(response.response);
      setTotalPages(Math.ceil(response.recordCount / newPageSize));
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData(fieldName, offset, pageSize);
  }, [offset, pageSize, fieldName, sortOrder]);

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setOffset((prevOffset) => prevOffset + 1);
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setOffset((prevOffset) => prevOffset - 1);
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    setOffset(pageNumber - 1);
    setCurrentPage(pageNumber);
  };

  const handlePageSizeChange = (event) => {
    const newPageSize = parseInt(event.target.value, 10);
    setPageSize(newPageSize);
    setOffset(0); // Reset to the first page
    setCurrentPage(1); // Reset the current page
  };

  const handleSortChange = (field) => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newSortOrder);
    setFieldName(field);
    setOffset(0); // Reset to first page on sort change
  };

  const getSortSymbol = (field) => {
    if (fieldName === field) {
      return sortOrder === "asc" ? "↓" : "↑";
    }
    return "↑"; // Default symbol if not sorting by this field
  };

  return (
    <div className="table-container">
      <h2 className="table-title">Government Aadhar Details</h2>
      <div className="page-size-control">
        <label htmlFor="pageSize">Page Size: </label>
        <select id="pageSize" value={pageSize} onChange={handlePageSizeChange}>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
        </select>
      </div>
      <table className="styled-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>ID</th>
            <th
              onClick={() => handleSortChange("personName")}
              style={{ cursor: "pointer" }}
            >
              Name {getSortSymbol("personName")}
            </th>
            <th
              onClick={() => handleSortChange("aadharId")}
              style={{ cursor: "pointer" }}
            >
              Aadhar Number {getSortSymbol("aadharId")}
            </th>
            <th
              onClick={() => handleSortChange("gender")}
              style={{ cursor: "pointer" }}
            >
              Gender {getSortSymbol("gender")}
            </th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                <Spinner />
              </td>
            </tr>
          ) : error ? (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                Error: {error.message}
              </td>
            </tr>
          ) : (
            data.map((row, index) => (
              <tr key={row.id}>
                <td>{offset * pageSize + index + 1}</td>
                <td>{row.id}</td>
                <td>{row.personName}</td>
                <td>{row.aadharId}</td>
                <td>{row.gender}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <div className="pagination-controls">
        <button onClick={handlePrevClick} disabled={currentPage === 1}>
          Prev
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNextClick} disabled={currentPage === totalPages}>
          Next
        </button>
        <div className="page-numbers">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageClick(index + 1)}
              className={currentPage === index + 1 ? "active" : ""}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClassicTable;
