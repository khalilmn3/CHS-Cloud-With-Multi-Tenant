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
        <th class="s5">#</th>
        <th colspan="2" class="s5">Reserv. #</th>
        <th colspan="2" class="s5">Room #</th>
        <th class="s6">Title</th>
        <th colspan="2" class="s6">Full Name</th>
        <th class="s5">Arrival</th>
        <th colspan="2" class="s5">Departure</th>
        <th colspan="3" class="s6">Rate Type</th>
        <th class="s7">Deposit</th>
        <th colspan="2" class="s5">Status</th>
        <th colspan="2" class="s6">Group</th>
    </tr>
    </thead >
    <tbody>
        {{$number = 1 }}
        {{$total = 0}}
        @foreach ($data['data'] as $item)
            <tr style="height:19px">
            <td class="s8">{{$number++}}</td>
                <td colspan="2" class="s8">{{$item->number}}</td>
                <td colspan="2" class="s8">{{$item->RoomNumber}}</td>
                <td class="s9" style="font-size:1px">{{$item->title}}</td>
                <td colspan="2" class="s9">{{$item->FullName}}</td>
                <td class="s10">{{ $item->DateArrival }}</td>
                <td colspan="2" class="s10">{{ $item->DateDeparture }}</td>
                <td colspan="3" class="s9">{{ $item->RateType }}</td>
                <td class="s11">{{number_format($item->Deposit)}}</td>
                <td colspan="2" class="s8">{{ $item->Status }}</td>
                <td colspan="2" class="s9">{{ $item->Group }}</td>
            </tr>
            {{$total+=$item->Deposit}}
        @endforeach
        <tr style="height:29px">
            <td colspan="14" class="s5">TOTAL</td><td class="s14">{{number_format($total)}}</td><td colspan="2" class="s5" style="font-size:1px">&nbsp;</td><td colspan="2" class="s5" style="font-size:1px">&nbsp;</td>
        </tr>
    </tbody>
    </table>
@endsection
<style>
    .page_break {page-break-before: always;}
    @media print{@page {size: landscape}}
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
     text-align: right;
     vertical-align: middle;
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
     text-align: Center; vertical-align: Top;
     padding-top: 2px;
    }
    .s11 {
     font-family: Arial;
     font-size: 12px;
     color: #000000; font-style: normal;
     background-color: transparent;
     text-align: right;
     float: right;
     vertical-align: Top;
     padding-top: 2px;
     padding-right: 4px;
    }
    .s12 {
     font-family: Arial;
     font-size: 11px;
     color: #000000; font-style: normal;
     background-color: transparent;
     text-align: Left; vertical-align: Top;
     padding-top: 1px;
     padding-left: 2px;
    }
    .s13 {
     font-family: Arial;
     font-size: 11px;
     color: #000000; font-style: normal;
     background-color: transparent;
     text-align: Right; vertical-align: Top;
     padding-top: 1px;
     padding-right: 2px;
    }
    .s14 {
     font-family: Arial;
     font-size: 12px;
     color: #000000; font-style: normal;
     background-color: transparent;
     border-left-width: 0px;
     border-right-width: 0px;
     border-top-color:#000000; border-top-style: solid; border-top-width: 1px;
     border-bottom-color:#000000; border-bottom-style: solid; border-bottom-width: 1px;
     text-align: right;
      vertical-align: middle;
     padding-right: 4px;
    }
    </style>
