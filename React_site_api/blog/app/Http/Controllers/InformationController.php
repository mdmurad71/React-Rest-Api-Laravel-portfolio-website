<?php

namespace App\Http\Controllers;
use App\InformationModel;
use Illuminate\Http\Request;

class InformationController extends Controller
{
    function onAllSelect(){
        $result=InformationModel::all();
        return $result;
    }
}



