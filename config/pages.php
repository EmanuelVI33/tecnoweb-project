<?php

$baseAdmin = 'Admin/Pages';
$baseUser = 'User/Pages';

return [
    'admin' => [
        'news' => $baseAdmin . '/News',
        'news-categories' => $baseAdmin . '/NewsCategories',
        'users' => $baseAdmin . '/Users',
        'subscriptions' => $baseAdmin . '/Subscriptions',
        'settings' => $baseAdmin . '/Settings',
    ],
    'user' => [
        'user' => $baseUser . '/User',
        'subscriptions' => $baseUser . '/Subscriptions',
        'payments' => $baseUser . '/Payments',
    ],
];