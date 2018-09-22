angular.module('station-ui')
	.factory('CuveService', ['CuveApi', function (cuveApi) {

    return {

        getAll: function (callBack) {

            cuveApi.getAll() .then(function (response) {
                callBack(response.data);
            }).catch(function (error) {
            });
        },
        
        getOne: function (id, callBack) {

            cuveApi.getOne(id).success(function (response) {
                //custom, filter or make a specific mapping between response and UI
                var user = response && response != "" ? angular.fromJson(response) : null;
                console.log(user);

                //Delayed precessing when http request is completed
                callBack(user);
            })
                .error(function (response, status) {
                    console.log('Error with response: ' + response + ', status :' + status);
                });
        },

        add: function (entry, callBack) {

            cuveApi.addOne(entry)
                .then(function (response) {
                    callBack(response);
                }).catch(function (error) {
                    console.debug('>> catch');
                    console.debug(error);
                });
        },

        save: function (entry, callBack) {
            cuveApi.saveOne(entry).success(function (response) {
                var filteredResult = response && response != "" ? angular.fromJson(response) : null;
                //console.log(filteredResult);

                //Delayed precessing when http request is completed
                callBack(filteredResult);
            })
                .error(function (response, status) {
                    console.log('Error with response: ' + response + ', status :' + status);
                });
        },

        deposer: function (entry,callBack) {
            cuveApi.deposer(entry)
                .then(function (response) {
                    callBack(response);
                }).catch(function (error) {
            });
        },

        delete: function (entryId, callBack) {
            cuveApi.deleteOne(entryId).success(function (response) {
                var filteredResult = response && response != "" ? angular.fromJson(response) : null;
                //console.log(filteredResult);

                //Delayed precessing when http request is completed
                callBack(filteredResult);
            })
                .error(function (response, status) {
                    console.log('Error with response: ' + response + ', status :' + status);
                });
        }

    }
}]);
