    ajaxRequest(data) {

        if (data !== undefined) {

            if (!data.hasOwnProperty('url')) {
                data.url = location.href;
            }

            data.url = data.url.split('?')[0];

            let array = {};
            for (let i in data) {
                if (data.hasOwnProperty(i)) {
                    if (typeof data[i] === 'string' || typeof data[i] === 'number') {
                        array[i] = data[i];
                    }
                }
            }
            data = array;

            if (!data.hasOwnProperty('api')) {
                data.api = 'json';
            }
            if (data.api !== 'html') {
                data.api = 'json';
            }

            try {
                data.params = config.params;
            } catch (e) {
            }
            let that = this;

            $.ajax({
                url: data.url,
                data: data,
                type: 'post',
                async: true,
                dataType: data.api,
                success: function (result) {
                    try {
                        if (data.hasOwnProperty('script')) {
                            that[data.script](data, result);
                        }
                    } catch (e) {
                    }
                }
            });
        } else {
            console.warn('Fehler in der Konfiguration');
        }
    }
