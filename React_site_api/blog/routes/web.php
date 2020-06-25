<?php



$router->get('/ChartData', ['middleware'=>'auth','uses'=>'ChartDataController@onAllSelect'] );
$router->get('/ClientReview', ['middleware'=>'auth','uses'=>'ClientReviewController@onAllSelect']);
$router->post('/ContactSend', ['middleware'=>'auth','uses'=>'ContactTableController@onContactSend']);

$router->get('/CourseHome', ['middleware'=>'auth','uses'=>'CourseTableController@onSelectFour']);
$router->get('/CourseAll', ['middleware'=>'auth','uses'=>'CourseTableController@onAllSelect']);
$router->post('/CourseDetails', ['middleware'=>'auth','uses'=>'CourseTableController@onAllSelectDetails']);

$router->get('/Footer', ['middleware'=>'auth','uses'=>'FooterTableController@onAllSelect']);
$router->get('/Information', ['middleware'=>'auth','uses'=>'InformationController@onAllSelect']);
$router->get('/Services', ['middleware'=>'auth','uses'=>'ServiceController@onAllSelect']);


$router->get('/ProjectHome', ['middleware'=>'auth','uses'=>'ProjectController@onSelect3']);
$router->get('/ProjectAll', ['middleware'=>'auth','uses'=>'ProjectController@onAllSelect']);
$router->post('/ProjectDetails', ['middleware'=>'auth','uses'=>'ProjectController@onSelectDetails']);


$router->get('/VideoHome', ['middleware'=>'auth','uses'=>'HomeEtcController@onSelectVideo']);
$router->get('/TotalProjectClient', ['middleware'=>'auth','uses'=>'HomeEtcController@onSelectProjectClient']);
$router->get('/TechDesc', ['middleware'=>'auth','uses'=>'HomeEtcController@onSelectTechDesc']);
$router->get('/HomeTitle', ['middleware'=>'auth','uses'=>'HomeEtcController@onSelectHomeTitle']);
