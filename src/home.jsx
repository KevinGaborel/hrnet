import DataTable from './DataTable';

const Home = ()=> {
  const mock = [
    {
      city: "Dieppe",
      dateOfBirth: "07/27/1991",
      department: "Engineering",
      firstName: "Kévin",
      lastName: "Gaborel",
      startDate: "02/06/2023",
      state: "CO",
      street: "400 rue de la boulangerie",
      zipCode: 75418
    },
    {
      city: "Rouen",
      dateOfBirth: "08/07/1971",
      department: "Engineering",
      firstName: "Eden",
      lastName: "Dupond",
      startDate: "02/07/2023",
      state: "KA",
      street: "10 rue pierre qui roule",
      zipCode: 77418
    },
    {
      city: "Lyon",
      dateOfBirth: "10/04/1951",
      department: "Engineering",
      firstName: "Eleonore",
      lastName: "Durand",
      startDate: "12/10/2005",
      state: "PO",
      street: "Rue du petit chemin de la ferme d'à coté",
      zipCode: 95100
    },
    {
      city: "Paris",
      dateOfBirth: "10/08/1981",
      department: "Engineering",
      firstName: "Lionel",
      lastName: "Mbappe",
      startDate: "12/13/2010",
      state: "PO",
      street: "Route du bougrigi",
      zipCode: 76510
    },
    {
      city: "Nantes",
      dateOfBirth: "10/24/1991",
      department: "Marketing",
      firstName: "Kakashi",
      lastName: "Hatake",
      startDate: "02/15/2015",
      state: "AC",
      street: "Chemin de traverse",
      zipCode: 10510
    },
    {
      city: "Paris",
      dateOfBirth: "05/16/2001",
      department: "Marketing",
      firstName: "Jean",
      lastName: "Pierre",
      startDate: "02/01/2019",
      state: "DC",
      street: "Route de la soie",
      zipCode: 109
    }
  ]

  return(
    <table id="employee-table">

      <DataTable 
        data={mock}
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
      />
      
    </table>
  )
}

export default Home;