import React from 'react'
import {useParams} from 'react-router-dom';

const HouseEntry = (props) => {
  const paramsObj = useParams();
  console.log(props.houses, paramsObj.id)
  const housedetail = props.houses.find(ele => ele._id == paramsObj.id)
  return (
    <div className='row text-center'>
      <img src={`/imgs/${housedetail?.photo}`} alt='housephoto'
        className='img-thumbnail rounded mx-auto d-block'
        style={{'width': '30%'}}/>
      <h5>County: {housedetail?.county}</h5>
      <h5>Address: {housedetail?.address}</h5>
      <h5>Price: ${housedetail?.price}</h5>
      <h6>{(housedetail?.description)}</h6>
      </div>
  )
}

export default HouseEntry
