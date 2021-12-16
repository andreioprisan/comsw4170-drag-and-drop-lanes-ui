'use strict';

import React, { useState } from 'react';
import { render } from 'react-dom';
import { AgGridReact, AgGridColumn } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const GridExample = () => {
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);
  const [rowData, setRowData] = useState(null);

  const onGridReady = (params) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);

    const updateData = (data) => params.api.setRowData(data);

	const sampleData = [
		{
			"track": "Recording 1",
			"type": "Audio",
			"length": "1:30",
			"0:30": "======",
			"1:00": "======",
			"1:30": "======",
		},
		{
			"track": "Recording 1",
			"type": "Video",
			"length": "2:00",
			"0:30": "======",
			"1:00": "======",
			"1:30": "======",
			"2:00": "======",
		},
		{
			"track": "Recording 2",
			"type": "Audio",
			"length": "1:30",
			"0:30": "",
			"1:00": "======",
			"1:30": "======",
			"2:00": "======",
		},
		{
			"track": "Recording 3",
			"type": "Audio",
			"length": "1:00",
			"0:30": "",
			"1:00": "",
			"1:30": "======",
			"2:00": "======",
		},
		{
			"track": "Recording 4",
			"type": "Audio",
			"length": "2:00",
			"0:30": "",
			"1:00": "",
			"1:30": "======",
			"2:00": "======",
			"2:30": "======",
			"3:00": "======",
		},
		{
			"track": "Recording 4",
			"type": "Video",
			"length": "2:00",
			"0:30": "",
			"1:00": "",
			"1:30": "======",
			"2:00": "======",
			"2:30": "======",
			"3:00": "======",
		},
		{
			"track": "Recording 5",
			"type": "Audio",
			"length": "3:00",
			"0:30": "",
			"1:00": "",
			"1:30": "======",
			"2:00": "======",
			"2:30": "======",
			"3:00": "======",
			"3:30": "======",
			"4:00": "======",
		}
	]

    updateData(sampleData);
  };

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div
        id="myGrid"
        style={{
          height: '100%',
          width: '100%',
        }}
        className="ag-theme-alpine"
      >
        <AgGridReact
          defaultColDef={{
            width: 170,
            sortable: true,
            filter: true,
			editable: true,
			resizable: true,
          }}
          rowDragManaged={true}
          suppressMoveWhenRowDragging={true}
          animateRows={true}
          onGridReady={onGridReady}
          rowData={rowData}
        >
          <AgGridColumn field="track" rowDrag={true} />
          <AgGridColumn field="type" />
          <AgGridColumn field="length" />
          <AgGridColumn field="0:30" width={100} />
          <AgGridColumn field="1:00" />
          <AgGridColumn field="1:30" />
          <AgGridColumn field="2:00" />
          <AgGridColumn field="2:30" />
          <AgGridColumn field="3:00" />
          <AgGridColumn field="3:30" />
          <AgGridColumn field="4:00" />
          <AgGridColumn field="4:30" />
        </AgGridReact>
      </div>
    </div>
  );
};

render(<GridExample></GridExample>, document.querySelector('#root'));
