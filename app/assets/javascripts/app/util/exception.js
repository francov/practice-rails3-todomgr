Ext.define('TM.util.Exception', {

    statics: {
        SYSTEM_GENERIC_ERROR: 'Unknown Error occourred!',
        GenericErrorMessage: function(message) {

            if(Ext.isEmpty(message)) {
                message = TM.util.Exception.SYSTEM_GENERIC_ERROR;
            }

            Ext.Msg.show({
                title : 'An Error has occurred',
                msg : message,
                modal : true,
                icon : Ext.Msg.ERROR,
                buttons : Ext.Msg.OK
            });

        },
        DataConnectionFailureHandler: function(response, options) {
            if(Ext.isEmpty(response.status)) {
                response = options.response;
            }

            if(((typeof(message) === "undefined") || message === '') && response.status === 200) {
                if(!Ext.isEmpty(response.responseText)) {
                    jsonResponse = Ext.util.JSON.decode(response.responseText);
                }
                displayMessage = jsonResponse.msg;
            } else if(response.status !== 200 && response.status !== undefined && response.status !== null) {
                displayMessage = response.statusText;
            }

            TM.util.Exception.GenericErrorMessage(displayMessage);
        },

        StoreExceptionHandler: function(proxy, response, operation, eOpts) {
            
            if(response.status !== 200) {
                // call the AJAX Error Handler
                TM.util.Exception.DataConnectionFailureHandler(response, null);
            } else {

                // var displayMessage = response.raw.msg;
                var displayMessage = "";
                var err = (typeof(operation.getError()) !== "undefined") ? operation.getError() :
                        operation.request.scope.reader.jsonData["message"];

                if (typeof(err) === "object") {
                    for (var key in err) {
                        if (err.hasOwnProperty(key)) {
                            displayMessage += "<b>" + key + ":</b> " + err[key] + "<br/>";
                        }
                    }
                } else {
                    // Errore non riferito ad alcun field
                    displayMessage = operation.getError();
                }
                TM.util.Exception.GenericErrorMessage(displayMessage);
            }

        }
    }
});