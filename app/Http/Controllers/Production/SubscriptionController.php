<?php

namespace App\Http\Controllers\Production;

use App\Http\Controllers\Controller;
use App\Http\Requests\Production\Subscription\StoreSubscriptionRequest;
use App\Http\Requests\Production\Subscription\UpdateSubscriptionRequest;
use App\Services\Production\SubscriptionService;
use App\Traits\ResponseControllerTrait;

class SubscriptionController extends Controller
{
    private const BASE_ROUTE = 'subscriptions';
    private $page;

    public function __construct(private SubscriptionService $subscriptionService)
    {
        $this->page = config('pages.admin.' . self::BASE_ROUTE);
    }

    public function index()
    {
        try {
            $subscriptions = $this->subscriptionService->getAll();

            return $this->handleResponse(
                route: $this->page . 'Index',
                data: compact('subscriptions'),
                message: 'Listado de categorías de noticias',
            );
        } catch (\Exception $e) {
            return $this->handleError($e);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreSubscriptionRequest $request)
    {
        try {
            $this->subscriptionService->create($request->validated());
            return $this->handleSuccess(
                route: self::BASE_ROUTE . '.index',
                message: 'Categoría creada correctamente'
            );
        } catch (\Exception $e) {
            return $this->handleError($e);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        try {
            $subscription = $this->subscriptionService->getOne($id);
            return $this->handleResponse(
                route: $this->page . 'Show',
                data: compact('subscription'),
            );
        } catch (\Exception $e) {
            return $this->handleError($e);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSubscriptionRequest $request, string $id)
    {
        try {
            $this->subscriptionService->update($id, $request->validated());
            return $this->handleSuccess(
                route: self::BASE_ROUTE . '.index',
                message: 'Categoría actualizada correctamente'
            );
        } catch (\Exception $e) {
            return $this->handleError($e);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
            $this->subscriptionService->delete($id);
            return $this->handleSuccess(
                route: self::BASE_ROUTE . '.index',
                message: 'Categoría eliminada correctamente'
            );
        } catch (\Exception $e) {
            return $this->handleError($e);
        }
    }
}
