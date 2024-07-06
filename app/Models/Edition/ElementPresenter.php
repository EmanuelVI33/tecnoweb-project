<?php

namespace App\Models\Edition;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ElementPresenter extends Model
{
    use HasFactory;
    public $timestamps = false;

    protected $fillable = [
        'content',
        'expression',
        'video_id',
    ];

    public function element()
    {
        return $this->morphOne(Element::class, 'element');
    }
}
