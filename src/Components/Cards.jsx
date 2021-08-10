import React from 'react'

function Cards(props) {
  return (
    <>
    <li >
    <div className='card'>
      <div className="card__title">
        <h3>{props.title}</h3>
      </div>
      <div className="card__desc">
        <p>{props.desc}</p>
      </div>
      <div className="card__links">
        <a href={props.live}><i class="fas fa-rocket"></i> Live</a>
        <a href={props.git}><i class="fab fa-github"></i> Code</a>
      </div>
      </div>

    </li>
  </>
  )
}

export default Cards
