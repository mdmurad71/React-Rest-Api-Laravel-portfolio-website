<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class CourseTableModel extends Model
{
    protected $table = 'course_table';
    protected $primaryKey = 'id';
    public $incrementing = true;
    protected $keyType = 'int';
    public $timestamps = false;
}
