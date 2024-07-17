<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = User::create([
            'name' => 'Admin User',
            'email' => 'admin@gmail.com',
            'password' => bcrypt('password'),
            'pointer' => 0,
        ]);
        $user->assignRole('administrative');

        $editor = User::create([
            'name' => 'Editor User',
            'email' => 'editor@gmail.com',
            'password' => bcrypt('password'),
            'pointer' => 0,
        ]);
        $editor->assignRole('editor');

        $regularUser = User::create([
            'name' => 'Regular User',
            'email' => 'user@gmail.com',
            'password' => bcrypt('password'),
            'pointer' => 20,
        ]);
        $regularUser->assignRole('user');
    }
}
