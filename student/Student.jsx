import React from 'react'

const Student = (props) => {
  console.log(props)
    let data=props.data
  return (
    <div>
        <table border="2px">
            <tr>
              <th>name</th>
              <th>age</th>
              <th>dob</th>
            </tr>
            {
           data.map((x)=>{
              return <tr>
                  <td>{x.name}</td>
                  <td>{x.age}</td>
                  <td>{x.dob}</td>
                </tr>
            })}

        </table>
    </div>
  )
}

export default Student