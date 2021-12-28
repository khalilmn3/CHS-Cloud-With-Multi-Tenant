@extends('reports/layout')

@section('title')
<div class="title">
    {{ $data['title'] }}
</div>
<div class="date">
    {{$data['date']}}
</div>
@endsection

@section('content')
    <table width="100%" border="0" cellspacing="0" cellpadding="0">
    <thead>
    <tr height="50">
        <td class="s5">#</td>
        <td colspan="2" class="s5">Reserv. #</td>
        <td colspan="2" class="s5">Room #</td>
        <td class="s6">Title</td>
        <td colspan="2" class="s6">Full Name</td>
        <td class="s5">Arrival</td>
        <td colspan="2" class="s5">Departure</td>
        <td colspan="4" class="s6">Rate Type</td>
        <td class="s7">Deposit</td>
        <td class="s5">Status</td>
        <td colspan="3" class="s6">Group</td>
    </tr>
    </thead >
    <tbody>
        {{$number = 1 }}
        {{$totalRoom = 0}}
        {{$totalDeposit = 0}}
        {{$totalAdult = 0}}
        {{$totalChild = 0}}
        @foreach ($data['data'] as $item)
            <tr style="height:19px">
                <td class="s8">{{$number++}}</td>
                <td colspan="2" class="s8">{{ $item->ReservationNumber}}</td>
                <td colspan="2" class="s8">{{ $item->RoomNumber }}</td>
                <td class="s9" >{{ $item->Title }}</td>
                <td colspan="2" class="s9">{{ $item->FullName }}</td>
                <td class="s10">{{ $item->DateArrival }}</td>
                <td colspan="2" class="s10">{{ $item->DateDeparture }}</td>
                <td colspan="4" class="s9"> {{ $item->RateType }}</td>
                <td class="s11">{{ $item->Deposit }}</td>
                <td class="s8">{{ $item->Status }}</td>
                <td colspan="3" class="s9" >{{ $item->Group }}</td>
            </tr>
            {{$totalRoom++}}
            {{$totalDeposit += $item->Deposit}}
            {{$totalAdult += $item->Adult}}
            {{$totalChild += $item->Child}}
        @endforeach
        <tr style="height:29px">
            <td colspan="3" class="s5">TOTAL</td>
            <td colspan="2" class="s5">{{ $totalRoom }}</td>
            <td class="s5" >&nbsp;</td>
            <td colspan="2" class="s5" >&nbsp;</td>
            <td class="s12">{{ number_format($totalDeposit) }}</td>
            <td colspan="3" class="s5" >&nbsp;</td>
            <td class="s5" >&nbsp;</td>
            <td colspan="3" class="s5" >&nbsp;</td>
            <td colspan="2" class="s5" >&nbsp;</td>
            <td class="s5">{{$totalAdult}}</td>
            <td class="s5">{{$totalChild}}</td>
            <td colspan="2" class="s5" >&nbsp;</td>
        </tr>
    </tbody>
    </table>
@endsection
<style type="text/css"><!--
    .page_break {page-break-before: always;}
    .s0 {
     font-family: Arial;
     font-size: 13px;
     color: #000000; font-style: normal;
     background-color: transparent;
     text-align: Left; vertical-align: Top;
    }
    .s1 {
     font-family: Arial;
     font-size: 16px;
     color: #000000; font-weight: bold; font-style: normal;
     background-color: transparent;
     text-align: Center; vertical-align: Top;
     padding-top: 1px;
    }
    .s2 {
     font-family: Arial;
     font-size: 13px;
     color: #000000; font-style: normal;
     background-color: transparent;
     text-align: Center; vertical-align: Top;
     padding-top: 1px;
    }
    .s3 {
     font-family: Arial;
     font-size: 13px;
     color: #000000; font-style: normal;
     background-color: transparent;
     border-left-width: 0px;
     border-right-width: 0px;
     border-top-color:#000000; border-top-style: double; border-top-width: 3px;
     border-bottom-width: 0px;
     text-align: Left; vertical-align: Top;
     padding-top: 1px;
     padding-left: 2px;
    }
    .s4 {
     font-family: Arial;
     font-size: 13px;
     color: #000000; font-weight: bold; font-style: normal;
     background-color: transparent;
     border-left-width: 0px;
     border-right-width: 0px;
     border-top-width: 0px;
     border-bottom-color:#000000; border-bottom-style: solid; border-bottom-width: 1px;
     text-align: Center; vertical-align: Top;
     padding-top: 1px;
    }
    .s5 {
     font-family: Arial;
     font-size: 12px;
     color: #000000; font-style: normal;
     background-color: transparent;
     border-left-width: 0px;
     border-right-width: 0px;
     border-top-color:#000000; border-top-style: solid; border-top-width: 1px;
     border-bottom-color:#000000; border-bottom-style: solid; border-bottom-width: 1px;
     text-align: Center; vertical-align: Middle;
    }
    .s6 {
     font-family: Arial;
     font-size: 12px;
     color: #000000; font-style: normal;
     background-color: transparent;
     border-left-width: 0px;
     border-right-width: 0px;
     border-top-color:#000000; border-top-style: solid; border-top-width: 1px;
     border-bottom-color:#000000; border-bottom-style: solid; border-bottom-width: 1px;
     text-align: Left; vertical-align: Middle;
     padding-left: 4px;
    }
    .s7 {
     font-family: Arial;
     font-size: 12px;
     color: #000000; font-style: normal;
     background-color: transparent;
     border-left-width: 0px;
     border-right-width: 0px;
     border-top-color:#000000; border-top-style: solid; border-top-width: 1px;
     border-bottom-color:#000000; border-bottom-style: solid; border-bottom-width: 1px;
     text-align: Right; vertical-align: Middle;
     padding-right: 4px;
    }
    .s8 {
     font-family: Arial;
     font-size: 12px;
     color: #000000; font-style: normal;
     background-color: transparent;
     text-align: Center; vertical-align: Top;
     padding-top: 2px;
    }
    .s9 {
     font-family: Arial;
     font-size: 12px;
     color: #000000; font-style: normal;
     background-color: transparent;
     text-align: Left; vertical-align: Top;
     padding-top: 2px;
     padding-left: 4px;
    }
    .s10 {
     font-family: Arial;
     font-size: 12px;
     color: #000000; font-style: normal;
     background-color: transparent;
     text-align: Right; vertical-align: Top;
     padding-top: 2px;
     padding-right: 4px;
    }
    .s11 {
     font-family: Arial;
     font-size: 12px;
     color: #000000; font-style: normal;
     background-color: transparent;
     text-align: Center; vertical-align: Top;
     padding-top: 2px;
    }
    .s12 {
     font-family: Arial;
     font-size: 12px;
     color: #000000; font-style: normal;
     background-color: transparent;
     border-left-width: 0px;
     border-right-width: 0px;
     border-top-color:#000000; border-top-style: solid; border-top-width: 1px;
     border-bottom-color:#000000; border-bottom-style: solid; border-bottom-width: 1px;
     text-align: Right; vertical-align: Middle;
     padding-right: 4px;
    }
    .s13 {
     font-family: Arial;
     font-size: 11px;
     color: #000000; font-style: normal;
     background-color: transparent;
     text-align: Left; vertical-align: Top;
     padding-top: 1px;
     padding-left: 2px;
    }
    .s14 {
     font-family: Arial;
     font-size: 11px;
     color: #000000; font-style: normal;
     background-color: transparent;
     text-align: Right; vertical-align: Top;
     padding-top: 1px;
     padding-right: 2px;
    }
    P {margin: 0;}
    --></style>
