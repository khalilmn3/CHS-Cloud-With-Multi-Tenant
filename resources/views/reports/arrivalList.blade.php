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
        <td colspan="2" class="s6">Title</td>
        <td colspan="2" class="s6">Full Name</td>
        <td class="s5">Room #</td>
        <td class="s5">Pax</td>
        <td class="s5">NT</td>
        <td colspan="3" class="s5">RSV</td>
        <td class="s5">W/I</td>
        <td class="s7">Weekday Rate</td>
        <td class="s7">Weekend Rate</td>
        <td colspan="2" class="s7">Discount</td>
        <td colspan="2" class="s6">Group</td>
    </tr>
    </thead >
    <tbody>
        {{$number = 1 }}
        {{$totalRoom = 0}}
        {{$totalPax = 0}}
        {{$totalRsv = 0}}
        {{$totalWlk = 0}}
        @foreach ($data['data'] as $item)
            <tr style="height:19px">
                <td class="s8">{{$number++}}</td>
                <td colspan="2" class="s8">{{ $item->ReservationNumber }}</td>
                <td colspan="2" class="s9">{{ $item->Title }}</td>
                <td colspan="2" class="s9">{{ $item->FullName }}</td>
                <td class="s8">{{ $item->RoomNumber }}</td>
                <td class="s8">{{ $item->Pax }}</td>
                <td class="s8">{{ $item->Nationality }}</td>
                <td colspan="3" class="s8" >{{ $item->ReservationCode }}</td>
                <td class="s8">{{ $item->WalkInCode }}</td>
                <td class="s10">{{ number_format($item->WeekdayRate) }}</td>
                <td class="s10">{{ number_format($item->WeekendRate) }}</td>
                <td colspan="2" class="s10">{{ number_format($item->Discount) }}</td>
                <td colspan="2" class="s9" >{{ $item->Group }}</td>
            </tr>
            {{$totalRoom++}}
            {{$totalPax += $item->Pax}}
            {{$totalRsv += $item->ReservationCode != '' ? 1 : 0}}
            {{$totalWlk += $item->WalkInCode != '' ? 1 : 0}}
        @endforeach
        <tr style="height:29px">
            <td colspan="7" class="s5">TOTAL</td>
            <td class="s5">{{ $totalRoom }}</td>
            <td class="s5">{{ $totalPax }}</td>
            <td class="s5" >&nbsp;</td>
            <td colspan="3" class="s5" >{{ $totalRsv }}</td>
            <td class="s5">{{ $totalWlk}}</td>
            <td colspan="3" class="s5">&nbsp;</td>
            <td class="s5" >&nbsp;</td>
            <td class="s5" >&nbsp;</td>
            <td colspan="2" class="s5" >&nbsp;</td>
            <td colspan="2" class="s5" >&nbsp;</td>
        </tr>
    </tbody>
    </table>
@endsection
<style>
    @media print{@page {size: landscape}}
.page_break {page-break-before: always;}
.s0 {
 font-family: Arial;
 font-size: 13px;
 color: #000000; font-style: normal;
 background-color: transparent;
 text-align: left; vertical-align: top;
}
.s1 {
 font-family: Arial;
 font-size: 16px;
 color: #000000; font-weight: bold; font-style: normal;
 background-color: transparent;
 text-align: center; vertical-align: top;
 padding-top: 1px;
}
.s2 {
 font-family: Arial;
 font-size: 13px;
 color: #000000; font-style: normal;
 background-color: transparent;
 text-align: center; vertical-align: top;
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
 text-align: left; vertical-align: top;
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
 text-align: center; vertical-align: top;
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
 text-align: center; vertical-align: middle;
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
 text-align: left; vertical-align: middle;
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
 text-align: right; vertical-align: middle;
 padding-right: 4px;
}
.s8 {
 font-family: Arial;
 font-size: 12px;
 color: #000000; font-style: normal;
 background-color: transparent;
 text-align: center; vertical-align: top;
 padding-top: 2px;
}
.s9 {
 font-family: Arial;
 font-size: 12px;
 color: #000000; font-style: normal;
 background-color: transparent;
 text-align: left; vertical-align: top;
 padding-top: 2px;
 padding-left: 4px;
}
.s10 {
 font-family: Arial;
 font-size: 12px;
 color: #000000; font-style: normal;
 background-color: transparent;
 text-align: right; vertical-align: top;
 padding-top: 2px;
 padding-right: 4px;
}
.s11 {
 font-family: Arial;
 font-size: 11px;
 color: #000000; font-style: normal;
 background-color: transparent;
 text-align: left; vertical-align: top;
 padding-top: 1px;
 padding-left: 2px;
}
.s12 {
 font-family: Arial;
 font-size: 11px;
 color: #000000; font-style: normal;
 background-color: transparent;
 text-align: right; vertical-align: top;
 padding-top: 1px;
 padding-right: 2px;
}
P {margin: 0;}
--></style>
