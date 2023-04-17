"use strict";

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { render } from "react-dom";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-enterprise";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import ".././App.css";



const GridExample = () => {
  const gridRef = useRef();
  const containerStyle = useMemo(() => ({ width: "100%", height: "100%" }), []);
    const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
    const getRowStyle = params => {
        if (params.node.rowIndex  ===0 || params.node.rowIndex  === 1 || params.node.rowIndex  === 6 || params.node.rowIndex  === 23 || params.type === 'totalColumn') {
            return { fontWeight: 'bold'};
        }
    };
  const [rowData, setRow] = useState([
    {
      group: "sales",
      jan: 287987,
      feb: 237821,
      mar: 2321,
      apr: 23721,
      may: 23821,
      june: 2371,
      july: 23771,
      aug: 2821,
      sept: 23521,
      oct: 7821,
      nov: 2371,
      dec: 2821,
      totals: "cashintotal",
      cum: "Office data",
    },
    {
      group: "loan disbursement",
      jan: 2877,
      feb: 2379,
      mar: 2821,
      apr: 2375,
      may: 67821,
      june: 23731,
      july: 5821,
      aug: 23431,
      sept: 1821,
      oct: 23871,
      nov: 221821,
      dec: 9821,
      cum: "Office data",
      totals: "cashintotal",
    },
    {
      group: "equity",
      jan: 7658,
      feb: 54675,
      mar: 9898,
      apr: 1122,
      may: 2211,
      june: 2121,
      july: 2323,
      aug: 2233,
      sept: 1232,
      oct: 3454,
      nov: 4321,
      dec: 6758,
      cum: "Office data",
      totals: "cashintotal",
    },
    {
      group: "other incoming payments",
      jan: 7987,
      feb: 27821,
      mar: 2378,
      apr: 2321,
      may: 8821,
      june: 9898,
      july: 6574,
      aug: 4821,
      sept: 8769,
      oct: 5467,
      nov: 8769,
      dec: 9898,
      cum: "Office data",
      totals: "cashintotal",
    },
 

    {
      group: "Use of goods/materials",
      jan: 987,
      feb: 821,
      mar: 231,
      apr: 7821,
      may: 824,
      june: 9111,
      july: 675,
      aug: 6754,
      sept: 7890,
      oct: 1212,
      nov: 111,
      dec: 222,
      cum: "Office data",
      totals: "cashoutflow",
    },
    {
      group: "Electricity",
      jan: 9098,
      feb: 4352,
      mar: 7865,
      apr: 87967,
      may: 4821,
      june: 76857,
      july: 5463,
      aug: 9898,
      sept: 54635,
      oct: 8797,
      nov: 6575,
      dec: 65748,
      cum: "Office data",
      totals: "cashoutflow",
    },
    {
      group: "Personal costs",
      jan: 7987,
      feb: 9897,
      mar: 5674,
      apr: 4534,
      may: 7546,
      june: 7685,
      july: 4546,
      aug: 7645,
      sept: 4352,
      oct: 12432,
      nov: 8759,
      dec: 5463,
      cum: "Office data",
      totals: "cashoutflow",
    },
    {
      group: "Rent",
      jan: 54637,
      feb: 5463,
      mar: 8756,
      apr: 76584,
      may: 5464,
      june: 8976,
      july: 6547,
      aug: 8757,
      sept: 5463,
      oct: 9898,
      nov: 7867,
      dec: 5463,
      cum: "Office data",
      totals: "cashoutflow",
    },
    {
      group: "Marketing and advertisement",
      jan: 8796,
      feb: 6574,
      mar: 9864,
      apr: 3453,
      may: 2342,
      june: 7645,
      july: 7587,
      aug: 6574,
      sept: 9867,
      oct: 6574,
      nov: 9897,
      dec: 6574,
      cum: "Office data",
      totals: "cashoutflow",
    },
    {
      group: "Vehicle costs",
      jan: 8786,
      feb: 8685,
      mar: 6575,
      apr: 5464,
      may: 9867,
      june: 6574,
      july: 87685,
      aug: 7685,
      sept: 5643,
      oct: 7685,
      nov: 98575,
      dec: 6574,
      cum: "Office data",
      totals: "cashoutflow",
    },
    {
      group: "Travelling expenses",
      jan: 8769,
      feb: 8675,
      mar: 8975,
      apr: 65748,
      may: 76854,
      june: 8759,
      july: 7685,
      aug: 5346,
      sept: 7568,
      oct: 9867,
      nov: 6647,
      dec: 8576,
      cum: "Office data",
      totals: "cashoutflow",
    },
    {
      group: "Telephone/Internet",
      jan: 2687,
      feb: 7658,
      mar: 9856,
      apr: 5342,
      may: 7465,
      june: 8794,
      july: 3425,
      aug: 7648,
      sept: 9864,
      oct: 7465,
      nov: 8989,
      dec: 6475,
      cum: "Office data",
      totals: "cashoutflow",
    },
    {
      group: "Office supplies",
      jan: 5544,
      feb: 1122,
      mar: 2211,
      apr: 2323,
      may: 8747,
      june: 64574,
      july: 87876,
      aug: 986354,
      sept: 546388,
      oct: 237821,
      nov: 232821,
      dec: 23821,
      cum: "Office data",
      totals: "cashoutflow",
    },
    {
      group: "Maintenance",
      jan: 2222223,
      feb: 874654,
      mar: 987986,
      apr: 763542,
      may: 989654,
      june: 237822,
      july: 236821,
      aug: 237621,
      sept: 764321,
      oct: 337821,
      nov: 877821,
      dec: 37821,
      cum: "Office data",
      totals: "cashoutflow",
    },
    {
      group: "Insurance",
      jan: 7987,
      feb: 24821,
      mar: 26821,
      apr: 65743,
      may: 875957,
      june: 87978,
      july: 98098,
      aug: 90897,
      sept: 657487,
      oct: 875987,
      nov: 65743,
      dec: 875637,
      cum: "Office data",
      totals: "cashoutflow",
    },
    {
      group: "Contributions and fees",
      jan: 7987,
      feb: 89821,
      mar: 75821,
      apr: 7821,
      may: 24321,
      june: 57821,
      july: 77821,
      aug: 52821,
      sept: 24821,
      oct: 25421,
      nov: 77821,
      dec: 97821,
      cum: "Office data",
      totals: "cashoutflow",
    },
    {
      group: "Leasing",
      jan: 87465,
      feb: 7864,
      mar: 8765,
      apr: 9898,
      may: 1122,
      june: 2321,
      july: 8796,
      aug: 9675,
      sept: 8798,
      oct: 63746,
      nov: 7648,
      dec: 89364,
      cum: "Office data",
      totals: "cashoutflow",
    },
    {
      group: "Advice and bookkeeping",
      jan: 87496,
      feb: 645745,
      mar: 87865,
      apr: 4352,
      may: 978776,
      june: 74563,
      july: 84763,
      aug: 98364,
      sept: 87364,
      oct: 54637,
      nov: 84632,
      dec: 36474,
      cum: "Office data",
      totals: "cashoutflow",
    },
    {
      group: "Cost of capital",
      jan: 74639,
      feb: 9245,
      mar: 64756,
      apr: 87356,
      may: 64754,
      june: 84633,
      july: 67821,
      aug: 98476,
      sept: 54637,
      oct: 74633,
      nov: 9748,
      dec: 64658,
      cum: "Office data",
      totals: "cashoutflow",
    },
    {
      group: "Repayment",
      jan: 64583,
      feb: 55784,
      mar: 94757,
      apr: 94653,
      may: 23524,
      june: 46354,
      july: 98594,
      aug: 7586,
      sept: 74684,
      oct: 8756,
      nov: 64855,
      dec: 5463,
      cum: "Office data",
      totals: "cashoutflow",
    },
    {
      group: "Cash  (Total)",
      jan: "",
      feb: "",
      mar: "",
      apr: "",
      may: "",
      june: "",
      july: "",
      aug: "",
      sept: "",
      oct: "",
      nov: "",
      dec: "",
      cum: "Office data",
      totals: "Calculation",
    },
    {
      group: "Cumulative",
      jan: "",
      feb: "",
      mar: "",
      apr: "",
      may: "",
      june: "",
      july: "",
      aug: "",
      sept: "",
      oct: "",
      nov: "",
      dec: "",
      cum: "Office data",
      totals: "Calculation",
    },
    // { group: "Cumulative", jan: "", feb: "", mar: "", apr: "", may: "", june: "", july: "", aug: "", sept: "", oct: "", nov: "", dec: "" },
    {
      group: "Credit Line",
      jan: 300000,
      feb: 300000,
      mar: 300000,
      apr: 300000,
      may: 300000,
      june: 300000,
      july: 300000,
      aug: 300000,
      sept: 300000,
      oct: 300000,
      nov: 300000,
      dec: 300000,
      cum: "Office data",
      totals: "Calculation",
    },
    
  ]);
  

  const first4Items = rowData.slice(0, 4);
  const last16Items = rowData.slice(4, 20);

  useEffect(() => {
    print();
  }, []);
  function print() {
    var result4jan = 0;
    var result4feb = 0;
    var result4mar = 0;
    var result4apr = 0;
    var result4may = 0;
    var result4jun = 0;
    var result4july = 0;
    var result4aug = 0;
    var result4sept = 0;
    var result4oct = 0;
    var result4nov = 0;
    var result4dec = 0;

    var resultLastjan = 0;
    var resultLastfeb = 0;
    var resultLastmar = 0;
    var resultLastapr = 0;
    var resultLastmay = 0;
    var resultLastjun = 0;
    var resultLastjuly = 0;
    var resultLastaug = 0;
    var resultLastsept = 0;
    var resultLastoct = 0;
    var resultLastnov = 0;
    var resultLastdec = 0;
    console.log(first4Items, last16Items);
    first4Items.forEach(function (item) {
      result4jan += item.jan;
      result4feb += item.feb;
      result4mar += item.mar;
      result4apr += item.apr;
      result4may += item.may;
      result4jun += item.june;
      result4july += item.july;
      result4aug += item.aug;
      result4sept += item.sept;
      result4oct += item.oct;
      result4nov += item.nov;
      result4dec += item.dec;
    });
    console.log(result4jan);
    last16Items.forEach(function (item) {
      console.log(item);
      resultLastjan += item.jan;
      resultLastfeb += item.feb;
      resultLastmar += item.mar;
      resultLastapr += item.apr;
      resultLastmay += item.may;
      resultLastjun += item.june;
      resultLastjuly += item.july;
      resultLastaug += item.aug;
      resultLastsept += item.sept;
      resultLastoct += item.oct;
      resultLastnov += item.nov;
      resultLastdec += item.dec;
    });

    console.log(resultLastjan, resultLastfeb);

    const filterObj = rowData.filter((e) => e.group == "Cash  (Total)");

    console.log(filterObj[0]);
    filterObj[0].jan = result4jan - resultLastjan;
    filterObj[0].feb = result4feb - resultLastfeb;
    filterObj[0].mar = result4mar - resultLastmar;
    filterObj[0].apr = result4apr - resultLastapr;
    filterObj[0].may = result4may - resultLastmay;
    filterObj[0].june = result4jun - resultLastjun;
    filterObj[0].july = result4july - resultLastjuly;
    filterObj[0].aug = result4aug - resultLastaug;
    filterObj[0].sept = result4sept - resultLastsept;
    filterObj[0].oct = result4oct - resultLastoct;
    filterObj[0].nov = result4nov - resultLastnov;
    filterObj[0].dec = result4dec - resultLastdec;
    console.log(first4Items, last16Items);
    console.log(result4jan - resultLastjan);
    console.log(filterObj[0]);
    cumulative();
    setRow([...rowData]);
  }

  function cumulative() {
    const filterObj1 = rowData.filter((e) => e.group == "Cash  (Total)");
    const filterObj2 = rowData.filter((e) => e.group == "Cumulative");

    filterObj2[0].jan = 369099;
    filterObj2[0].feb = filterObj2[0].jan + filterObj1[0].feb;
    filterObj2[0].mar = filterObj2[0].feb + filterObj1[0].mar;
    filterObj2[0].apr = filterObj2[0].mar + filterObj1[0].apr;
    filterObj2[0].may = filterObj2[0].apr + filterObj1[0].may;
    filterObj2[0].june = filterObj2[0].may + filterObj1[0].june;
    filterObj2[0].july = filterObj2[0].june + filterObj1[0].july;
    filterObj2[0].aug = filterObj2[0].july + filterObj1[0].aug;
    filterObj2[0].sept = filterObj2[0].aug + filterObj1[0].sept;
    filterObj2[0].oct = filterObj2[0].sept + filterObj1[0].oct;
    filterObj2[0].nov = filterObj2[0].oct + filterObj1[0].nov;
    filterObj2[0].dec = filterObj2[0].nov + filterObj1[0].dec;

    console.log(filterObj1[0], filterObj2[0]);
  }

  const [columnDefs, setColumnDefs] = useState([
    // do NOT hide this column, it's needed for editing
    { field: "cum", rowGroup: true, hide: true, value: "max", pinned: "left" },
    { field: "totals", rowGroup: true, hide: true },
    { field: "group" },
    { field: "jan", type: "valueColumn" },
    { field: "feb", type: "valueColumn" },
    { field: "mar", type: "valueColumn" },
    { field: "apr", type: "valueColumn" },
    { field: "may", type: "valueColumn" },
    { field: "june", type: "valueColumn" },
    { field: "july", type: "valueColumn" },
    { field: "aug", type: "valueColumn" },
    { field: "sept", type: "valueColumn" },
    { field: "oct", type: "valueColumn" },
    { field: "nov", type: "valueColumn" },
    { field: "dec", type: "valueColumn" },

    {
      headerName: "Total",
      type: "totalColumn",

      // we use getValue() instead of data.a so that it gets the aggregated values at the group level
      valueGetter:
        'getValue("jan") + getValue("feb") + getValue("mar") + getValue("apr") +getValue("may") +getValue("june") +getValue("july") +getValue("aug") +getValue("sept")+ getValue("oct")+ getValue("nov") +getValue("dec")',
      pinned: "right",
    },
  ]);
  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      resizable: true,
      minWidth: 300,
      sortable: true,
      filter: true,
    };
  }, []);
  const isGroupOpenByDefault = (params) => {
    return (
      (params.field === "totals" && params.key === "cashintotal") ||
        (params.field === "totals" && params.key === "cashoutflow") ||
        (params.field === "cum" && params.key === "Office data") ||
      (params.field === "totals" && params.key === "Calculation")
    );
  };
  const autoGroupColumnDef = useMemo(() => {
    return {
      minWidth: 200,
    };
  }, []);
  const columnTypes = useMemo(() => {
    return {
      valueColumn: {
        editable: true,
        aggFunc: "sum",
        valueParser: "Number(newValue)",
        cellClass: "number-cell",
        cellRenderer: "agAnimateShowChangeCellRenderer",
        filter: "agNumberColumnFilter",
      },
      totalColumn: {
        cellRenderer: "agAnimateShowChangeCellRenderer",
        cellClass: "number-cell",
      },
    };
  }, []);

  const onCellValueChanged = useCallback(async (params) => {
    var changedData = [params.data];
    await gridRef.current.api.applyTransaction({ update: changedData });
    // setValueChange(!valueChange);
    await print();
  }, []);

  return (
    <div style={containerStyle}>
      <div style={gridStyle} className="ag-theme-alpine">
        <AgGridReact
          ref={gridRef}
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          autoGroupColumnDef={autoGroupColumnDef}
          columnTypes={columnTypes}
                  groupDefaultExpanded={1}
                  isGroupOpenByDefault={isGroupOpenByDefault}
                  getRowStyle = {getRowStyle}
          suppressAggFuncInHeader={true}
          animateRows={true}
          //   onCellClicked={print}
          //   onCellDoubleClicked={cumulative}
          onCellValueChanged={onCellValueChanged}
        ></AgGridReact>
      </div>
    </div>
  );
};

export default GridExample;
