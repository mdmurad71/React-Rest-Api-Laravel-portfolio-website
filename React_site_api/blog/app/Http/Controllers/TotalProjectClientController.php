<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\HomeEtcModel;


class TotalProjectClientController extends Controller
{
    function onAllSelect(){
        $result=HomeEtcModel::select('video_description','video_url')->get();
        return $result;
    }
}
