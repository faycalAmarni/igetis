
function Header() {
  return (
      <div>

        <div class="top-bar d-none d-md-block">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-8">
                        <div class="top-bar-left">
                            <div class="text">
                                <i class="far fa-clock"></i>
                                <h2>8:00 - 9:00</h2>
                                <p>Mon - Fri</p>
                            </div>
                            <div class="text">
                                <i class="fa fa-phone-alt"></i>
                                <h2>+123 456 7890</h2>
                                <p>For Appointment</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="top-bar-right">
                            <div class="social">
                                <a href=""><i class="fab fa-twitter"></i></a>
                                <a href=""><i class="fab fa-facebook-f"></i></a>
                                <a href=""><i class="fab fa-linkedin-in"></i></a>
                                <a href=""><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

       <div class="navbar navbar-expand-lg bg-dark navbar-dark">
           <div class="container-fluid">
               <a href="index.html" class="navbar-brand">Confer</a>
               <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                   <span class="navbar-toggler-icon"></span>
               </button>

               <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                   <div class="navbar-nav ml-auto">
                       <a href="index.html" class="nav-item nav-link active">Home</a>
                       <a href="about.html" class="nav-item nav-link">About</a>
                       <a href="service.html" class="nav-item nav-link">Service</a>
                       <a href="feature.html" class="nav-item nav-link">Feature</a>
                       <a href="advisor.html" class="nav-item nav-link">Advisor</a>
                       <a href="review.html" class="nav-item nav-link">Review</a>
                       <div class="nav-item dropdown">
                           <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                           <div class="dropdown-menu">
                               <a href="blog.html" class="dropdown-item">Blog Page</a>
                               <a href="single.html" class="dropdown-item">Single Page</a>
                           </div>
                       </div>
                       <a href="contact.html" class="nav-item nav-link">Contact</a>
                   </div>
                   </div>
               </div>
           </div>

       </div>

  );
}

export default Header;
