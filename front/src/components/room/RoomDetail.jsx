import React from 'react'
import "./RoomDetail.scss"
function RoomDetail({room}) {

    return (
        <div>
      <table>
  <tr>
    <th>#</th>
    <th>ID</th>
    <th>Device</th>
    <th>value</th>
  </tr>

  {room.devices.map((device,i)=>{return (
<tr>
    <td>{i+1}</td>
    <td>{device.id}</td>
    <td>{device.name}</td>
    <td>{device.desired.value}</td>
  </tr>
  )})}
  
</table>
        </div>
    )
}

export default RoomDetail
