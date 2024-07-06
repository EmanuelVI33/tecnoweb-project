<?php

namespace App\Models\Edition;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Element extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'video_url',
        'type',
        'element_id',
        'element_type',
        'project_id',
    ];

    // Relación polimorfica
    public function element()
    {
        return $this->morphTo();
    }

    public function project()
    {
        return $this->belongsTo(Project::class);
    }
}
