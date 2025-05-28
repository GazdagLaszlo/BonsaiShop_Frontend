<?php
    header("Access-Control-Allow-Origin: http://localhost:8080");
    header("Content-Type: application/json");

    include './classes/mysql.class.php';
    include './classes/products.class.php';
    include './classes/order_processing.php';

    $products = new Products();
    echo $products->allProducts();
?>