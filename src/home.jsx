import dataTable from './dataTable';

const Home = ()=> {
  const mock = [
    {
      city: "Dieppe",
      dateOfBirth: "27/07/1991",
      department: "Engineering",
      firstName: "Kévin",
      lastName: "Gaborel",
      startDate: "06/02/2023",
      state: "CO",
      street: "nc",
      zipCode: "75418"
    },
    {
      city: "Rouen",
      dateOfBirth: "07/08/1971",
      department: "Engineering",
      firstName: "Eden",
      lastName: "Gaborel",
      startDate: "07/02/2023",
      state: "KA",
      street: "ncghjhgyjhhhhh",
      zipCode: "77418"
    }
  ]

  return(
    <table id="employee-table">
      {dataTable(  
        {data: mock,
        columns: [
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
      )}
    </table>
  )
}

export default Home;