<?php

namespace App\Http\Controllers;
use App\Model\ProjectModel;

use Illuminate\Http\Request;

class ProjectController extends Controller
{
    function projectList(){
        $result=ProjectModel::all();
        return $result;
    }

function projectDelete(Request $request){
   $id= $request->input('id');
   $result=ProjectModel::where('id', '=', $id)->delete();
   return $result;
}
}
