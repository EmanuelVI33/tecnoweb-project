<?php

namespace App\Clases;

use App\Data\Edition\ElementData;
use App\Models\Edition\Element;
use App\Models\Edition\ElementPresenter;

class CreateElementPresenter implements CreateElement
{
    // Pasamos los datos y me devuelve un modelo. w
    public function createElement(ElementData $elementData): Element
    {
        $elementDataArray = $elementData->toArray();
        // Crear elemento presentador
        $elementPresenter = ElementPresenter::create($elementDataArray);
        $element = $elementPresenter->element()->create($elementDataArray);
        return $element;
    }
}
