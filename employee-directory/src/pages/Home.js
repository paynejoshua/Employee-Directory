import React from "react";
import Table  from "react-bootstrap/Table";

// create use effect to run api call to get data from db

// once data is returned use useState to pass that information to this component

const Home = () => {
  return (
     <div>
     <Table responsive striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>email</th>
            <th>Job Title</th>
            <th>Manager</th>
            <th>Date Hired</th>
          </tr>
        </thead>

        <thead>
          <tr>
            <td>RowID</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>marko@thecompany.com</td>
            <td>It Specialist</td>
            <td>Tim Robbins</td>
            <td>10/02/2015</td>
          </tr>
        </thead>
        <thead>
          <tr>
            <td>2</td>
            <td>John</td>
            <td>Smith</td>
            <td>johns@thecompany.com</td>
            <td>It Specialist</td>
            <td>Tim Robbins</td>
            <td>10/02/2016</td>
          </tr>
        </thead>
        <thead>
          <tr>
            <td>3</td>
            <td>Mark</td>
            <td>Robbins</td>
            <td>markr@thecompany.com</td>
            <td>It Manager</td>
            <td>Bill Boykins</td>
            <td>10/02/2012</td>
          </tr>
        </thead>
      </Table>
      </div>

  );
};

export default Home;
