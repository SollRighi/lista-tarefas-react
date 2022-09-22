import {AddArea} from './components/AddArea'
import {ListItem} from './components/ListItem'
import {Item} from './types/item'
import {useState} from 'react'
import * as C from './App.Styles';
//* = tudo ; c = componente

function App() {

  const [list, Setlist ]= useState<Item[]>([])

  const handleAddTask = (taskname: string) => {
    let newList = [...list]
    newList.push({
      id: list.length + 1,
      name: taskname,
      done: false
    })
    Setlist(newList)
  } 

  return (
    <C.Container>
      <C.Area>
        <C.Header>
          Lista de Tarefas
        </C.Header>

        <AddArea onEnter={handleAddTask}/>


        {list.map((item, index)=>(
          <ListItem key={index} item={item}/>
        ))}

      </C.Area>
    </C.Container>
  );
}

export default App;
