import React from 'react'
import { Link } from 'react-router-dom'

function Card() {
  
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand text-white fw-bold" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active text-white fw-bold" aria-current="page" to={'/topshots'}>Topshots</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active text-white fw-bold" aria-current="page" to={'/drone'}>Drone</Link>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2 text-white" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
      <div className='container my-5 header'>
          <div className='row'>
               <div className='col-sm-3'>
               <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/images/marriage5.jpeg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="/images/marriage3.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="/images/marriage4.jpeg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev2" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next2" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  <Link to='/topshots'><button className='btn btn-primary mt-4 text-center border-0'style={{rotate:'-10deg',marginLeft:'87px',fontWeight:'bold'}}>Marriage Pics</button></Link>
</div>
               </div>
               <div className='col-sm-3'>
               <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner" style={{rotate:'10deg',borderRadius:'4px',width:'280px',boxShadow:' -8px -8px 10px'}}>
    <div class="carousel-item active">
      <img src="/images/marriage6.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="/images/marriage7.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="/images/marriage8.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev1" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next1" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  <Link to={'/drone'}><button className='btn btn-primary mt-4'style={{rotate:'10deg',marginLeft:'37px',fontWeight:'bold'}}>Engagement Pics</button></Link>
</div>
               </div>
               <div className='col-sm-3'>
               <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner" style={{rotate:'-10deg',borderRadius:'4px',width:'280px',boxShadow:'9px 8px 10px'}}>
    <div class="carousel-item active">
      <img src="/images/marriage3.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="/images/marriage4.jpeg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="/images/marriage5.jpeg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev2" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next2" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
 <Link to={'/topshots'}> <button className='btn btn-primary mt-4'style={{rotate:'-10deg',marginLeft:'77px',fontWeight:'bold'}}>Pre-wedding Pics</button></Link>
</div>
               </div>
               <div className='col-sm-3'>
               <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner" style={{rotate:'10deg',borderRadius:'4px',width:'280px',boxShadow:' -8px -8px 10px'}}>
    <div class="carousel-item active">
      <img src="/images/marriage6.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="/images/marriage7.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="/images/marriage8.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev1" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">&#8592;</span>
  </button>
  <button class="carousel-control-next1" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">&#8594;</span>
  </button>
  <Link to={'/drone'}><button className='btn btn-primary mt-4'style={{rotate:'10deg',marginLeft:'30px',fontWeight:'bold'}}>Post-wedding Pics</button></Link>
</div>
               </div>
          </div>
      </div>
      
    </>
  )
}

export default Card