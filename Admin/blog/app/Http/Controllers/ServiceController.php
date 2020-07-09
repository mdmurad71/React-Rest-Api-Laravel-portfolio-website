<?php

namespace App\Http\Controllers;
use App\Model\ServiceModel;

use Illuminate\Http\Request;

class ServiceController extends Controller
{
    function serviceList(){
        $result=ServiceModel::all();
        return $result;
    }

function serviceDelete(Request $request){
   $id= $request->input('id');
   $result=ServiceModel::where('id', '=', $id)->delete();
   return $result;
}
}
