import React, { useState } from 'react'
import { StateType } from '../App'



interface Props {
    people: StateType["people"];
    setPeople: React.Dispatch<React.SetStateAction<StateType["people"]>>;
}


const AddToList:React.FC<Props> = ({ people, setPeople }) => {
    const [input, setInput] = useState({
        name: '',
        age: '',
        url: '',
        note: ''
    })


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    

    const handleClick = (): void => {

        if (!input.name || !input.age  || !input.url) return

        setPeople([
            ...people, 
            {
                name: input.name,
                age: parseInt(input.age),
                url: input.url,
                note: input.note
            }
        ])

        setInput({
            name: '',
            age: '',
            url: '',
            note: ''
        })
    }

    
  return (
    <div className='addToList-wrapper'>
        <input type="text" placeholder='Name:' name='name' value={input.name} onChange={handleChange} />
        <input type="text" placeholder='Age:' name='age' value={input.age} onChange={handleChange} />
        <input type="text" placeholder='ImageUrl:' name='url' value={input.url} onChange={handleChange} />
        <textarea rows={5} placeholder='Note:' name='note' value={input.note} onChange={handleChange} />
        <button onClick={handleClick}>Add To List</button>
    </div>
  )
}

export default AddToList