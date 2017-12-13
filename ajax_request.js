function ajax_request(data) {

    if (!data.hasOwnProperty('url')) {
        data.url = location.href;
    }
    
        data.url = data.url.split('?')[0];

    $.ajax({
        url: data.url,
        data: data,
        type: 'post',
        async: true,
        dataType: 'json',
        success: function (json) {
            try {
                if (data.hasOwnProperty('js')) {
                    window[data.js](data, json);
                }
                else if (data.hasOwnProperty('target')) {
                    window[data.target](data, json);
                }
                else {
                    window['ajax_result'](data, json);
                }
            }
            catch (e) {
            }
        }
    });
}
