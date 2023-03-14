# import the array this way:

### `import DataTable from '@kevin-gaborel/hrnet';`

## Then create the component by giving it the data, the title of the columns, and the data corresponding to each column.

    <DataTable
      data={yourData}
      columns = {[
      { title: 'First Name', data: 'firstName' },
      { title: 'Last Name', data: 'lastName' },
      { title: 'Start Date', data: 'startDate' },
      { title: 'Department', data: 'department' },
      { title: 'Date of Birth', data: 'dateOfBirth' },
      { title: 'Street', data: 'street' },
      { title: 'City', data: 'city' },
      { title: 'State', data: 'state' },
      { title: 'Zip Code', data: 'zipCode' }
      ]}
    />`