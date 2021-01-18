import React, { useState, useEffect } from "react";
import {Table, Form} from "react-bootstrap";
import API from "../utils/API"
import Head from "../components/tableHead";
import Row from "../components/tableRow";
import Column from "../components/tableColumn";
import TableData from "../components/tableData";

function Home() {

  const [isLoading, setLoading] = useState(true);
  const [employees, setEmployees] = useState([]);
  const [filter, setFilter] = useState("")

  useEffect(() => {
    API.getEmployees()
      .then(res => {
        setEmployees(res.data.results);
        setLoading(false)
      })
  }, []);

  if (isLoading) {
    return <div> Loading...</div>
  }

  const sortColumn = (property) => {
    let employeesCopy = [...employees]
    employeesCopy.sort(function (employee1, employee2) {
      const e1 = property.split('.').reduce((o,i)=>o[i], employee1)
      const e2 = property.split('.').reduce((o,i)=>o[i], employee2)
      if( e1 > e2 ) return 1;
      if( e1 < e2 ) return -1;
      return 0;
    })
    console.log(employeesCopy)
    setEmployees(employeesCopy)
  }

  return (
    <div>
      <Form>
        <Form.Control type="text" placeholder="Enter Text to Filter By" onChange={(e) => setFilter(e.target.value.toLowerCase())}></Form.Control>
      </Form>
      <Table responsive striped bordered hover size="sm">
        <Head></Head>
        <Row></Row>
        <Column onClick={sortColumn}></Column>

        
        {employees.filter(employee => 
        employee.name.first.toLowerCase().includes(filter) || 
        employee.name.last.toLowerCase().includes(filter) ||
        employee.id.value.toLowerCase().includes(filter) ||
        employee.email.toLowerCase().includes(filter) ||
        employee.phone.includes(filter)

        ).map(employee => (
          <TableData
            key={employee.login.uuid}
            id={employee.id.value}
            firstName={employee.name.first}
            lastName={employee.name.last}
            email={employee.email}
            phone={employee.phone}

          />
        ))}
      </Table>
    </div>

  )
};

export default Home;