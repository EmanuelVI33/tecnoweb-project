<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ComandoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // notas.add(new String[]{"1", "Gestion de usuarios", "agregar", "nombre, correo, contraseña, puntos", "agregar usuario [Pedro; pedrito@gmail.com; 123456; 30]"});
        // notas.add(new String[]{"1", "Gestion de usuarios", "modificar", "id, nombre, correo, contraseña, puntos", "modificar usuario [1; Pedro; pedrito@gmail.com; 123456; 30]"});
        // notas.add(new String[]{"1", "Gestion de usuarios", "listar", "__", "listar usuario"});
        // notas.add(new String[]{"1", "Gestion de usuarios", "eliminar", "id", "eliminar usuario [1]"});

        // notas.add(new String[]{"2", "Gestion de proyectos", "agregar", "nombre, descripcion, cover_url, video_url, status", "agregar proyecto [Calle 7; programa de competencia; url de la portada; url del video; edition]"});
        // notas.add(new String[]{"2", "Gestion de proyectos", "modificar", "id, nombre, descripcion, cover_url, video_url, status", "modificar proyecto [1; Calle 7; programa de competencia; url de la portada; url del video; edition]"});
        // notas.add(new String[]{"2", "Gestion de proyectos", "listar", "__", "listar proyecto"});
        // notas.add(new String[]{"2", "Gestion de proyectos", "eliminar", "id", "eliminar proyecto [1]"});

        // notas.add(new String[]{"3", "Gestion de presentadores", "agregar", "nombre, photo_url, sexo", "agregar presentador [Antonio Perez; url de la foto; hombre]"});
        // notas.add(new String[]{"3", "Gestion de presentadores", "modificar", "id, nombre, photo_url, sexo", "modificar presentador [1; Antonio Perez; url de la foto; hombre]"});
        // notas.add(new String[]{"3", "Gestion de presentadores", "listar", "__", "listar presentador"});
        // notas.add(new String[]{"3", "Gestion de presentadores", "eliminar", "id", "eliminar presentador [1]"});

        // notas.add(new String[]{"4", "Gestion de noticias", "agregar", "titulo, contenido, fecha de publicacion", "agregar noticia [noticia del dia; contenido de la noticia; aaaa-mm-dd]"});
        // notas.add(new String[]{"4", "Gestion de noticias", "modificar", "id, titulo, contenido, fecha de publicacion", "modificar noticia [1; noticia del dia; contenido de la noticia; aaaa-mm-dd]"});
        // notas.add(new String[]{"4", "Gestion de noticias", "listar", "__", "listar noticia"});
        // notas.add(new String[]{"4", "Gestion de noticias", "eliminar", "id", "eliminar noticia [1]"});

        // notas.add(new String[]{"5", "Gestion de contenido", "agregar", "titulo, url del video, tipo", "agregar contenido [presentacion; video url; presenter]"});
        // notas.add(new String[]{"5", "Gestion de contenido", "modificar", "id, titulo, url del video, tipo", "modificar contenido [1; presentacion; video url; presenter]"});
        // notas.add(new String[]{"5", "Gestion de contenido", "listar", "__", "listar contenido"});
        // notas.add(new String[]{"5", "Gestion de contenido", "eliminar", "id", "eliminar contenido [1]"});

        // notas.add(new String[]{"6", "Gestion de suscripciones", "agregar", "nombre, precio, duracion, descripcion", "agregar suscripcion [mensual; 10; 30; plan mensual]"});
        // notas.add(new String[]{"6", "Gestion de suscripciones", "modificar", "id, nombre, precio, duracion, descripcion", "modificar suscripcion [1; mensual; 10; 30; plan mensual]"});
        // notas.add(new String[]{"6", "Gestion de suscripciones", "listar", "__", "listar suscripcion"});
        // notas.add(new String[]{"6", "Gestion de suscripciones", "eliminar", "id", "eliminar suscripcion [1]"});

        // notas.add(new String[]{"7", "Gestion de pagos", "agregar", "fecha, tipo de pago(1=QR, 2=TigoMoney), nro de telefono, nombre del cliente, carnet de identidad", "agregar pago [indicar la fecha aaaa-mm-dd; 1; 73397228; Pedrito; 24837749]"});
        // notas.add(new String[]{"7", "Gestion de pagos", "modificar", "id, fecha, tipo de pago(1=QR, 2=TigoMoney), nro de telefono, nombre del cliente, carnet de identidad", "modificar pago [1; indicar la fecha aaaa-mm-dd; 1; 73397228; Pedrito; 24837749]"});
        // notas.add(new String[]{"7", "Gestion de pagos", "listar", "__", "listar pago"});
        // notas.add(new String[]{"7", "Gestion de pagos", "eliminar", "id", "eliminar pago [1]"});

        // notas.add(new String[]{"8", "Reportes y estadisticas", "listar", "__", "listar estadistica"});


        $comandos = [
            ['nro' => '1.1', 'caso_uso' => 'Gestion de usuarios', 'accion' => 'agregar', 'parametros' => 'nombre, correo, contraseña, puntos', 'ejemplo' => 'agregar usuario [Pedro; pedrito@gmail.com; 123456; 30]'],
            ['nro' => '1.2', 'caso_uso' => 'Gestion de usuarios', 'accion' => 'modificar', 'parametros' => 'id, nombre, correo, contraseña, puntos', 'ejemplo' => 'modificar usuario [1; Pedro; pedrito@gmail.com; 123456; 30]'],
            ['nro' => '1.3', 'caso_uso' => 'Gestion de usuarios', 'accion' => 'listar', 'parametros' => '__', 'ejemplo' => 'listar usuario'],
            ['nro' => '1.4', 'caso_uso' => 'Gestion de usuarios', 'accion' => 'eliminar', 'parametros' => 'id', 'ejemplo' => 'eliminar usuario [1]'],
            // 2
            ['nro' => '2.1', 'caso_uso' => 'Gestion de proyectos', 'accion' => 'agregar', 'parametros' => 'nombre, descripcion, cover_url, video_url, status', 'ejemplo' => 'agregar proyecto [Calle 7; programa de competencia; url de la portada; url del video; edition]'],
            ['nro' => '2.2', 'caso_uso' => 'Gestion de proyectos', 'accion' => 'modificar', 'parametros' => 'id, nombre, descripcion, cover_url, video_url, status', 'ejemplo' => 'modificar proyecto [1; Calle 7; programa de competencia; url de la portada; url del video; edition]'],
            ['nro' => '2.3', 'caso_uso' => 'Gestion de proyectos', 'accion' => 'listar', 'parametros' => '__', 'ejemplo' => 'listar proyecto'],
            ['nro' => '2.4', 'caso_uso' => 'Gestion de proyectos', 'accion' => 'eliminar', 'parametros' => 'id', 'ejemplo' => 'eliminar proyecto [1]'],
            // 3
            ['nro' => '3.1', 'caso_uso' => 'Gestion de presentadores', 'accion' => 'agregar', 'parametros' => 'nombre, photo_url, sexo', 'ejemplo' => 'agregar presentador [Antonio Perez; url de la foto; hombre]'],
            ['nro' => '3.2', 'caso_uso' => 'Gestion de presentadores', 'accion' => 'modificar', 'parametros' => 'id, nombre, photo_url, sexo', 'ejemplo' => 'modificar presentador [1; Antonio Perez; url de la foto; hombre]'],
            ['nro' => '3.3', 'caso_uso' => 'Gestion de presentadores', 'accion' => 'listar', 'parametros' => '__', 'ejemplo' => 'listar presentador'],
            ['nro' => '3.4', 'caso_uso' => 'Gestion de presentadores', 'accion' => 'eliminar', 'parametros' => 'id', 'ejemplo' => 'eliminar presentador [1]'],
            // 4
            ['nro' => '4.1', 'caso_uso' => 'Gestion de noticias', 'accion' => 'agregar', 'parametros' => 'titulo, contenido, fecha de publicacion', 'ejemplo' => 'agregar noticia [noticia del dia; contenido de la noticia; aaaa-mm-dd]'],
            ['nro' => '4.2', 'caso_uso' => 'Gestion de noticias', 'accion' => 'modificar', 'parametros' => 'id, titulo, contenido, fecha de publicacion', 'ejemplo' => 'modificar noticia [1; noticia del dia; contenido de la noticia; aaaa-mm-dd]'],
            ['nro' => '4.3', 'caso_uso' => 'Gestion de noticias', 'accion' => 'listar', 'parametros' => '__', 'ejemplo' => 'listar noticia'],
            ['nro' => '4.4', 'caso_uso' => 'Gestion de noticias', 'accion' => 'eliminar', 'parametros' => 'id', 'ejemplo' => 'eliminar noticia [1]'],
            // 5
            ['nro' => '5.1', 'caso_uso' => 'Gestion de contenido', 'accion' => 'agregar', 'parametros' => 'titulo, url del video, tipo', 'ejemplo' => 'agregar contenido [presentacion; video url; presenter]'],
            ['nro' => '5.2', 'caso_uso' => 'Gestion de contenido', 'accion' => 'modificar', 'parametros' => 'id, titulo, url del video, tipo', 'ejemplo' => 'modificar contenido [1; presentacion; video url; presenter]'],
            ['nro' => '5.3', 'caso_uso' => 'Gestion de contenido', 'accion' => 'listar', 'parametros' => '__', 'ejemplo' => 'listar contenido'],
            ['nro' => '5.4', 'caso_uso' => 'Gestion de contenido', 'accion' => 'eliminar', 'parametros' => 'id', 'ejemplo' => 'eliminar contenido [1]'],
            // 6
            ['nro' => '6.1', 'caso_uso' => 'Gestion de suscripciones', 'accion' => 'agregar', 'parametros' => 'nombre, precio, duracion, descripcion', 'ejemplo' => 'agregar suscripcion [mensual; 10; 30; plan mensual]'],
            ['nro' => '6.2', 'caso_uso' => 'Gestion de suscripciones', 'accion' => 'modificar', 'parametros' => 'id, nombre, precio, duracion, descripcion', 'ejemplo' => 'modificar suscripcion [1; mensual; 10; 30; plan mensual]'],
            ['nro' => '6.3', 'caso_uso' => 'Gestion de suscripciones', 'accion' => 'listar', 'parametros' => '__', 'ejemplo' => 'listar suscripcion'],
            ['nro' => '6.4', 'caso_uso' => 'Gestion de suscripciones', 'accion' => 'eliminar', 'parametros' => 'id', 'ejemplo' => 'eliminar suscripcion [1]'],
            // 7
            ['nro' => '7.1', 'caso_uso' => 'Gestion de pagos', 'accion' => 'agregar', 'parametros' => 'fecha, tipo de pago(1=QR, 2=TigoMoney), nro de telefono, nombre del cliente, carnet de identidad', 'ejemplo' => 'agregar pago [indicar la fecha aaaa-mm-dd; 1; 73397228; Pedrito; 24837749]'],
            ['nro' => '7.2', 'caso_uso' => 'Gestion de pagos', 'accion' => 'modificar', 'parametros' => 'id, fecha, tipo de pago(1=QR, 2=TigoMoney), nro de telefono, nombre del cliente, carnet de identidad', 'ejemplo' => 'modificar pago [1; indicar la fecha aaaa-mm-dd; 1; 73397228; Pedrito; 24837749]'],
            ['nro' => '7.3', 'caso_uso' => 'Gestion de pagos', 'accion' => 'listar', 'parametros' => '__', 'ejemplo' => 'listar pago'],
            ['nro' => '7.4', 'caso_uso' => 'Gestion de pagos', 'accion' => 'eliminar', 'parametros' => 'id', 'ejemplo' => 'eliminar pago [1]'],
            // 8
            ['nro' => '8.1', 'caso_uso' => 'Reportes y estadisticas', 'accion' => 'listar', 'parametros' => '__', 'ejemplo' => 'listar estadistica'],
        ];

        \App\Models\Comando::insert($comandos);
    }
}