import React from 'react';
import { NewRoom } from  './NewRoom';

export const House = (props) => {
    const { house, renderHouse } = props;

    const deleteRoom = (roomId) => {
        const renderedHouse = {
            ...house, 
            rooms: house.rooms.filter((x) => x._id !== roomId)
        };
        renderHouse(renderedHouse);
    }

    const addNewRoom = (room) => renderHouse({...house, rooms: [...house.rooms, room]});

    const rooms = () => (
        <ul>
            {house.rooms.map((room, index) => (
              <li key={index}>
                  <label>{`${room.name} Area: ${room.area}`}</label>
                  <button onClick={(e) => deleteRoom(room._id)}>Remove</button>
              </li>  
            ))}
        </ul>
    )

     return (
         <div>
           <h1>{house.name}</h1>
           {
               rooms({ rooms, houseId: house._id, deleteRoom})
           } 
           <NewRoom addNewRoom={addNewRoom} />
         </div>
     );           
};