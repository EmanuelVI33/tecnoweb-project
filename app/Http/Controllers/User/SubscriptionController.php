<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Services\Production\SubscriptionService;
use App\Services\SettingService;
use Illuminate\Http\Request;

class SubscriptionController extends Controller
{
    private const BASE_ROUTE = 'subscriptions';
    private $page;

    public function __construct(
        private SubscriptionService $subscriptionService,
        private SettingService $settingService
    ) {
        $this->page = config('pages.user.' . self::BASE_ROUTE);
    }

    public function index()
    {
        $this->settingService->incrementCount('subs', 'Subcripciones index');
        $subscriptions = $this->subscriptionService->getAll();
        return $this->handleResponse($this->page . 'Index', compact('subscriptions'));
    }

    public function store(Request $request)
    {
        $subscription = $this->subscriptionService->getOne($request->id);
        dd($subscription);

        return $this->handleResponse($this->page . 'Index');
    }

    public function buy(Request $request)
    {
        $this->settingService->incrementCount('subs_buy', 'Subcripciones compra');
        $this->settingService->incrementCount('subs', 'Subcripciones compra');
        $subscription = $this->subscriptionService->getOne($request->id);
        return $this->handleResponse($this->page . 'Buy', compact('subscription'));
    }
}
