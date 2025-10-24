<?php

require('connect.php');

if (isset($_POST['add-project'])) {
    print_r(value: $_POST);
    // collect the infor from the form by extracting the data from the $_POST
    $projectName = $_POST['projectName'];
    $projectImg = $_POST['projectImg'];

    echo $projectImg;

    // send a req to db for adding this project 
    $sql = "INSERT INTO projects (project_name,project_image) VALUES ('$projectName', '$projectImg')";

    $result = mysqli_query($con, $sql);


    // redirect to index.php
    if ($result) {
        header("Location: Index.php");
    } else {
        mysqli_error($con);
    }



}




?>



<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
</head>

<body>
    <form style="width: 30rem;" method="post">
        <div class="form-group">
            <label for="projectName">Project Name</label>
            <input type="text" class="form-control" placeholder="Enter Project Name" name="projectName">
        </div>
        <div class="form-group">
            <label for="projectImg">Project Image</label>
            <input type="text" class="form-control" placeholder="Enter Project Image URL" name="projectImg">
        </div>
        <button type="submit" name="add-project" class="btn btn-primary">Add Project</button>
    </form>

    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossorigin="anonymous"></script>
</body>

</html>