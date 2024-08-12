<?php

namespace App\Services;

use App\Models\User;

class UserService
{
    public function __construct(private User $user)
    {
        $this->user = $user;
    }

    public function update($id, $paymentData)
    {
        return $this->user->where('id', $id)->update($paymentData);
    }
}
