<?php
require './vendor/autoload.php';

$loader = new \Twig\Loader\FilesystemLoader('view/ex4/');

$twig = new \Twig\Environment($loader, array (
    'cache' => 'view/ex4/cache/',
    'cache' => false
));

$template = $twig->load('index.twig'); 

echo $template->render();