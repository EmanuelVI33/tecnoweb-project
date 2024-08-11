<?php

namespace App\Http\Controllers;

use App\Http\Requests\User\PaymentController\StorePaymentRequest;
use App\Services\PaymentService;
use App\Services\PFPaymentService;
use App\Services\SubsPaymentService;
use Illuminate\Http\Request;

class SubsPaymentController extends Controller
{
    private const BASE_ROUTE = 'payments';
    private $page;

    public function __construct(
        private SubsPaymentService $subsPaymentService,
        private PaymentService $paymentService,
        private PFPaymentService $pFPaymentService,
    ) {
        $this->page = config('pages.user.' . self::BASE_ROUTE);
    }

    public function index()
    {
        $payments = $this->paymentService->getAllPaymentUser();
        return $this->handleResponse($this->page . 'Index', compact('payments'));
    }

    public function store(StorePaymentRequest $request)
    {
        // dd($request);
        $id = $this->subsPaymentService->createPayment($request->paymentData);
        return $this->handleSuccess('payments.show', $id, 'Pago creado correctamente');
    }

    public function show($id)
    {
        $payment = $this->paymentService->getPaymentWithSubscription($id);
        return $this->handleResponse($this->page . 'Qr', compact('payment'));
    }

    public function consultar($id)
    {
        $response = $this->subsPaymentService->consultar($id);
        $payment = $this->paymentService->getPaymentWithSubscription($id);

        // dd($response, $payment);

        return $this->handleResponse($this->page . 'Qr', compact('payment', 'response'));
    }
}
