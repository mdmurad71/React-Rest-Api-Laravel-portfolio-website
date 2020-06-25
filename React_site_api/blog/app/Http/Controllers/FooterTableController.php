<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\FooterTableModel;

class FooterTableController extends Controller
{
    function onAllSelect(){
        $result=FooterTableModel::all();
        return $result;
    }
}
