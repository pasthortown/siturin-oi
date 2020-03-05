<?php

class PostgreSQLCheck
{
    private $ipServer;
    private $user;
    private $password;
    private $dbName;

    public function __construct($ipServer, $user, $password, $dbName){
        $this->ipServer = $ipServer;
        $this->user = $user;
        $this->password = $password;
        $this->dbName = $dbName;
    }

    private function conectar(){
        try 
        {
            $this->Conexion = new PDO("pgsql:host=$this->ipServer;dbname=$this->dbName", $this->user, $this->password);
            return true;
        }
        catch (PDOException $e) 
        {
            return false;
        }
    }
    
    private function desconectar(){
        $this->Conexion = null;
    }
    
    function check() {
        $toReturn = $this->conectar() ? 'Conectado exitosamente' : 'No Conectado';
        $this->desconectar();
        return $toReturn;
    }
}

$postgreSQLCheck = new PostgreSQLCheck('127.0.0.1', 'prueba', '12345678', 'SIETE');
echo $postgreSQLCheck->check();