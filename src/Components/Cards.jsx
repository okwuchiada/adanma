import React from 'react'

function Cards({title, desc, live, github}) {
  return (
    <>
    <li className='card'>
      <div className="card__title">
        <h3>{title}</h3>
      </div>
      <div className="card__desc">
        <p>{desc}</p>
      </div>
      <div className="card__links">
        <a href={live}><i class="fas fa-rocket"></i> Live</a>
        <a href={github}><i class="fab fa-github"></i> Code</a>
      </div>
  
    </li>
  </>
  )
}

export default Cards
