import React from 'react'
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import "./Excel.css";

export const ExportToExcel = ({ apiData, fileName }) => {
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";

  const exportToCSV = (apiData, fileName) => {
    const ws = XLSX.utils.json_to_sheet(apiData);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };

  return (
    <div class="excel">
    <h1>Portafolio to Excel</h1>
    <button className="btn btn-primary" onClick={(e) => {exportToCSV(apiData, fileName)}}>Export</button>
    </div>
  );
};