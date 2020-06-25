<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ContactTableModel;

class ContactTableController extends Controller
{
    function onContactSend(Request $req){
        $name=$req->input('name');
        $email=$req->input('email');
        $message=$req->input('message');
        $result=ContactTableModel::insert(['name'=>$name,'email'=>$email,'message'=>$message]);

        if($result==true){
            return 1;
        }else{
            return 0;
        }
    }
}
