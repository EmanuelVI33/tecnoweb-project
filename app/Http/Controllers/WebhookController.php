<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WebhookController extends Controller
{
    public function handle(Request $request)
    {
        $data = $request->all();

        dd($data);
        // Procesar los datos del webhook
        // Por ejemplo, guardar la URL del video en la base de datos

        // $videoUrl = $data['video_url'] ?? null;
        // if ($videoUrl) {
        //     // Aquí puedes actualizar la base de datos, notificar a los usuarios, etc.
        // }

        // return response()->json(['status' => 'success'], 200);
    }
}