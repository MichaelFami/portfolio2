@extends('master')
@section('head')
<head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link href="https://use.fontawesome.com/releases/v5.0.4/css/all.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Muli" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css" />

    <meta charset="utf-8">
    <title>Home</title>
</head>
@endsection
@section('content')
<div class="container">
    <div class="row">
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
            <br/>
            <a class="p-2" href="https://www.facebook.com"><i id="iconz" class="fab fa-facebook-f fa-3x" ></i></a>
            <a class="p-2" href="https://www.linkedin.com"><i id="iconz" class="fab fa-linkedin-in fa-3x" ></i></a>
            <a class="p-2" href="https://www.github.com"><i id="iconz" class="fab fa-github fa-3x"></i></a>
            <br/>
            <br/>
            <i id="iconz" class="fas fa-envelope-square p-2"></i>MichaelFami@Gmail.com
            <div><i id="iconz" class="fas fa-phone p-2"></i>915-858-1676 x105</div>
            <i id="iconz" class="fas fa-mobile pl-2 pt-2 pr-3"></i>915-615-9565
        </div>
    </div>
</div>

@endsection
