# ajax_request
jQuery ajax wrapper

# call <br>
data = {<br>
 action: 'myAction',<br>
 url: location.href<br>
};<br>
ajax_request (data); <br>

# default callback <br>
ajax_result(data,ajax){ <br>
// any action <br>
} <br>

# options <br>
data.target = result target script (optional) <br>
data.js = result target script (deprecated) <br>

