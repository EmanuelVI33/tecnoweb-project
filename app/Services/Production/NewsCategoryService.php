<?php

namespace App\Services\Production;

use App\Models\Production\NewsCategory;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class NewsCategoryService
{
    private $newsCategory;

    public function __construct(NewsCategory $newsCategory)
    {
        $this->newsCategory = $newsCategory;
    }

    public function getAll(): Collection
    {
        return $this->newsCategory->all();
    }

    public function getOne(int $id): NewsCategory
    {
        try {
            return $this->newsCategory->findOrFail($id);
        } catch (ModelNotFoundException $e) {
            throw new \Exception(trans('news_category.not_found'), 404);
        }
    }

    public function create(array $data): NewsCategory
    {
        try {
            return $this->newsCategory->create($data);
        } catch (\Exception $e) {
            throw new \Exception(trans('news_category.create_error'), 500);
        }
    }

    public function update(int $id, array $data): NewsCategory
    {
        $newsCategory = $this->getOne($id);
        $newsCategory->fill($data);
        $newsCategory->save();

        return $newsCategory;
    }

    public function delete(int $id): bool
    {
        $newsCategory = $this->getOne($id);
        $newsCategory->delete();

        return true;
    }
}
