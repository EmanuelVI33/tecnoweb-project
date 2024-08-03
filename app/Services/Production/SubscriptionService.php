<?php

namespace App\Services\Production;

use App\Models\Production\Subscription;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class SubscriptionService
{
    private $subscription;

    public function __construct(Subscription $subscription)
    {
        $this->subscription = $subscription;
    }

    public function getAll(): Collection
    {
        return $this->subscription->all();
    }

    public function getOne(int $id): Subscription
    {
        try {
            return $this->subscription->findOrFail($id);
        } catch (ModelNotFoundException $e) {
            throw new \Exception(trans('news_category.not_found'), 404);
        }
    }

    public function create(array $data): Subscription
    {
        try {
            return $this->subscription->create($data);
        } catch (\Exception $e) {
            throw new \Exception(trans('news_category.create_error'), 500);
        }
    }

    public function update(int $id, array $data): Subscription
    {
        $subscription = $this->getOne($id);
        $subscription->fill($data);
        $subscription->save();

        return $subscription;
    }

    public function delete(int $id): bool
    {
        $subscription = $this->getOne($id);
        $subscription->delete();
        return true;
    }
}
