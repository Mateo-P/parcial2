import {useState,useEffect} from 'react'
import { useParams } from "react-router-dom";
import { getHomeById } from "../services/utils";
import {RoomCard} from "../components/card/RoomCard"
import RoomDetail  from "../components/room/RoomDetail"
import "./homes-list/HomesList.scss";
import { FormattedMessage } from 'react-intl';
import CustomPieChart from "../components/PieChart"
function RoomsList() {
      let { id } = useParams();
    const [selectedRoom, setSelectedRoom] = useState(null);
    const [rooms, setrooms] = useState([])
    const [data,setData] =useState([]);
  useEffect(() => {
      if(id){
        getHomeById(id).then(({rooms}) =>{
setrooms(rooms);
rooms.forEach(({name,powerUsage})=>{
  setData(data=>[...data, {name, value:powerUsage.value }])
});
        } );
      }
    
  }, [id]);
console.log(data);
  const selectRoomCallBack=(id)=>(e)=>{

    let selectedRoom = rooms.filter((room)=> room._id===id);
    setSelectedRoom(selectedRoom[0]);
  }
    return (
      <div className="container home">
              <h1>
        <FormattedMessage id="myRooms"/>
      </h1>
        <div className="homeList" style={{alignItems:"space-between"}}>
            {rooms && rooms.map((room)=>(
                <RoomCard selectCallback={selectRoomCallBack} props={room}/>
            ))}
             <div style={{marginLeft:"8px"}}>
                {selectedRoom && <RoomDetail room={selectedRoom}/>}
             </div>
        </div>
            <h3>   <FormattedMessage id="stats" /></h3>
        <div style={{width:"100%", display:"flex",justifyContent:"center"}}>
      
          <CustomPieChart data={data}/>
        </div>
              
        </div>
        
    )
}

export default RoomsList
