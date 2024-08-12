<?php

namespace App\Services;

use App\Data\SettingData;
use App\Models\Setting;

class SettingService
{
    public function __construct(private Setting $setting)
    {
        $this->setting = $setting;
    }

    public function getAll()
    {
        // key, value, label, placeholder, type, description
        return $this->setting->all();
    }

    public function store(array $settingsData)
    {
        try {
            foreach ($settingsData as $settingData) {
                if ($settingData->key === null) continue;

                $setting = $this->get($settingData->key);
                if (!$setting) continue;

                $setting->value = $settingData->value;
                $setting->save();
                // $this->update($settingData->key, $settingData->value);
            }
        } catch (\Exception $e) {
            throw new \Exception(trans('settings.store'), 500);
        }
    }

    public function get($key): ?Setting
    {
        return $this->setting->where('key', $key)->first();
    }

    public function update($key, $value)
    {
        return $this->setting->where('key', $key)->update(['value' => $value]);
    }

    public function create($key, $value, $label, $placeholder, $type, $description)
    {
        return $this->setting->create([
            'key' => $key,
            'value' => $value,
            'label' => $label,
            'placeholder' => $placeholder,
            'type' => $type,
            'description' => $description,
        ]);
    }
}
