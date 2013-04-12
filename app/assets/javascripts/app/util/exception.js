/**
 * This class is a central point for managing exceptions thrown primarily
 * by the {@link Ext.data.proxy.Server} class.
 */
Ext.define('TM.util.Exception', {

    statics: {
        SYSTEM_GENERIC_ERROR: 'Unknown Error occourred!',
        /**
         * Handle a generic error message
         * @param {String} message The message to be shown.
         */
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

        /**
         * Handler for exceptions thrown due to a connection failure.
         * @param {Object} response The raw XMLHttpRequest object
         * @param {Object} options The options object passed to {@link Ext.util.Observable.addListener}.
         */
        DataConnectionFailureHandler: function(response, options) {
            if(Ext.isEmpty(response.status)) {
                response = options.response;
            }

            var jsonResponse = "",
                displayMessage = "";
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

        /**
         * Handler for exceptions thrown by {@link Ext.data.proxy.Server}
         * @param {Ext.data.proxy.Proxy} proxy The proxy being used
         * @param {Object} response The raw XMLHttpRequest object
         * @param {Ext.data.Operation} operation The operation performed.
         * @param {Object} eOpts The options object passed to {@link Ext.util.Observable.addListener}.
         */
        StoreExceptionHandler: function(proxy, response, operation, eOpts) {
            
            if(response.status !== 200) {
                // call the AJAX Error Handler
                TM.util.Exception.DataConnectionFailureHandler(response, null);
            } else {

                var displayMessage = "";
                var err = (typeof(operation.getError()) !== "undefined") ? operation.getError() :
                        operation.request.scope.reader.jsonData["message"];

                if (typeof(err) === "object") {
                    for (var key in err) {
                        if (err.hasOwnProperty(key)) {
                            displayMessage += key + " " + err[key] + "<br/>";
                        }
                    }
                } else {
                    // Errore non riferito ad alcun field
                    displayMessage = err;
                }
                TM.util.Exception.GenericErrorMessage(displayMessage);
            }

        }
    }
});
