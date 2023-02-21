import DataTable from './DataTable';
import mock from './data/dataMock';

const Home = ()=> {

  return(
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
  )
}

export default Home;