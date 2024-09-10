<?php
// Вывод версии PHP
echo "<h1>PHP Version</h1>";
echo "<p>Current PHP version: " . phpversion() . "</p>";

// Проверка, доступен ли MySQL
if (function_exists('mysqli_connect')) {
    echo "<p>MySQLi extension is available.</p>";
} else {
    echo "<p>MySQLi extension is not available.</p>";
}

// Проверка, доступна ли поддержка JSON
if (function_exists('json_encode')) {
    echo "<p>JSON support is available.</p>";
} else {
    echo "<p>JSON support is not available.</p>";
}

// Проверка, доступна ли поддержка файловой системы
if (function_exists('file_get_contents')) {
    echo "<p>File system functions are available.</p>";
} else {
    echo "<p>File system functions are not available.</p>";
}
?>
