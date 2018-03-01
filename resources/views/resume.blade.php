@extends('master')

@section('title','resume')

@section('content')
<div class="container">
    <div class="row text-white">
        <div class="col-4 mr-1">
            <div class="row border-right border-bottom border-dark">
                <div class="col text-center mb-2">
                    <img src="images/headshot.png" alt="" class="img-fluid rounded-circle mt-1">
                    <h3>Michael Famitafreshi</h3>
                    <a class="p-2" href="https://www.facebook.com"><i id="iconz" class="fab fa-facebook-f fa-3x"></i></a>
                    <a class="p-2" href="https://www.linkedin.com" target="_blank"><i id="iconz" class="fab fa-linkedin-in fa-3x"></i></a>
                    <a class="p-2" href="https://www.github.com/michaelfami" target="_blank"><i id="iconz" class="fab fa-github fa-3x"></i></a>
                </div>
            </div>
            <h4>Contact Info</h4>
            <i id="iconz" class="fas fa-envelope-square"></i>MichaelFami@Gmail.com
            <div><i id="iconz" class="fas fa-phone"></i>915-858-1676 x105</div>
            <i id="iconz" class="fas fa-mobile mb-5"></i>915-615-9565
        </div>
        <div class="col-7 mt-5 text-white">
            <h2 class="border-bottom border-dark">Work Experience</h2>
            <div class="row mb-5">
                <div class="col-3">
                    <img src="images/fwslogo.png" alt="" class="mt-1">
                </div>
                <div class="col-9">
                    <h4 class="mt-1">
                        Recruitment Process Manager at Fred W. Smithson
                    </h4>
                    <h6>Dec 2015 to Present</h6>
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
</div>


@endsection
