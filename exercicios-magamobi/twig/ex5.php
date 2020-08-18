<?php
require './vendor/autoload.php';

$loader = new \Twig\Loader\FilesystemLoader('view/ex5/');

$twig = new \Twig\Environment($loader, array (
    'cache' => 'view/ex5/cache/',
    'cache' => false
));

$template = $twig->load('produtos.twig'); 

echo $template->render();