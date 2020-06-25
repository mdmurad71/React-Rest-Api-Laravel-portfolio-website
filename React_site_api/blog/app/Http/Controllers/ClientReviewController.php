<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ClientReviewModel;

class ClientReviewController extends Controller
{
    function onAllSelect(){
        $result=ClientReviewModel::all();
        return $result;
    }
}
