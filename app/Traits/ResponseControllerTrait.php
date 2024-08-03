<?php

namespace App\Traits;

use Inertia\Inertia;

trait ResponseControllerTrait
{
    public function handleResponse(string $route = 'Welcome', array $data = [], string $message = '')
    {
        return Inertia::render($route, $data)->with('success', $message);
    }

    /**
     * Handle the success and return the appropriate response.
     */
    public function handleSuccess(string $route = 'welcome', array $data = [], string $message = 'Operación realizada correctamente')
    {
        return to_route($route, $data)->with('success', $message);
    }

    /**
     * Handle the error and return the appropriate response.
     */
    public function handleError(\Exception $e)
    {
        return back()->with('error', [
            'status' => $e->getCode(),
            'message' => $e->getMessage(),
        ]);
    }
}
