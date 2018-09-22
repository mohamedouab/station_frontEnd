angular.module('station-ui')
	.factory('HomeService', ['HomeApi', function (homeApi) {

    return {

        getAll: function (callBack) {
            homeApi.getAll() .then(function (response) {
                callBack(response.data);
            }).catch(function (error) {
            });
        },

        getAllRecette: function (callBack) {
            homeApi.getAllRecette() .then(function (response) {
                callBack(response.data);
            }).catch(function (error) {
            });
        },
        
        getOne: function (id, callBack) {

            homeApi.getOne(id).success(function (response) {
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
            // homeApi.addOne(entry).success(function (response) {
            //     callBack(response);
            // })
            //     .error(function (status) {
            //    alert('Error with response status :' + status);
            //     });

            homeApi.addOne(entry)
                .then(function (response) {
                    callBack(response);
                }).catch(function (error) {
                    console.debug('>> catch');
                    console.debug(error);
                });
        },

        save: function (entry,callBack) {
            homeApi.saveOne(entry)
                    .then(function (response) {
                        callBack(response);
                    }).catch(function (error) {
                        console.debug(error);
                    });
        },

        connecter: function (entry,callBack) {
            homeApi.connecter(entry)
                .then(function (response) {
                    callBack(response);
                }).catch(function (error) {
                console.debug(error);
            });
        },

        delete: function (entryId, callBack) {
            homeApi.deleteOne(entryId).success(function (response) {
                var filteredResult = response && response != "" ? angular.fromJson(response) : null;
                //console.log(filteredResult);

                //Delayed precessing when http request is completed
                callBack(filteredResult);
            })
                .error(function (response, status) {
                    console.log('Error with response: ' + response + ', status :' + status);
                });
        },
        getAllHistory: function (callBack) {
            homeApi.getAllHistory() .then(function (response) {
                callBack(response.data);
            }).catch(function (error) {
            });
        }

    }
}]);
