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
        return $this->newsCategory->findOrFail($id);
    }

    public function create(array $data): NewsCategory
    {
        return $this->newsCategory->create($data);
    }

    public function update(int $id, array $data): NewsCategory
    {
        $newsCategory = $this->getOne($id);
        $newsCategory->fill($data);
        $newsCategory->save();

        return $newsCategory;
    }

    public function delete(int $id)
    {
        $newsCategory = $this->getOne($id);
        $newsCategory->delete();

        return true;
    }
}
