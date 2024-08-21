import { useNavigate, useParams } from "react-router-dom";
import { getMagicByID } from "../../services/magic-services";
import { useScrollToTop } from "../../hooks/scroll-hooks";
import { useQuery } from "@tanstack/react-query";
import classNames from "classnames";

import styles from './styles.module.css';

function Magic() {
  const { id } = useParams();
  const navigate = useNavigate()
  useScrollToTop()

  const { data, error } = useQuery({
    queryKey: [ id ],
    queryFn: async () => getMagicByID({ id }),
  })


  const navigateVariant = (index: string) => {
    navigate(`/item/${index}`)
  }

  if (!data) return <span>{error?.message}</span>

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <article className={classNames(styles.heroContent, 'container')}>
          <div className={styles.heroInfo}>
            <h1>{data.name}</h1>
            <span>{data.equipment_category.name}</span>
          </div>
          <div className={styles.heroRarity}>
            <h3>Rarity: <span>{data.rarity.name}</span></h3>
          </div>
        </article>
      </section>
      <div className={classNames(styles.heroDescription, 'container')}>
        <h2>Description</h2>
        <div className={styles.heroDescriptionContent}>
          <p>{data.desc}</p>
        </div>
      </div>
      {data.variants && data.variants.length > 0 && (
        <div className={classNames(styles.heroVariants, 'container')}>
          <h2>Variants</h2>
          <div className={styles.heroVariantsContent}>
            {data.variants.map((variant) => (
              <div 
                key={variant.index}
                className={styles.heroVariant}
                onClick={() => navigateVariant(variant.index)}
              >
                <h3>{variant.name}</h3>
              </div>
            ))}    
          </div>
        </div>
      )}
    </main>
  )
}

export default Magic;
