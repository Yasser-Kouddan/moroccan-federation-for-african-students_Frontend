import { useMemo, useEffect, useState } from 'react';
import API from "../../api/ApiInstance";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';

// //nested data is ok, see accessorKeys in ColumnDef below
// const data = [
//   {
//     name: {
//       firstName: 'John',
//       lastName: 'Doe',
//     },
//     address: '261 Erdman Ford',
//     city: 'East Daphne',
//     state: 'Kentucky',
//   },
//   {
//     name: {
//       firstName: 'Jane',
//       lastName: 'Doe',
//     },
//     address: '769 Dominic Grove',
//     city: 'Columbus',
//     state: 'Ohio',
//   },
//   {
//     name: {
//       firstName: 'Joe',
//       lastName: 'Doe',
//     },
//     address: '566 Brakus Inlet',
//     city: 'South Linda',
//     state: 'West Virginia',
//   },
//   {
//     name: {
//       firstName: 'Kevin',
//       lastName: 'Vandy',
//     },
//     address: '722 Emie Stream',
//     city: 'Lincoln',
//     state: 'Nebraska',
//   },
//   {
//     name: {
//       firstName: 'Joshua',
//       lastName: 'Rolluffs',
//     },
//     address: '32188 Larkin Turnpike',
//     city: 'Charleston',
//     state: 'South Carolina',
//   },
// ];

const TableMembers = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await API.get('/members');
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
        header: 'Prénom',
        size: 150,
      },
      {
        accessorKey: 'surnames',
        header: 'Nom',
        size: 150,
      },
      {
        accessorKey: 'description', //normal accessorKey
        header: 'Description',
        size: 200,
      },
      {
        accessorKey: 'role_id',
        header: 'Rôle',
        size: 150,
      },
      {
        accessorKey: 'filliere',
        header: 'Filiére',
        size: 150,
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


export default TableMembers;
