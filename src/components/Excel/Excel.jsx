import React, { useContext } from "react";
import coinGecko from "../../api/coinGecko.js";
import { WatchListContext } from "../../context/watchListContext";
import {ExportToExcel} from './ExcelExport'

function Excel() {
  const [data, setData] = React.useState([])
  const { watchList } = useContext(WatchListContext);
  const fileName = "Portafolio"; // here enter filename for your excel file

  React.useEffect(() => {
    const fetchData = () =>{
        coinGecko.get("/coins/markets/", {
            params: {
              vs_currency: "usd",
              ids: watchList.join(",")
            },
          }).then(r => setData(r.data) )
    }
    fetchData()
  }, [watchList])

  return (
    <div>
      <ExportToExcel apiData={data} fileName={fileName} />
    </div>
  );
}

export default Excel;