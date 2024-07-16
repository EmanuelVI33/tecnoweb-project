<?php

namespace App\Services\Production;

use App\Models\Production\News;

class NewsService
{
    public function __construct(private News $news)
    {
    }

    public function getAll()
    {
        return $this->news::with('project', 'newsCategory')->get();
    }

    public function getOne(int $id)
    {
        return $this->news->findOrFail($id);
    }

    public function create(array $data): News
    {
        try {
            return $this->news->create($data);
        } catch (\Exception $e) {
            throw new \Exception('news-servive.create Error al crear la noticia', 500, $e);
        }
    }

    public function update(int $id, array $data): News
    {
        try {
            $news = $this->getOne($id);
            $news->fill($data);
            $news->save();
            return $news;
        } catch (\Exception $th) {
            throw new \Exception('news-servive.update Error al actualizar la noticia', 500);
        }
    }

    public function delete(int $id): bool
    {
        try {
            $news = $this->getOne($id);
            $news->delete();
            return true;
        } catch (\Exception $th) {
            throw new \Exception('news-servive.delete Error al eliminar la noticia', 500);
        }
    }
}
