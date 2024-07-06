<?php

trait ResponseController
{

    public function success(String $route)
    {
        return to_route($route);
    }
}
