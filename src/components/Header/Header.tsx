import { contentContainer } from '../../App.css'
import { header, headerContent, link, logo } from './Header.css'

export const Header = () => {
  return (

    <nav className={header}>
      <div className={`${contentContainer} ${headerContent}`}>

        <span className={logo}>Y</span>
        <a
          href='/' className={link}
        >
          Hacker News
        </a>
      </div>
    </nav>
  )
}
