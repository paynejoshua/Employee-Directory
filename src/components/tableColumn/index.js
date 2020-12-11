import React from "react"

function Column(props) {


    return (
    <>
    <th id="id.value" onClick={(e) => props.onClick(e.target.id)}>ID</th>
    <th id="name.first" onClick={(e) => props.onClick(e.target.id)}>First Name</th>
    <th id="name.last" onClick={(e) => props.onClick(e.target.id)}>Last Name</th>
    <th id="email" onClick={(e) => props.onClick(e.target.id)}>Email</th>
    <th id="phone" onClick={(e) => props.onClick(e.target.id)}>Phone</th>
    </>
)
}

export default Column

