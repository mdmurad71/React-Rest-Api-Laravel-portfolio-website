<?php

namespace App\Http\Controllers;

use App\Model\ClientReviewModel;
use App\Model\ContactTableModel;
use App\Model\CourseTableModel;
use App\Model\ProjectModel;
use App\Model\ServiceModel;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    function CountSummary(){
        $review=ClientReviewModel::count();
        $contact=ContactTableModel::count();
        $projects=ProjectModel::count();
        $courses=CourseTableModel::count();
        $service=ServiceModel::count();
        $totalCount=array(
            'review'=>$review, 
            'contact'=>$contact, 
            'projects'=>$projects,
            'courses'=>$courses,
            'service'=>$service,
        );
        return json_encode($totalCount);
    }
}
