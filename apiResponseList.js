function apiResponseList() {

    function makeClass() {
        return function (args) {
            if (this instanceof arguments.callee) {
                if (typeof this.init === "function") {
                    this.init.apply(this, args.callee ? args : arguments);
                }
            } else {
                return new arguments.callee(arguments);
            }
        };
    }

    var Request = makeClass();
    Request.prototype.init = function (name, url, pathToResponseData, headers) {
        var self = this;
        self.name = name;
        self.url = url;
        self.pathToResponseData = pathToResponseData;
        self.headers = headers;
    };

    function responseList(requestJson, domObject, options) {
        if (typeof requestJson !== 'object' && typeof domObject !== 'object' && domObject.hasOwnProperty('selector')) {
            return false;
        }
        options = options || {};

        domObject.html('boom');
    }
}
