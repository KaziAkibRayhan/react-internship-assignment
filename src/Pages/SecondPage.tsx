import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useState } from 'react';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'POST ID', width: 100 },
  {
    field: 'title',
    headerName: 'Post Title',
    width: 300,
    editable: true,
  },
  {
    field: 'body',
    headerName: 'Post Description',
    width: 800,
    editable: true,
  },
];

export default function DataGridDemo() {

    const [rowsData, setRowsData] = useState( [] as any);
  interface PaginatedResponse<T> {
    data: T[];
    nextPageUrl?: string;
    previousPageUrl?: string;
  }

  interface Post {
    title: string;
    content: string;
    tags?: string[];
  }

  function loadDataFromApi() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data: PaginatedResponse<Post>) => setRowsData(data));
  }
  loadDataFromApi();

  return (
    <Box sx={{ height: 800, width: '100%' }}>
      <DataGrid
        rows={rowsData}
        columns={columns}
        pageSize={50}
        rowsPerPageOptions={[5]}
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}



