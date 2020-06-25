<?php

namespace App\Http\Controllers;

use App\Model\ContactTableModel;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    function contactList(){
        $result=ContactTableModel::all();
        return $result;
    }
}
