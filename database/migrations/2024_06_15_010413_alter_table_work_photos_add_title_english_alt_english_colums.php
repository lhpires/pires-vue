<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('work_photos', function (Blueprint $table) {
            $table->string('title_english',30)->nullable()->after('title')->after('title');
            $table->string('alt_english',30)->nullable()->after('alt')->after('alt');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('work_photos', function (Blueprint $table) {
            $table->dropColumn('title_english');
            $table->dropColumn('alt_english');
        });
    }
};
