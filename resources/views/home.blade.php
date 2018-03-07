@extends('master') @section('head')

<head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link href="https://use.fontawesome.com/releases/v5.0.4/css/all.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Muli" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css" />

    <meta charset="utf-8">
    <title>Home</title>
</head>
@endsection @section('content')
<body  data-spy="scroll" data-target=".navbar" data-offset="50">
    <nav  class="navbar navbar-expand-lg fixed-top navbar-dark navcolorz">
        <a class="navbar-brand" href="#">Michael Famitafreshi</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="#section1">Resume</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#section2">Portfolio</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="#section3">Contact</a>
                </li>

            </ul>
        </div>
    </nav>
<div class="container-fluid">
    <div id="section1" class="row text-white justify-content-center">
        <div class="col-3 mr-1">
            <div class="row border-right border-bottom border-dark">
                <div class="col text-center mb-2">
                    <img src="images/headshot.png" alt="" class="img-fluid rounded-circle mt-1">
                    <h3>Michael Famitafreshi</h3>
                    <a class="p-2" href="https://www.linkedin.com" target="_blank"><i id="iconz" class="fab fa-linkedin-in fa-3x"></i></a>
                    <a class="p-2" href="https://www.github.com/michaelfami" target="_blank"><i id="iconz" class="fab fa-github fa-3x"></i></a>
                </div>
            </div>

        </div>
        <div class="col-6 mt-5 text-white">
            <h2 class="border-bottom border-dark">Work Experience</h2>
            <div class="row mb-5">
                <div class="col-3">
                    <img src="images/fwslogo.png" alt="" class="mt-1">
                </div>
                <div class="col-9">
                    <h4 class="mt-1">
                                    Recruitment Process Manager at Fred W. Smithson
                                </h4>
                    <h6>Dec 2013 to Present</h6>
                </div>
            </div>
            <div class="row mb-5">
                <div class="col-3">
                    <img src="images/lonestarlogo.png" alt="" class="mt-1 img-fluid">
                </div>
                <div class="col-9">
                    <h4 class="mt-1">
                                    Bank Management Trainee at Lone Star National Bank
                                </h4>
                    <h6>June 2012 to Dec 2013</h6>
                </div>
            </div>
            <h2 class="border-bottom border-dark">Education</h2>
            <div class="row">
                <div class="col-3">
                    <img src="images/valleytech.png" alt="" class="mt-1">
                </div>
                <div class="col-9">
                    <h4 class="mt-1">
                                    Valley Technical Academy
                                </h4>
                    <h6>Full Stack Development Bootcamp</h6>

                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    <img src="images/UTRGVlogo.png" alt="" class="mt-1">
                </div>
                <div class="col-9">
                    <h4 class="mt-1">
                                    The University of Texas Rio Grande Valley
                                </h4>
                    <h6>Bachelor's Degree, International Business</h6>
                    <h6>Minor in Global Security</h6>
                </div>
            </div>

        </div>
    </div>

    <div id="section2" class="row text-white">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100" src="/images/504screenshot.png" alt="First slide">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>504 Sports</h5>
                        <p>A local sports news site asked for a facelift.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="/images/504screenshot.png" alt="Second slide">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Fortnite Stats Tracker</h5>
                        <p>This app allows the user to search for a specific player's statistics from the API of the popular game Fortnite.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="/images/504screenshot.png" alt="Third slide">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>TBD Project</h5>
                        <p>TBD</p>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
        </div>
    </div>




    <div id="section3" class="row text-white">
        <div class="col">
            <form class="mt-5 mb-5">
                <div class="form-group">
                    <label for="exampleFormControlInput1">Your Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                </div>

                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Message</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </form>
            <h4>Contact Info</h4>
            <i id="iconz" class="fas fa-envelope-square p-2"></i>MichaelFami@Gmail.com
        </br>
            <i id="iconz" class="fas fa-mobile pl-2 pt-2 pr-3"></i>915-615-9565
        </div>
    </div>

</div>
@endsection
