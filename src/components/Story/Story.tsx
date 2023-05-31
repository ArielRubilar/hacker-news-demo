import useSWR from 'swr'
import { getArticleInfo } from '../../services/hacker-news'
import { Link } from 'wouter'
import { storyLink, smallLink, story, storyFooter, storyHeader, storyTitle, storySpan } from './Story.css'
import { StoryLoader } from '../StoryLoader/StoryLoader'
import { getRelativeTime } from '../../utils/getRelativeTime'

export const Story = (props: { id: number, index: number }) => {
  const { id, index } = props
  const { data, isLoading } = useSWR(`article/${id}`, async () => await getArticleInfo(id))

  if (isLoading) return (<StoryLoader />)

  const { url, title, score, by, kids, time } = data
  let domain = ''

  try {
    domain = new URL(url).hostname.replace('www', '')
  } catch (e) {

  }

  return (
    <article className={story}>
      <header className={storyHeader}>
        <small>{index + 1}.</small>
        <a href={url} target='blank' rel='noopener noreferrer' className={storyTitle}> {title}</a>
        <a href={url} target='blank' rel='noopener noreferrer' className={storyLink}> ({domain})</a>
      </header>
      <footer className={storyFooter}>
        <span>{score} points</span>

        <span className={storySpan}>
          by {by}
        </span>

        <time className={storySpan} dateTime={new Date(time * 1000).toISOString()}>
          {getRelativeTime(time)}
        </time>

        <Link href={`/article/${id}`} className={smallLink}>
          ${kids !== undefined ? kids.length : 0} comments
        </Link>
      </footer>
    </article>
  )
}
