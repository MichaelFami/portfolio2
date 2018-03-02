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
<div class="container" id="aboutmecontainer">
    <div class="row">
        <div id="aboutmecontent" class="col text-white">
            <h2 class="border-bottom border-dark">About Me</h2>
            <p>
                Michael is a graduate of The University of Texas­ Rio Grande Valley in south Texas. He has a Bachelor’s Degree in International Business with a Minor in Global Security. His banking management work experience and upbringing in the manufacturing industries
                of Mexico have proven to be the perfect blend in preparing Michael for the recruiting industry. Michael has strong systems knowledge and vast internet know how. Michael is a young aggressive recruiter with sharp focus towards quality
                recruitment processes.
            </p>
        </div>
    </div>
    <div class="mt-5">
        <iframe src="https://snazzymaps.com/embed/43643" width="100%" height="400px" style="border:none;"></iframe>
    </div>
</div>


@endsection
