<?php
require './vendor/autoload.php';

$loader = new \Twig\Loader\FilesystemLoader('view/ex7/');

$twig = new \Twig\Environment($loader, array (
    'cache' => 'view/ex7/cache/',
    'cache' => false
));

$template = $twig->load('checkout.twig'); 

echo $template->render();