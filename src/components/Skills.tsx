import './Skills.css'

function Skills() {
  return (
    <div className="container-project">
      <h1 className="title-container">Compétences</h1>
      <div className="grids">
        <div className="item">
          <div className="box">
            <div className="percent">
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>
              <div className="num">
                <img
                  width="96"
                  height="96"
                  src="https://img.icons8.com/color/48/html-5--v1.png"
                  alt="html-5--v1"
                />
              </div>
            </div>
            <h2>Html</h2>
          </div>
        </div>
        <div className="item">
          <div className="box">
            <div className="percent">
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>
              <div className="num">
                <img
                  width="96"
                  height="96"
                  src="https://img.icons8.com/pulsar-color/96/php.png"
                  alt="php"
                />
              </div>
            </div>
            <h2>PHP</h2>
          </div>
        </div>
        <div className="item">
          <div className="box">
            <div className="percent">
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>
              <div className="num">
                <img
                  width="64"
                  height="64"
                  src="https://img.icons8.com/dusk/64/sql.png"
                  alt="sql"
                />
              </div>
            </div>
            <h2>SQL</h2>
          </div>
        </div>
        <div className="item">
          <div className="box">
            <div className="percent">
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>
              <div className="num">
                <img
                  width="96"
                  height="96"
                  src="https://img.icons8.com/pulsar-color/96/javascript.png"
                  alt="javascript"
                />
              </div>
            </div>
            <h2>Javascript</h2>
          </div>
        </div>
        <div className="item">
          <div className="box">
            <div className="percent">
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>
              <div className="num">
                <img
                  width="80"
                  height="80"
                  src="https://img.icons8.com/officel/80/react.png"
                  alt="react"
                />
              </div>
            </div>
            <h2>REACT</h2>
          </div>
        </div>
        <div className="item">
          <div className="box">
            <div className="percent">
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>
              <div className="num">
                <img
                  width="96"
                  height="96"
                  src="https://img.icons8.com/nolan/96/symfony.png"
                  alt="symfony"
                />
              </div>
            </div>
            <h2>symfony</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
