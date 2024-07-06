<?php

namespace App\Models\Edition;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Presenter extends Model
{
    use HasFactory;

    protected $fillable = [
        'full_name',
        'photo_url',
        'sex',
    ];
}
