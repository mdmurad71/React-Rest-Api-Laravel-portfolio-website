<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


//for contact page
Route::get('/contactList', 'ContactController@contactList')->middleware('loginCheck');
Route::post('/contactDelete', 'ContactController@contactDelete')->middleware('loginCheck');

//for project page
Route::get('/projectList', 'ProjectController@projectList')->middleware('loginCheck');
Route::post('/projectDelete', 'ProjectController@projectDelete')->middleware('loginCheck');

//for service page
Route::get('/serviceList', 'ServiceController@serviceList')->middleware('loginCheck');
Route::post('/serviceDelete', 'ServiceController@serviceDelete')->middleware('loginCheck');

//for review page
Route::get('/reviewList', 'ReviewController@reviewList')->middleware('loginCheck');
Route::post('/reviewDelete', 'ReviewController@reviewDelete')->middleware('loginCheck');

//for course page
Route::get('/courseList', 'CourseController@courseList')->middleware('loginCheck');
Route::post('/courseDelete', 'CourseController@courseDelete')->middleware('loginCheck');

//for Home page
Route::get('/CountSummary', 'HomeController@CountSummary')->middleware('loginCheck');


Route::get('/LoginPage', 'AdminLoginController@LoginPage');
Route::get('/onLogin/{UserName}/{Password}', 'AdminLoginController@onLogin');
Route::get('/onLogout', 'AdminLoginController@onLogout');




Route::get('/', function () {
    return view('index');
})->middleware('loginCheck');

Route::get('{AnyRoute}', function () {
    return view('index');
})->where('AnyRoute', '.*')->middleware('loginCheck');
