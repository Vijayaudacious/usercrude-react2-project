import React from 'react'

function Navbar() {
  return (
    <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarSupportedContent">
      <ul class="navbar-nav ">
        <li class="nav-item active">
          <a class="nav-link " aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contect</a>
        </li> <li class="nav-item">
          <a class="nav-link btn btn-outline-success me-1" href="#">Login</a>
        </li> <li class="nav-item">
          <a class="nav-link btn btn-outline-success " href="#">Signup</a>
            </li> 
      </ul>
     
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar