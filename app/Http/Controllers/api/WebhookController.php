<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Services\Edition\ElementService;
use Illuminate\Http\Request;

class WebhookController extends Controller
{
    public function __construct(private ElementService $elementService)
    {
    }

    public function handle(Request $request)
    {
        $file = $request->file('file');
        $this->elementService->updateVideoUrl($request->element_id, $file);
        return response()->json(['message' => 'Video almacenado correctamente']);
    }
}
