<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = ['image_path', 'name', 'due_date', 'description', 'status', 'created_by', 'updated_by'];

    public function tasks()
    {
        return $this->hasMany(Task::class);
    }

    public function createdBy()
    {
        # code...
        return $this->belongsTo(User::class, 'created_by');
    }

    public function updatedBy()
    {
        return $this->belongsTo(User::class, 'updated_by');
    }
}
