<?php

namespace App\Http\Controllers\ServerDS;

use App\Http\Controllers\Controller;
use GuzzleHttp\Client;
use GuzzleHttp\Psr7;
use GuzzleHttp\Exception\ClientException;
use Illuminate\Http\Request;

class MethodController extends Controller
{
    protected static $uri = 'http://localhost:8093/dschs/api/Tsvrmethod/';
    // protected static $uri ='http://localhost:8093/dschs/api/Tsvrmethod/';

    public static function getAPI(String $function, $params, $params2){
        $client = new Client();
        $response = $client->request('GET', MethodController::$uri.$function.'/'.$params2,[
            'query' => $params
        ]);

        return $response->getBody()->getContents();
    }


    public static function postAPI(String $function, $params, $params2){
        $client = new Client();
        $response =$client->request('POST', MethodController::$uri.$function.'/'.$params2,[
            'json' => $params
        ]);

        return $response->getBody()->getContents();
    }

    public static function putAPI(String $function, $params){
        $client = new Client();
        $response = $client->request('PUT', MethodController::$uri.$function,[
            'query' => ['data' => base64_encode(json_encode($params))]
        ]);


        return $response->getBody()->getContents();
    }

    public static function deleteAPI(String $function, $params){
            $client = new Client();
        try{
            $response = $client->request('DELETE', MethodController::$uri.$function,[
                'query' => ['data' => base64_encode(json_encode($params))]
            ]);
        }catch (ClientException $e) {
            // echo Psr7\Message::toString($e->getRequest());
            // echo Psr7\Message::toString($e->getResponse());
            return response()->json(['error'=>Psr7\Message::toString($e->getResponse())], 403);
        }

        return $response->getBody()->getContents();
    }
}
