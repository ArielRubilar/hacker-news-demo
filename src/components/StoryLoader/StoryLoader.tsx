import ContentLoader from 'react-content-loader'

export const StoryLoader = () => {
  return (
    <ContentLoader
      speed={2}
      width={400}
      height={70}
      viewBox='0 0 400 70'
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'
    >
      <rect x='25' y='0' rx='0' ry='0' width='150' height='24' />
      <rect x='180' y='0' rx='0' ry='0' width='200' height='24' />
      <circle cx='10' cy='10' r='10' />
      <rect x='0' y='28' rx='0' ry='0' width='50' height='24' />
      <rect x='60' y='28' rx='0' ry='0' width='80' height='24' />
      <rect x='150' y='28' rx='0' ry='0' width='60' height='24' />
      <rect x='220' y='28' rx='0' ry='0' width='70' height='24' />
    </ContentLoader>
  )
}
