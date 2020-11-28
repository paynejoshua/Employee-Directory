import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import API from "../utils/API"
import Head from "../components/tableHead";
import Row from "../components/tableRow";
import Column from "../components/tableColumn";
import TableData from "../components/tableData";

function Home() {

  const [isLoading, setLoading] = useState(true);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    API.getEmployees()
      .then(res => {
        setEmployees(res.data.results);
        setLoading(false)
      })
  }, []);

  console.log("1", employees)

  if (isLoading) {
    return <div> Loading...</div>
  }

  return (
    <div>
      <Table responsive striped bordered hover size="sm">
        <Head></Head>
        <Row></Row>
        <Column></Column>


        {employees.map(employee => (
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