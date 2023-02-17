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
      street: "400 rue de la boulangerie",
      zipCode: "75418"
    },
    {
      city: "Rouen",
      dateOfBirth: "07/08/1971",
      department: "Engineering",
      firstName: "Eden",
      lastName: "Dupond",
      startDate: "07/02/2023",
      state: "KA",
      street: "10 rue pierre qui roule",
      zipCode: "77418"
    },
    {
      city: "Lyon",
      dateOfBirth: "04/10/1951",
      department: "Engineering",
      firstName: "Eleonore",
      lastName: "Durand",
      startDate: "10/12/2005",
      state: "PO",
      street: "Rue du petit chemin de la ferme d'à coté",
      zipCode: "95100"
    },
    {
      city: "Paris",
      dateOfBirth: "08/10/1981",
      department: "Engineering",
      firstName: "Lionel",
      lastName: "Mbappe",
      startDate: "10/12/2010",
      state: "PO",
      street: "Route du bougrigi",
      zipCode: "76510"
    },
    {
      city: "Nantes",
      dateOfBirth: "24/10/1991",
      department: "Marketing",
      firstName: "Kakashi",
      lastName: "Hatake",
      startDate: "15/02/2015",
      state: "AC",
      street: "Chemin de traverse",
      zipCode: "10510"
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