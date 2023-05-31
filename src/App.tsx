import { Route } from 'wouter'
import { Header } from './components/Header/Header'
import { lazy, Suspense } from 'react'
import { contentContainer, mainContainer } from './App.css'

const TopStoriesPage = lazy(async () => await import('./pages/TopStoriesPage'))
const DetailPage = lazy(async () => await import('./pages/DetailPage'))

function App () {
  return (
    <>
      <Header />
      <main className={`${contentContainer} ${mainContainer}`}>
        <Suspense fallback='Loading..'>
          <Route path='/' component={TopStoriesPage} />
          <Route path='/article/:id' component={DetailPage} />
        </Suspense>
      </main>
    </>
  )
}

export default App
