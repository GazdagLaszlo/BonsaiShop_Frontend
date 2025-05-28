<?php
    class Mysql{
        private $host = 'localhost';
        private $user = 'root';
        private $password = '';
        private $table = 'bonsaishop';

        private $db;

        public function __construct(){
            $this->db = new mysqli($this->host,$this->user,$this->password,$this->table);
        }

        public function dataGet($query){
            if($this->db->connect_errno == 0){
                $result = $this->db->query($query);
                if($this->db->errno == 0){
                    if($result->num_rows != 0){
                        $answer = $result->fetch_all(MYSQLI_ASSOC);
                    }
                    else{
                        $answer = array('answer' => "No results found");
                    }                    
                }
                else{
                    $answer = array('answer' => $this->db->error);
                }
            }
            else{
                $answer = array('answer' => $this->db->connect_error);
            }
            return $answer;
        }

        protected function data_upload($query){
            $this->db->query($query);

            if($this->db->affected_rows > 0){
                $uzenet = "Succesful upload";
            }
            else{
                $uzenet = "Unsuccesful upload";
            }
            echo $uzenet;
        }
    }
?>