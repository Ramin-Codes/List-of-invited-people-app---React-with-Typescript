import React from 'react'
import { StateType as Props} from '../App'




const List:React.FC<Props> = ({ people }) => {

  return (
    <div className="list-wrapper">
        {
            people?.map((person, index) => {
                return (
                    <div className="person" key={index}>
                        <img src={person.url} alt={person.name} />
                        <h4><small>age: </small>{person.age}</h4>
                        <h4><small>name: </small>{person.name}</h4>
                        <h4><small>note: </small>{person.note}</h4>
                    </div>
                )
            })
        }
    </div>
  )
}

export default List