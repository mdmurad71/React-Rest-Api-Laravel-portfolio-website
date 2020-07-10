<?php

namespace App\Http\Controllers;

use App\Model\AdminLoginModel;
use Illuminate\Http\Request;

class AdminLoginController extends Controller
{
    function LoginPage(){
        return view('Login');
    }

    function onLogin(Request $request){
        $UserName=$request->UserName;
        $Password=$request->Password;
        $Count=AdminLoginModel::where('user_name', $UserName)->where('password', $Password)->count();

        if($Count==1){
            $request->session()->put('userNameKey', $UserName);
            return '1';
        }else{
            return '0';
        }
    }

    function onLogout(Request $request){
        $request->session()->flash();
        return redirect('/LoginPage');
    }



}
