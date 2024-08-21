import styles from './styles.module.css';

interface BannerProps {
  title: string;
}

export function Banner({ title }: BannerProps) {
  return (
    <section className={styles.banner}>
      <article className='container'>
        <div className={styles.title}>
          <img src="/magic.svg" alt="Magic Icon" />
          <h1>{ title }</h1>
        </div>
        <div className={styles.heros}>
          <img src="/hero1.webp" alt="Hero 01" className={styles.hero1} />
          <img src="/hero2.webp" alt="Hero 02" className={styles.hero2} />
          <div className={styles.lightEffect} />
        </div>
      </article>
    </section>
  )
}