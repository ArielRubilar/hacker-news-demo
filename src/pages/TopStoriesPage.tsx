
import { useEffect, useRef } from 'react'
import { Story } from '../components/Story/Story'
import { getTopStories } from './../services/hacker-news'
import useSWRInfinite from 'swr/infinite'
import { list, spanLoadMore } from './TopStoriesPage.css'

export default function TopHistory () {
  const { data, setSize, isLoading } = useSWRInfinite((index) => `topStories/${index + 1}`, async (key) => {
    const [, page] = key.split('/')
    return await getTopStories(Number(page), 10)
  })

  const endOfPageElement = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (endOfPageElement.current === null) return
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !isLoading) {
        void setSize(prev => prev + 1)
      }
    }, {
    })
    observer.observe(endOfPageElement.current)
    return () => {
      observer.disconnect()
    }
  }, [setSize, isLoading])

  const stories = data?.flat() ?? []
  return (
    <>
      <ul className={list} role='list'>
        {stories.map((id, index) => (
          <li key={id}>
            <Story id={id} index={index} />
          </li>
        ))}
      </ul>
      {
        !isLoading && <span className={spanLoadMore} ref={endOfPageElement}>....</span>
       }
    </>
  )
}
