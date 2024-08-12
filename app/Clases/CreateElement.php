<?php

namespace App\Clases;

use App\Data\Edition\ElementData;
use App\Models\Edition\Element;

interface CreateElement
{
    // Pasamos los datos y me devuelve un modelo. w
    public function createElement(ElementData $elementData): Element;
}
