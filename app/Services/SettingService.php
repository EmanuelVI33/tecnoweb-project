<?php

namespace App\Services;

use App\Data\SettingData;
use App\Models\Setting;
use Illuminate\Support\Facades\DB;

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

    public function getSettingPages()
    {
        return $this->setting->where('type', 'page')->get();
    }


    // Sumar la cantidad de visitas de las paginas
    public function getTotalVisit()
    {
        return $this->setting->where('type', 'page')
            ->sum(DB::raw('CAST(value AS DECIMAL(10, 2))'));
    }


    public function incrementCount($key, ?String $label)
    {
        // Crear o editar
        $setting = $this->get("{$key}_count");
        if (!$setting) {
            $setting = $this->setting->create([
                'key' => "{$key}_count",
                'value' => 1,
                'label' => $label,
                'type' => 'page'
            ]);
        } else {
            $setting->value = $setting->value + 1;
            $setting->save();
        }
    }
}
