<?php

namespace App\Http\Controllers;

use App\Model\ContactTableModel;
use GuzzleHttp\Psr7\Request as Psr7Request;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    function contactList(){
        $result=ContactTableModel::all();
        return $result;
    }

function contactDelete(Request $request){
   $id= $request->input('id');
   $result=ContactTableModel::where('id', '=', $id)->delete();
   return $result;
}

}
