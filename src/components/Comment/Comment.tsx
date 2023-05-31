import useSWR from 'swr'
import { getArticleInfo } from '../../services/hacker-news'
import { ListOfComments } from '../ListOfComments/ListOfComments'
import { comment, commentBody } from './Comment.css'
import { CommentLoader } from '../CommentLoader/CommentLoader'

export const Comment = (props: { id: number }) => {
  const { id } = props

  const { data, isLoading } = useSWR(`/comments/${id}`, async () => await getArticleInfo(Number(id)))

  if (isLoading) {
    return <CommentLoader />
  }

  const { by, text, time, kids } = data

  return (
    <details className={comment} open>
      <summary>
        <small>
          <span>{by}</span>
          <span>.</span>
          <span>{time}</span>
        </small>
      </summary>

      <div className={commentBody}>
        <p>{text}</p>
        {kids?.length > 0 && <ListOfComments ids={kids.slice(0, 10)} />}
      </div>

    </details>
  )
}
