import ContentLoader from 'react-content-loader'

export const CommentLoader = () => {
  return (
    <ContentLoader
      speed={2}
      width={700}
      height={70}
      viewBox='0 0 700 70'
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'
    >
      <rect x='25' y='0' rx='0' ry='0' width='150' height='24' />
      <rect x='180' y='0' rx='0' ry='0' width='300' height='24' />
      <circle cx='10' cy='10' r='10' />
      <rect x='0' y='28' rx='0' ry='0' width='700' height='40' />
    </ContentLoader>
  )
}
