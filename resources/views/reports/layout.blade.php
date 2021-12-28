<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html><head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name=Generator content="FastReport 5.0 http://www.fast-report.com">

<title>Reservation List</title>
</head>
<body bgcolor="#FFFFFF" text="#000000">
    <header>
        <h2>{{$company->name}}</h2>
        <div><span>{{$company->CityStreet}}</span></div>
        <div><span>{{$company->CountryState}}</span></div>
        <div><span>{{$company->Contact}}</span></div>
    </header>
    <div class="divider"/>
    @yield('title')

    <div class="content">
        @yield('content')
    </div>

{{-- /* FOOTER */ --}}
    <div class="footer">
        <div style="display: flex">
            {{-- <div class="container">Printed: {{date('d/m/Y, h:i:s A')}}</div> --}}
            {{-- <div style="float: right">Page 1 of 1</div> --}}
        </div>
    </div>
</body>
</html>

<style type="text/css">
    <!--
    header{
        font-size: 14px;
        margin: auto;
        width: 50%;
        text-align: center;
        padding-bottom: 5px;
    }
    .divider{
        margin: auto;
        width: 50%;
        text-align: center;
        height: 2px;
        width: 100%;
        display: block;
        background-color:dimgrey;
    }

    .title{
        padding-top: 20px;
        margin: auto;
        margin-bottom:  0px;
        width: 50%;
        text-align: center;
        text-decoration: underline;
    }
    .date{
        font-size: 12px;
        margin: auto;
        margin-bottom: 20px;
        width: 50%;
        text-align: center;
    }
    .footer{
        position: fixed;
        bottom: 0;
        font-size: 12px;
    }
    .container{
        align-items: stretch;
    }
    .item{
        display: flex
    }
    P {margin: 0;}
    --></style>

