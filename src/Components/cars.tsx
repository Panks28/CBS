import React, { useState, useMemo } from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { RootState } from '../store'
import { CarDataType } from '../Types/carsTypes'
import { useForm, SubmitHandler } from 'react-hook-form'
import { MaterialReactTable, MRT_PaginationState, type MRT_ColumnDef } from 'material-react-table'
import { Button, Input, InputLabel, MenuItem, Select } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';

enum CategoryEnum {
  smallCar = "Small Car",
  estateCar = "Estate Car",
  van = "Van"
}

enum FuelTypeEnum {
  petrol = "Petrol",
  diesel = "Diesel"
}

interface ICarDetailsInput {
  regnumber: string,
  category: string,
  make: string,
  model: string,
  fueltype: string,
  priceperday: number
  status: boolean
}


function Cars() {

  const state = useSelector((state: RootState) => state.carList)
  const [carsList, setCarsList] = useState(state)
  const { register, handleSubmit } = useForm<ICarDetailsInput>()

  const onSubmit: SubmitHandler<ICarDetailsInput> = (data) => console.log(data, "Form Data")

  const columns = useMemo<MRT_ColumnDef<ICarDetailsInput>[]>(
    () => [
      {
        accessorKey: 'regnumber',
        header: 'Registration Number',
        size: 150,
      },
      {
        accessorKey: 'category',
        header: 'Category',
        size: 150,
      },
      {
        accessorKey: 'make',
        header: 'Make',
        size: 200,
      },
      {
        accessorKey: 'model',
        header: 'Model',
        size: 150,
      },
      {
        accessorKey: 'fueltype',
        header: 'Fuel Type',
        size: 150,
      },
      {
        accessorKey: 'priceperday',
        header: 'Price Per Day',
        size: 150,
      },
      {
        accessorKey: 'status',
        header: 'Hiring Status',

      },
    ],
    [],
  );

  const [pagination, setPagination] = useState<MRT_PaginationState>({
    pageIndex: 0,
    pageSize: 3,
  });

  return (
    <div>
      <div>
        <h1>Add a New Car</h1>
        <div style={{}}>
          <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', alignContent: 'center' }}>
            <InputLabel>Registration Number</InputLabel>
            <Input style={{ width: '180px', marginTop: '5px' }} {...register("regnumber", { required: true, maxLength: 50 })} />
            <InputLabel style={{ marginTop: '10px' }}>Category</InputLabel>
            <Select labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper" style={{ width: '180px', marginTop: '5px' }} {...register("category")} label='Category'>
              <MenuItem value=""> <em>None</em> </MenuItem>
              <MenuItem value='smallCar'>Small Car</MenuItem>
              <MenuItem value='estateCar'>Estate Car</MenuItem>
              <MenuItem value='van'>Van</MenuItem>
            </Select>
            <InputLabel style={{ marginTop: '10px' }}>Make</InputLabel>
            <Input style={{ width: '180px', marginTop: '5px' }} {...register("make", { required: true, maxLength: 50 })} />
            <InputLabel style={{ marginTop: '10px' }}>Model</InputLabel>
            <Input style={{ width: '180px', marginTop: '5px' }} {...register("model", { required: true, maxLength: 50 })} />
            <InputLabel style={{ marginTop: '10px' }}>Fuel Type</InputLabel>
            <Select style={{ width: '180px', marginTop: '5px' }} {...register("fueltype")} label='Select' >
              <MenuItem value=""> <em>Select</em> </MenuItem>
              <MenuItem value='petrol'>Petrol</MenuItem>
              <MenuItem value='diesel'>Diesel</MenuItem>
            </Select>
            <InputLabel style={{ marginTop: '10px' }}>Price Per Day($)</InputLabel>
            <Input style={{ width: '180px', marginTop: '5px' }} type='number' {...register("priceperday", { required: true })} />
            <Button variant='contained' type='submit' style={{ width: '160px', marginTop: '20px', border: '10px' }} startIcon={<AddIcon />}>Add Car</Button>
          </form>
        </div>
      </div>
      <h2 style={{ textAlign: 'center', color: 'white', textShadow: '1.5px 1.5px 1,5px grey' }}>Car Database</h2>
      <MaterialReactTable columns={columns}
        data={carsList}
        muiTablePaperProps={{
          elevation: 6, //change the mui box shadow
          //customize paper styless
          sx: {
            borderRadius: '4',
            opacity: '0.85',
          },
        }}
        muiTableBodyProps={{
          sx: {

            backgroundColor: 'black',
          },
        }}
        muiTableBodyCellProps={{
          sx: {
            borderRight: '2px solid #e0e0e0', //add a border between columns
          },
        }}
        onPaginationChange={setPagination}
        state={{ pagination }} />;
    </div>
  )
}

export default Cars