<?php

namespace App\Http\Requests\Edition\ProjectController;

use App\Enum\ProjectStatus;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreProjectRequest extends FormRequest
{
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
            'name' => ['required', 'string', 'max:255'],
            'description' => ['nullable', 'string'],
            'cover_url' => ['required'],
            'video_url' => ['nullable'],
            'status' => [
                'nullable',
                'string',
                Rule::enum(ProjectStatus::class)
            ],
            // Validar que id existe en la tabla de presenters
            'presenter_id' => [
                'required',
                'exists:presenters,id'
            ],
        ];
    }
}
