# ajax_request
jQuery ajax wrapper

# Aufruf <br>
data = {}; <br>
data.action = 'myAction'; // $_REQUEST['action']; <br>
data.url = location.href; <br>
ajax_request (data); <br>

# default callback <br>
ajax_result(data,ajax){ <br>
// any action <br>
} <br>

# options <br>
data.target = result target script (optional) <br>
data.js = result target script (deprecated) <br>

