<?php

namespace App\Http\Requests\Production\News;

trait NewsValidationTrait
{
    const ruleArray = [
        'title' => 'required|string|max:255',
        'content' => 'string',
        'is_public' => 'nullable|boolean',
        'project_id' => 'nullable|exists:projects,id',
        'news_category_id' => 'nullable|exists:news_categories,id',
        'publication_date' => 'nullable|date',
    ];

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return self::ruleArray;
    }
}
