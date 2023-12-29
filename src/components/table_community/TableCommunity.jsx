import { useMemo, useEffect, useState } from 'react';
import API from "../../api/ApiInstance";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';

const TableCommunity = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await API.get('/community');
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error:", error);
        alert("Error occurred while fetching data. See console for details.");
      }
    };

    fetchData();
  }, []);
  

  //should be memoized or stable
  const columns = useMemo(
    () => [
      {
        accessorKey: 'name', //access nested data with dot notation
        header: 'Nom de la communauté',
        size: 150,
      },
      {
        accessorKey: 'descriptions',
        header: 'Description',
        size: 150,
      },
      {
        accessorKey: 'pays', //normal accessorKey
        header: 'Pays',
        size: 200,
      },
    ],
    [],
  );

  const table = useMaterialReactTable({
    columns,
    data, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    initialState: { density: 'compact' },
  });

  return (
    <>
      <h2 style={{marginBottom: 18}}>Liste des communauté au sein de la fédération</h2>
      <MaterialReactTable table={table} />
    </>
  );
};


export default TableCommunity;
