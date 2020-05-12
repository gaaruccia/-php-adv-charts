<?php
  require_once "database.php";

  header("Content-Type: application/json");

  $res = $graphs["fatturato"];

  echo json_encode($res);
?>
