import React from 'react'
import { ITask } from '../references/Interfaces'

// pour définir une prop
// il vaut mieux le faire dans le fichier du component lui même

interface Props {
  task: ITask
  completeTask(taskNameToDelete: string): void
}

const TodoTask = ({task, completeTask }: Props) => {
  return (
    <div className='task'>
      <div className="content">
        <span>{task.taskName}</span>
        <span>{task.deadline}</span>
      </div>
      <button onClick={() => {
        completeTask(task.taskName)
      }}>X</button>
    </div>
  )
}

export default TodoTask
