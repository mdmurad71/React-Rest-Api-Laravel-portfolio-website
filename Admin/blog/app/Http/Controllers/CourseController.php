<?php

namespace App\Http\Controllers;
use App\Model\CourseTableModel;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    function courseList(){
        $result=CourseTableModel::all();
        return $result;
    }

function courseDelete(Request $request){
   $id= $request->input('id');
   $result=CourseTableModel::where('id', '=', $id)->delete();
   return $result;
}
}
