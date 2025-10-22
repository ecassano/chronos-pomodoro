import { TaskContext } from './TaskContext'
import { useContext } from 'react'

export function useTaskContext() {
  return useContext(TaskContext)
}
