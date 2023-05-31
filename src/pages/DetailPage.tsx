import useSWR from 'swr'
import { getArticleInfo } from '../services/hacker-news'
import { ListOfComments } from '../components/ListOfComments/ListOfComments'

export default function DetailPage (props: {
  params: {
    id: string
  }
}) {
  const { params: { id } } = props
  const { data, isLoading } = useSWR(`/story/${id}`, async () => await getArticleInfo(Number(id)))

  return (
    <div>
      {!isLoading && <ListOfComments ids={data?.kids?.slice(0, 10 ?? [])} />}
    </div>
  )
}
