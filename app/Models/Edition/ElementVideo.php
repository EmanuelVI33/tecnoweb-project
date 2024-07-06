<?php

namespace App\Models\Edition;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ElementVideo extends Model
{
    use HasFactory;

    protected $fillable = [
        'element_id',
    ];

    // Relación polimorfica con element
    public function element()
    {
        return $this->morphOne(Element::class, 'type');
    }
}
