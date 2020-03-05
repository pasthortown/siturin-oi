<?php

class SoapTest
{
  protected function soap() {
    $opts = array(
        'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
      )
    );
    $context = stream_context_create($opts);
    $wsdl = "http://interoperabilidad.dinardap.gob.ec:7979/interoperador?wsdl";
    $this->client = new SoapClient($wsdl, array(
      'stream_context' => $context, 'trace' => true,
      'login' => 'wsmtint', 'password' => '7ZU1X!)nIM')
    );  
    return $this->client;
  }
    
  public function Cedula($identificacion, $codigoPaquete) {
    $this->client = $this->soap();
    try
    {
      $result = $this->client->getFichaGeneral(["numeroIdentificacion"=>$identificacion, "codigoPaquete"=>$codigoPaquete]);
      return json_encode($result,200);
    }catch (Exception $e) {
      return $e;
    }
  }
}

$soapTest = new SoapTest();
echo $soapTest->Cedula('1720364049', 87);
