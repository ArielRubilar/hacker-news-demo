import { Comment } from '../Comment/Comment'
import { list } from './ListOfComments.css'

export const ListOfComments = (props: { ids: number[] }) => {
  const { ids } = props
  return (
    <ul role='list' className={list}>
      {ids?.map(id => (
        <li key={id}>
          <Comment id={id} />
        </li>
      ))}
    </ul>
  )
}
