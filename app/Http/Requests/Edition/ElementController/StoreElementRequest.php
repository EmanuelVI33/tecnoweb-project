<?php

namespace App\Http\Requests\Edition\ElementController;

use Illuminate\Foundation\Http\FormRequest;

class StoreElementRequest extends FormRequest
{
    public array $elementsData;

    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'project_id' => ['required', 'exists:projects,id'],
            'elements' => ['required', 'array'],
            'elements.*.id' => ['nullable', 'string'],
            'elements.*.title' => ['required', 'string'],
            'elements.*.content' => ['nullable', 'string'],
            'elements.*.expression' => ['nullable', 'string'],
            'elements.*.video_id' => ['nullable', 'string'],
            'elements.*.file' => ['nullable'],
        ];
    }

    protected function passedValidation(): void
    {
        $elementData = 'App\Data\Edition\ElementData';
        foreach ($this->elements as $element) {
            $element['project_id'] = $this->project_id;
            $this->elementsData[] = $elementData::from($element);
        }
    }
}
