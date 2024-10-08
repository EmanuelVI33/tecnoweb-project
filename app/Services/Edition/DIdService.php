<?php

namespace App\Services\Edition;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class DIdService
{
    protected $webhookUrl;

    public function __construct()
    {
        $this->webhookUrl = 'https://www.tecnoweb.org.bo/inf513/grupo23sa/proy2/public' . '/elements/webhook';
        // $this->webhookUrl = config('app.url') . '/elements/webhook';
    }

    public function generateVideo($text, $expression, $image)
    {
        $options = [
            'method' => 'POST',
            // 'url' => config('services.did.url') . '/talks',
            'url' => 'https://api.d-id.com' . '/talks',
            'headers' => [
                'accept' => 'application/json',
                'content-type' => 'application/json',
                // 'authorization' => 'Basic ' . config('services.did.api_key'),
                'authorization' => 'Basic ' . 'Y2FoZWJvNjYyNkB0aWVydmlvLmNvbQ:numg69R0VeQiu0N8g1k-B',
            ],
            'json' => [
                'script' => [
                    'type' => 'text',
                    'subtitles' => 'false',
                    'provider' => [
                        'type' => 'microsoft',
                        'voice_id' => 'es-MX-GerardoNeural',
                    ],
                    'ssml' => 'false',
                    'input' => $text,
                ],
                'config' => [
                    'fluent' => 'false',
                    'pad_audio' => '0.0',
                    'driver_expressions' => [
                        'expressions' => [
                            [
                                'start_frame' => 0,
                                'expression' => $expression,
                                'intensity' => 1,
                            ]
                        ]
                    ]
                ],
                'source_url' => $image,
                'webhook' => $this->webhookUrl,
            ],
        ];

        try {
            $response = Http::withHeaders($options['headers'])->post($options['url'], $options['json']);
            $responseData = $response->json();
            if ($response->status() !== 200) {
                Log::error('Error generating video: ' . $responseData['description']);
                throw new \Exception('Error generating video: ' . $responseData['description']);
            }
            return $responseData['id'];
        } catch (\Exception $e) {
            Log::error('Error generating video: ' . $e->getMessage());
            throw $e;
        }
    }
}
