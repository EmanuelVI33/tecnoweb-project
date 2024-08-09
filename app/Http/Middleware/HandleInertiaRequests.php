<?php

namespace App\Http\Middleware;

use App\Clases\UploadFileStrategy\FileUploader;
use App\Clases\UploadFileStrategy\UploadFileSystemStrategy;
use App\Models\Setting;
use App\Services\Edition\PresenterService;
use App\Services\SettingService;
use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $presenters = (new PresenterService(
            new FileUploader(new UploadFileSystemStrategy())
        ))->getAll();
        $settings = (new SettingService(new Setting()))->getAll();

        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
            ],
            'presenters' => $presenters,
            'settings' => $settings,
            // 'flash' => [
            //     'success' => fn () => $request->session()->get('success'),
            //     'error' => fn () => $request->session()->get('error'),
            // ],
        ];
    }
}
