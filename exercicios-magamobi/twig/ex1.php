<?php
require './vendor/autoload.php';

$loader = new \Twig\Loader\FilesystemLoader('view/');

$twig = new \Twig\Environment($loader, array (
    'cache' => 'view/cache/',
    'cache' => false
));

$template = $twig->load('ex1.twig');

echo $template->render();