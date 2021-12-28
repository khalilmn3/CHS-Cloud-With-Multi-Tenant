<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use PDF;

class PdfController extends Controller

{
    public function generatePDF()

    {
        $data = ['title' => 'Welcome to belajarphp.net'];

        $pdf = PDF::loadView('allreservation', $data);
        return $pdf->stream('laporan-pdf.pdf');
    }
}
