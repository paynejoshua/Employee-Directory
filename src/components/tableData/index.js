import React from "react"

function tableData(props) {
    return(

      <tbody>
              <tr {...props.key}>
                <td>{props.id}</td>
                <td>{props.firstName}</td>
                <td>{props.lastName}</td>
                <td>{props.email}</td>
                <td>{props.phone}</td>
              </tr>

            
        </tbody>
     
)}

export default tableData