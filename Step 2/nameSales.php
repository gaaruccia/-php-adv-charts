<?php
  require_once "database.php";

  header("Content-Type: application/json");

  $info = $graphs["fatturato_by_agent"]["data"];
  $type = $graphs['fatturato_by_agent']['type'];
  $res['listaNomi'] = [];
  $res['listaSales'] = [];

  foreach ($info as $names => $sales) {
    $res['listaNomi'][] = $names;
    $res['listaSales'][] = $sales;
    $res['type'] = $type;
  }

  echo json_encode($res);
?>
