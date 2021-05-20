
<?php

$username =$_POST['username'];
$password=$_POST['pwd'];

if(isset($_POST['submit'])){

if(!empty($username) && !empty($password)){

    if($username='ali.saritemur@ogr.sakarya.edu.tr' && $password='G201210044'){

        echo "Hoşgeldiniz";
    }

     else{

        echo "Lütfen doğru bilgileri giriniz";
     }
}
      else{

        echo "Lütfen boşluğu doldurunuz";
      }
}

?>
<html >
<head>   
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0" crossorigin="anonymous"> 
    <script src="https://code.jquery.com/jquery-1.11.1.js"></script>
    <script> 
      $(function(){
        $("#DivContent").load("navbar.html"); 
      });
    </script> 

</head>
 <div id="DivContent"></div>
 <body class="koruma bg-info text-center >
 </body>
 <html >