import classNames from 'classnames';
import styles from './styles.module.css';

function Header() {
  const handleHome = () => {
    window.location.href = '/'
  }

  return (
    <header className={styles.header}>
      <nav className={classNames(styles.nav, 'container')}>
        <div className={styles.logo} onClick={() => handleHome()}>
          <img src="/logo.svg" alt="D&D Logo" />
        </div>

        <a href="/" className={styles.link}>Home page</a>
      </nav>
    </header>
  )
}

export { Header }