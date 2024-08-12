<?php

namespace App\Http\Requests\SettingController;

use Illuminate\Foundation\Http\FormRequest;

class StoreSettingRequest extends FormRequest
{
    public array $settingsData;

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
            'settings' => ['required', 'array'],
            'settings.*.key' => ['nullable', 'string'],
            'settings.*.value' => ['nullable', 'string'],
        ];
    }

    protected function passedValidation(): void
    {
        $settingData = 'App\Data\SettingData';
        foreach ($this->settings as $key => $setting) {
            $this->settingsData[] = $settingData::from($setting);
        }
    }
}
