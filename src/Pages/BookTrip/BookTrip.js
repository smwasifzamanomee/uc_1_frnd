import React, { useState } from 'react'
import FormInput from '../../Components/Form/FormInput';
import { destinationData, pickupData, ThingsYouNeedData } from '../../Data/data';
import { FaFacebook, FaInstagram , FaTwitter,  } from 'react-icons/fa';
import Card from '../../Components/Ui/Card';
import Container from '../../Components/Container';
import DropDown from '../../Components/Ui/DropDown';

const BookTrip = () => {
    const [pickUpValue, setPickUpValue] = useState("");
  const [destinationValue, setDestinationValue] = useState('');
  const [isTrue, setIsTrue] = useState(null);
  // const [filteredItems, setFilteredItems] = useState([]);

  const items = [
    {id: 1, name: 'Bangladesh'},
    {id: 2, name: 'England'},
    {id: 3, name: 'Franch'},
    {id: 4, name: 'India'},
    {id: 5, name: 'Pakistan'},
    {id: 6, name: 'Switzerland'},
    {id: 7, name: 'Finland'},
    {id: 8, name: 'Australia'},
    {id: 9, name: 'Norway'},
    {id: 10, name: 'Denmark'},
    {id: 11, name: 'Portugal'},
    {id: 12, name: 'Germany'},
    {id: 13, name: 'Iceland'},
    {id: 14, name: 'Lithunia'},
    {id: 15, name: 'Japan'},
    {id: 16, name: 'Myanmar'},
    {id: 17, name: 'Albania'},
    {id: 18, name: 'Qatar'},
    {id: 19, name: 'Dubai'},
    {id: 20, name: 'Saudi Arabia'},
  ]

  const filteredItems = items.filter(item => {
    if(destinationValue === '') return 
    return item.name.toLowerCase().includes(destinationValue.toLowerCase());
  })

  return (
     <Container>
        <h2> Hire vehicle for your next trip</h2>
        <p>we provide the best services for our passenger</p>
        <div>
        <div className='w-80 min-h-max p-8 '>
        <h4>{}</h4>
        <input value={destinationValue} type={'text'} onChange={(e) => setDestinationValue(e.target.value)}/>
        <DropDown items={filteredItems}/>
        </div>
        </div>
      </Container> 
  )
}

export default BookTrip