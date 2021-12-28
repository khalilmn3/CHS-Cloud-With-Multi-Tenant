<?php

namespace App\Http\Controllers\ServerDS;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class MethodStringListController extends Controller
{
    public static $reservation = [
        'getReservation' => 'getXReservationList',
        'getDataLookup' => 'getXDataLookup',
        'getRoomNumber' => 'getXRoomNumber',
        'getRoomRate' => 'getXRoomRate',
        'getReservationStatus' => 'getXReservationStatus',
        'getCalculateDailyRate' => 'getXCalculateDailyRate',
        'editReservation' => 'editReservation',
        'saveReservation' => 'saveReservation',
        'cancelReservation' => 'cancelReservation',
        'checkInReservation' => 'checkInReservation',
    ];

    public static $guestInHouse = [
        'getGuestInHouse' => 'getXInHouseList',
    ];

    public static $login = 'UserLogin';
    public static $specialAccess = 'specialAccess';
    public static $guestGroup = [
        'getGuestGroup' => 'getXGuestGroupList',
        'insertGuestGroup' => 'insertGuestGroup',
        'editGuestGroup' => 'editGuestGroup',
        'updateGuestGroup' => 'updateGuestGroup',
        'deleteGuestGroup' => 'deleteGuestGroup',
    ];
}
