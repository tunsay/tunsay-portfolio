import styles from './Main.module.scss'

function Skills() {
  return (
    <div className={styles.skills__container}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quis
      possimus adipisci corrupti? Sint asperiores similique velit dolore
      molestiae rem, architecto voluptatem eos fugit recusandae autem magnam?
      Odit, voluptate dignissimos.
      <div className={styles.skills__container__grids}>
        <div className={styles.skills__container__grids__item}>
          <div className={styles.skills__container__grids__item__box}>
            <div
              className={styles.skills__container__grids__item__box__percent}
            >
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>
              <div
                className={
                  styles.skills__container__grids__item__box__percent__num
                }
              >
                <img
                  width="96"
                  height="96"
                  src="https://img.icons8.com/color/48/html-5--v1.png"
                  alt="html-5--v1"
                />
              </div>
            </div>
            <h3 className={styles.skills__container__grids__item__box__text}>
              Html
            </h3>
          </div>
        </div>
        <div className={styles.skills__container__grids__item}>
          <div className={styles.skills__container__grids__item__box}>
            <div
              className={styles.skills__container__grids__item__box__percent}
            >
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>
              <div
                className={
                  styles.skills__container__grids__item__box__percent__num
                }
              >
                <img
                  width="96"
                  height="96"
                  src="https://img.icons8.com/pulsar-color/96/php.png"
                  alt="php"
                />
              </div>
            </div>
            <h3 className={styles.skills__container__grids__item__box__text}>
              PHP
            </h3>
          </div>
        </div>
        <div className={styles.skills__container__grids__item}>
          <div className={styles.skills__container__grids__item__box}>
            <div
              className={styles.skills__container__grids__item__box__percent}
            >
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>
              <div
                className={
                  styles.skills__container__grids__item__box__percent__num
                }
              >
                <img
                  width="64"
                  height="64"
                  src="https://img.icons8.com/dusk/64/sql.png"
                  alt="sql"
                />
              </div>
            </div>
            <h3 className={styles.skills__container__grids__item__box__text}>
              SQL
            </h3>
          </div>
        </div>
        <div className={styles.skills__container__grids__item}>
          <div className={styles.skills__container__grids__item__box}>
            <div
              className={styles.skills__container__grids__item__box__percent}
            >
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>
              <div
                className={
                  styles.skills__container__grids__item__box__percent__num
                }
              >
                <img
                  width="96"
                  height="96"
                  src="https://img.icons8.com/pulsar-color/96/javascript.png"
                  alt="javascript"
                />
              </div>
            </div>
            <h3 className={styles.skills__container__grids__item__box__text}>
              Javascript
            </h3>
          </div>
        </div>
        <div className={styles.skills__container__grids__item}>
          <div className={styles.skills__container__grids__item__box}>
            <div
              className={styles.skills__container__grids__item__box__percent}
            >
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>
              <div
                className={
                  styles.skills__container__grids__item__box__percent__num
                }
              >
                <img
                  width="80"
                  height="80"
                  src="https://img.icons8.com/officel/80/react.png"
                  alt="react"
                />
              </div>
            </div>
            <h3 className={styles.skills__container__grids__item__box__text}>
              REACT
            </h3>
          </div>
        </div>
        <div className={styles.skills__container__grids__item}>
          <div className={styles.skills__container__grids__item__box}>
            <div
              className={styles.skills__container__grids__item__box__percent}
            >
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>
              <div
                className={
                  styles.skills__container__grids__item__box__percent__num
                }
              >
                <img
                  width="96"
                  height="96"
                  src="https://img.icons8.com/nolan/96/symfony.png"
                  alt="symfony"
                />
              </div>
            </div>
            <h3 className={styles.skills__container__grids__item__box__text}>
              symfony
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
