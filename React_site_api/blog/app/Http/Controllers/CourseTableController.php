<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\CourseTableModel;

class CourseTableController extends Controller
{
  function onSelectFour(){
        $result=CourseTableMOdel::limit(4)->get();
        return $result;

    }

    function onAllSelect(){
        $result=CourseTableModel::all();
        return $result;
    }

   function onAllSelectDetails(Request $req){
        $id=$req->input('id');
        $result=CourseTableModel::whwre(['id'=>$id])->get();
        return $result;
    }

}
