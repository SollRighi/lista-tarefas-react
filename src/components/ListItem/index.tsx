import {useState} from 'react'
import * as C from './styles'
import {Item} from '../../types/item'
import { listenerCount } from 'process'

type Props = {
    item: Item
}

export const ListItem = ( {item}: Props) => {

    const [isChecked, setIsChecked] = useState(item.done)

    return(
        <div>
            <C.Container done={isChecked} >
                <input 
                    type={"checkbox"} 
                    checked={isChecked}
                    onChange={e => setIsChecked(e.target.checked)}
                />
                <label>{item.name}</label>
                <button> Excluir </button>
            </C.Container>
        </div>
    )
}