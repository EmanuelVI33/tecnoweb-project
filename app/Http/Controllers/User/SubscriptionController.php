<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Services\Production\SubscriptionService;
use Illuminate\Http\Request;

class SubscriptionController extends Controller
{
    private const BASE_ROUTE = 'subscriptions';
    private $page;

    public function __construct(private SubscriptionService $subscriptionService)
    {
        $this->page = config('pages.user.' . self::BASE_ROUTE);
    }

    public function index()
    {
        $subscriptions = $this->subscriptionService->getAll();
        return $this->handleResponse($this->page . 'Index', compact('subscriptions'));
    }

    public function store(Request $request)
    {
        $subscription = $this->subscriptionService->getOne($request->id);
        dd($subscription);

        return $this->handleResponse($this->page . 'Index');
    }
}