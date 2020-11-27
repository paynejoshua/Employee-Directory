import React, {useState, useEffect}  from "react";
import Table from "react-bootstrap/Table";
// import API from "../utils/API"
import { Head, Row, Column } from "../components/tableColumn"
import axios from "axios"

function Home() {

  const [isLoading, setLoading] = useState(true);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=10")
    .then(res => {
      setEmployees(res.data.results);
      setLoading(false)
    })
  }, []);
  
  console.log("1", employees)

  if (isLoading) {
    return <div> Loading...</div>
  }

  // componentDidMount() {
  //   axios.get("https://randomuser.me/api/?results=10")
  //   .then(res => {
  //     const employees = res.data.results
  //     this.setState({ employees: [employees] })
      
  //   }).catch(err => console.log(err))
  // }

    return (
    <div>
      <Table responsive striped bordered hover size="sm">
        <Head>
          <Row>
            <Column></Column>
          </Row>
        </Head>

        <thead>
          <tr>
            <th>id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>email</th>
            <th>Phone</th>
           
          </tr>
        </thead>
        <tbody>
              { console.log("2", employees)}

              { employees.map(employee => 
          
          <tr>
 
            <td>{employee.id}</td>
            <td>{employee.name.first}</td>
            <td>{employee.name.last}</td>
            <td>{employee.email}</td>
            <td >{employee.phone}</td>
            
            
            </tr>
            )}
        </tbody>
      </Table>
    </div>

  )
};

export default  Home;