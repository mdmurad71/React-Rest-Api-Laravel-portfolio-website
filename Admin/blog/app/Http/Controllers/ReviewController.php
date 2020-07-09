<?php

namespace App\Http\Controllers;
use App\Model\ClientReviewModel;

use Illuminate\Http\Request;

class ReviewController extends Controller
{
    function reviewList(){
        $result=ClientReviewModel::all();
        return $result;
    }

function reviewDelete(Request $request){
   $id= $request->input('id');
   $result=ClientReviewModel::where('id', '=', $id)->delete();
   return $result;
}
}
