<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ContactTableModel extends Model
{
    protected $table = 'contact_table';
    protected $primaryKey = 'id';
    public $incrementing = true;
    protected $keyType = 'int';
    public $timestamps = false;
}
