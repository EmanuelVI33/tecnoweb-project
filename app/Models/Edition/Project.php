<?php

namespace App\Models\Edition;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'cover_url',
        'video_url',
        'status',
        'presenter_id',
    ];

    // Relacción con el presentador
    public function presenter()
    {
        return $this->belongsTo(Presenter::class, 'presenter_id', 'id');
    }

    public function elements()
    {
        return $this->hasMany(Element::class);
    }
}
