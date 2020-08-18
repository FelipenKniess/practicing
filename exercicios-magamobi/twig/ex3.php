<?php
require './vendor/autoload.php';

$loader = new \Twig\Loader\FilesystemLoader('view/ex3/');

$twig = new \Twig\Environment($loader, array (
    'cache' => 'view/ex3/cache/',
    'cache' => false
));

$template = $twig->load('home.twig'); //produto.html

echo $template->render();