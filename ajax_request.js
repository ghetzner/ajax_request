function ajax_request() {

  $.ajax({
      url: data.url,
      data: data,
      type: 'post',
      async: true,
      dataType: 'json',
      success: function (json) {
          try {
              window[data.js](data, json);
              window[data.target](data, json);
              window['ajax_result'](data, json);
          }
          catch (e) {
          }
      }
  });
}
