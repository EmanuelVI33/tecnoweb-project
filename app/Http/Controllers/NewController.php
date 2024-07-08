<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Production\News;

class NewController extends Controller
{
    public function index()
    {
        $news = News::all();
        return view('news.index', compact('news'));
    }

    public function create()
    {
        return view('news.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'content' => 'required',
            'is_public' => 'required|boolean',
            'project_id' => 'required|exists:projects,id',
            'news_category_id' => 'required|exists:news_categories,id',
            'publication_date' => 'nullable|date',
        ]);

        News::create($request->all());

        return redirect()->route('news.index')
            ->with('success', 'Noticia creada correctamente.');
    }

    public function show($id)
    {
        $news = News::findOrFail($id);
        return view('news.show', compact('news'));
    }

    public function edit($id)
    {
        $news = News::findOrFail($id);
        return view('news.edit', compact('news'));
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => 'required',
            'content' => 'required',
            'is_public' => 'required|boolean',
            'project_id' => 'required|exists:projects,id',
            'news_category_id' => 'required|exists:news_categories,id',
            'publication_date' => 'nullable|date',
        ]);

        $news = News::findOrFail($id);
        $news->update($request->all());

        return redirect()->route('news.index')
            ->with('success', 'Noticia actualizada correctamente.');
    }

    public function destroy($id)
    {
        $news = News::findOrFail($id);
        $news->delete();

        return redirect()->route('news.index')
            ->with('success', 'Noticia eliminada correctamente.');
    }
}
