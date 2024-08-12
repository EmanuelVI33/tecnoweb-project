<?php

namespace Database\Factories\Production;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class NewsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        // Consultar ids de proyectos
        $projects = \App\Models\Edition\Project::all()->pluck('id')->toArray();
        $categories = \App\Models\Production\NewsCategory::all()->pluck('id')->toArray();
        $users = \App\Models\User::all()->pluck('id')->toArray();

        return [
            'title' => $this->faker->sentence,
            'content' => $this->faker->paragraph,
            'is_public' => $this->faker->boolean,
            'project_id' => $this->faker->randomElement($projects), // Seleccionar un proyecto aleatorio
            'news_category_id' => $this->faker->randomElement($categories), // Seleccionar una categoría aleatoria
            'publication_date' => $this->faker->dateTime,
            'is_premium' => $this->faker->boolean,
            'user_id' => $this->faker->randomElement($users), // Usuario por defecto
        ];
    }
}
