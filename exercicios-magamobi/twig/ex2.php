<?php
require './vendor/autoload.php';

$loader = new \Twig\Loader\FilesystemLoader('view/ex2/');

$twig = new \Twig\Environment($loader, array (
    'cache' => 'view/ex2/cache/',
    'cache' => false
));

$template = $twig->load('index.twig');

echo $template->render();