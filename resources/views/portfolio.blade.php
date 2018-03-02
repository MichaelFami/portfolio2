@extends('master') @section('head')

<head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link href="https://use.fontawesome.com/releases/v5.0.4/css/all.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Muli" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css" />
    <link rel="stylesheet" href="http://anijs.github.io/lib/anicollection/anicollection.css">

    <meta charset="utf-8">
    <title>Home</title>
</head>
@endsection @section('content')

<div class="row text-white portfoliobox animated">
    <div class="col-4 portdesc">
        <h2>504 Sports</h2>
        <p>Sports project.</p>
        <button type="button" class="btn btn-primary" name="button">Next Project</button>
    </div>
    <div class="col-6">
        <img id="portpic" src="/images/504screenshot.png" alt="">
    </div>

</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

<script src="/js/anijs.js"></script>
<script type="text/javascript">
    $(".btn").on("click", function() {
        var slide1content = "<h2>504 Sports</h2>"+"
        <p>Sports project.</p>";
        var slide2content =;
        var slide3content = ;
        var slide4content = ;

        var slide1image ="/images/504screenshot.png";
        var slide2image = ;
        var slide3image = ;
        var slide4image = ;

        var slidestuff = [slide1content, slide2content, slide3content, slide4content];
        var slidepics = [slide1image, slide2image, slide3image, slide4image];

    });
</script>
@endsection
