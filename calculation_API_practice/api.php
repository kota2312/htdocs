<?php
$input = json_decode(file_get_contents('php://input'), true);
$arrayFunction = "";
$errorText = "";

/*
var_dump($input);
exit;
*/

if($input['leftNum'] !== "" && $input['rightNum'] !== "") {
    $leftNum = $input['leftNum'];
    $rightNum = $input['rightNum'];
    $arrayFunction = array (
        multiplication($leftNum, $rightNum),
        add($leftNum, $rightNum),
        subtraction($leftNum, $rightNum),
        division($leftNum, $rightNum)
    );
}
else {
    $errorText = "正しく数値を入力してください";
};

$response = array(
    "result" => $arrayFunction,
    "error" => $errorText
);

echo json_encode($response);



function add($a, $b) {
    $result = $a + $b;
    return $result;   
}

function subtraction($a, $b) {
    $result = $a - $b;
    return $result;   
}

function multiplication($a, $b) {
    $result = $a * $b;
    return $result;
}

function division($a, $b) {
    $result = $a / $b;
    return $result;
}

//$result = $leftNum * $rightNum;




?>