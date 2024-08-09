<?php

namespace Database\Seeders;

use App\Models\Setting;
use Illuminate\Database\Seeder;

class SettingsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $settings = [
            [
                'key' => 'site_name',
                'value' => 'Canal 11',
                'label' => 'Nombre del sitio',
                'placeholder' => 'Nombre del sitio',
                'type' => 'text',
                'description' => 'Nombre del sitio web',
            ],
            [
                'key' => 'site_description',
                'value' => 'Sistema de gestión de proyectos para la generacion de vídeos con IA',
                'label' => 'Descripción del sitio',
                'placeholder' => 'Descripción del sitio',
                'type' => 'textarea',
                'description' => 'Descripción del sitio web',
            ],
            [
                'key' => 'site_logo',
                'value' => 'logo.png',
                'label' => 'Logo del sitio',
                'placeholder' => 'Logo del sitio',
                'type' => 'file',
                'description' => 'Logo del sitio web',
            ],
            [
                'key' => 'path',
                'value' => '/',
                'label' => 'Ruta ',
                'placeholder' => 'Ruta de la imagenes',
                'type' => 'text',
                'description' => 'Ruta de todas las imagenes del sistema',
            ],
        ];

        foreach ($settings as $setting) {
            $s = Setting::where('key', $setting['key'])->first();
            if ($s) {
                $s->update($setting);
                continue;
            }
            Setting::create($setting);
        }
    }
}
