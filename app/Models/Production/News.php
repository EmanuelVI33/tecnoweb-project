<?php

namespace App\Models\Production;

use App\Models\Edition\Project;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'content',
        'is_public',
        'project_id',
        'news_category_id',
        'publication_date',
        'is_premium',
        'user_id',
    ];

    public function project()
    {
        return $this->belongsTo(Project::class);
    }

    public function newsCategory()
    {
        return $this->belongsTo(NewsCategory::class);
    }
}
