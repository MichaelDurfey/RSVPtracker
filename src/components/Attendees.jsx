import React from 'react';
import Attendee from './Attendee'

const Attendees = (props) => {
  return (
    <div className="attendees">
      { props.attendees.map((i, idx) => {
        return <Attendee removeItem= {props.removeItem} handleSubmit= {props.handleSubmit} idx={idx} name={i.name} confirmed={i.confirmed} guests={i.guests} />
      })}  
    </div>
  )
}

export default Attendees
