<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class ContactTableModel extends Model
{
    protected $table = 'contact';
    protected $primaryKey = 'id';
    public $incrementing = true;
    protected $keyType = 'int';
    public $timestamps = false;
}
