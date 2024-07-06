<?php

namespace App\Traits;

use Inertia\Inertia;

trait ErrorHandlerTrait
{
    public function handleError(\Exception $e)
    {
        return Inertia::render('Error', ['message' => $e->getMessage(), 'status' => $e->getCode()]);
    }
}
