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
    <div className="excel">
      <h3>Export your portafolio into a excel file:</h3>
      <button className="btn" onClick={(e) => {exportToCSV(apiData, fileName)}}> <span className="iconify" data-icon="charm:download"></span>Export</button>
    </div>
  );
};