
<?php

echo '<p> hello world</p>';
class Database
{
    private static $dbName = 'leveransdatabas' ;
    private static $dbHost = 'leverans.digpro.se' ;   //Database host, this is normally "localhost".
    private static $dbUsername = 'postgres';
    private static $dbUserPassword = 'codered';
    
    private static $cont  = null;
    
    public function __construct() {
        die('Init function is not allowed');
    }
    
    public static function connect()
    {
    // One connection through whole application
    if ( null == self::$cont )
    {     
        try
        {
        self::$cont =  new PDO( "mysql:host=".self::$dbHost.";"."dbname=".self::$dbName, self::$dbUsername, self::$dbUserPassword); 
        }
        catch(PDOException $e)
        {
        die($e->getMessage()); 
        }
    }
    return self::$cont;
    }
    
    public static function disconnect()
    {
        self::$cont = null;
    }
}
// Connecting, selecting database


/*
$dbconn = pg_connect("host=leverans.digpro.se dbname=leveransdatabas user=postgres password=codered")
    or die('Could not connect: ' . pg_last_error());

// Performing SQL query
$query = 'Select * from public.A';


$result = pg_query($query) or die('Query failed: ' . pg_last_error());

// Printing results in HTML
echo "<table>\n";
while ($line = pg_fetch_array($result, null, PGSQL_ASSOC)) {
    echo "\t<tr>\n";
    foreach ($line as $col_value) {
        echo "\t\t<td>$col_value</td>\n";
    }
    echo "\t</tr>\n";
}
echo "</table>\n";

// Free resultset
pg_free_result($result);

// Closing connection
pg_close($dbconn);*/
?>
