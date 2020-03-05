<?php

class CurlHttp
{
    protected function httpPost($url, $data=NULL, $headers = NULL, $token) {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POST, 1);
        if(!empty($data)){
            curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
        }
        $headersSend = array('Content-Type: application/json');
        array_push($headersSend, 'api_token:'.$token);
        foreach($headers as $header) {
            array_push($headersSend, $header);
        }
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headersSend);
        $response = curl_exec($ch);

        if (curl_error($ch)) {
            trigger_error('Curl Error:' . curl_error($ch));
        }
        curl_close($ch);
        return $response;
    }

    protected function httpGet($url, $data=NULL, $headers = NULL, $token) {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        if(!empty($data)){
            curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
        }
        $headersSend = array();
        array_push($headersSend, 'api_token:'.$token);
        foreach($headers as $header) {
            array_push($headersSend, $header);
        }
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headersSend);
        $response = curl_exec($ch);
        if (curl_error($ch)) {
            trigger_error('Curl Error:' . curl_error($ch));
        }
        curl_close($ch);
        return $response;
    }

    protected function httpPut($url, $data=NULL, $headers = NULL, $token) {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PUT');
        if(!empty($data)){
            curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
        }
        $headersSend = array('Content-Type: application/json');
        array_push($headersSend, 'api_token:'.$token);
        foreach($headers as $header) {
            array_push($headersSend, $header);
        }
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headersSend);
        $response = curl_exec($ch);
        if (curl_error($ch)) {
            trigger_error('Curl Error:' . curl_error($ch));
        }
        curl_close($ch);
        return $response;
    }

    protected function httpDelete($url, $data=NULL, $headers = NULL, $token) {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'DELETE');
        if(!empty($data)){
            curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
        }
        $headersSend = array();
        array_push($headersSend, 'api_token:'.$token);
        foreach($headers as $header) {
            array_push($headersSend, $header);
        }
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headersSend);
        $response = curl_exec($ch);
        if (curl_error($ch)) {
            trigger_error('Curl Error:' . curl_error($ch));
        }
        curl_close($ch);
        return $response;
    }
}