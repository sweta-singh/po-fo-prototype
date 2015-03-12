/**
 * Created by alicia.sykes on 14/01/2015.
 */


angular.module('rfl', ['ngAnimate', 'ui.router'])

    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider

            // route to show our basic form (/form)
            .state('form', {
                url: '/form',
                templateUrl: 'form.html',
                controller: 'rflController'
            })


            .state('form.license', {
                url: '/rfl-1',
                templateUrl: 'rfl-1.html'
            })

            // url will be /form/interests
            .state('form.details', {
                url: '/rfl-2',
                templateUrl: '/rfl-2.html'
            })


            // url will be /form/payment
            .state('form.confirm', {
                url: '/rfl-3',
                templateUrl: '/rfl-3.html'
            })

            .state('form.renew', {
                url: '/rfl-renew',
                templateUrl: '/rfl-renew.html'
            });
        // Send users to start page
        $urlRouterProvider.otherwise('/form/rfl-1');
    })

    /* Process the form*/
    .controller('rflController', function($scope) {

            $scope.qrChange = '';

            $scope.formData = {
                durationType:       'none',	// (full|short|renew)		Required always
                licenseFishType:    '',     // (salmon|course)          Required always
                disabled: 	'',	// (isDisabled|notDisabled) Only required if durationType = full
                badgeNiNo: 	        '',		// (Alphanumeric string) 	Only required if disabled = isDisabled && durationType = full
                dateOfBirth:        '',		// (DD/MM/YYYY) 			Required always
                shortDuration:      '',		// (1day|8day) 				Only required if durationType = short
                startDate: 	        '',		// (DD/MM/YYYY) 			Only required if durationType = short
                startTime: 	        '',		// (00:00)					Only required if durationType = short
                renewalNum:         '',		// (numeric string)			Only required if durationType = full
                isLicenseHolder:    'true',     // (yes|no)                 Required always

                cstmTitle:          '',     // (ms|mrs|mr...)           req
                cstmFirstName:      '',     // (text)                   req
                cstmLastName:       '',     // (text)                   req
                cstmEmail:          '',     // (text/email)             req
                cstmMobile:          '',     // (num)                    req
                cstmGender:         '',     // (male|female)            req
                cstmEthnicity:      '',     // (list of options..)      req
                cstmHouseNo:         '',     // (male|female)            req
                cstmAddress1:       '',     // (text)                   req
                cstmAddress2:       '',     // (text)                   req
                cstmCity:           '',     // (text)                   req
                cstmCountry:        '',     // (text)                   req
                cstmPostcode:       ''      // (text)                   req

            };

            $scope.renew = function(){
                $scope.formData = {

                    durationType:       'full',	// (full|short|renew)		Required always
                    licenseFishType:    'salmon',     // (salmon|course)          Required always
                    disabled: 	'notDisabled',	// (isDisabled|notDisabled) Only required if durationType = full
                    badgeNiNo: 	        '',		// (Alphanumeric string) 	Only required if disabled = isDisabled && durationType = full
                    dateOfBirth:        '15/11/1969',		// (DD/MM/YYYY) 			Required always
                    shortDuration:      '',		// (1day|8day) 				Only required if durationType = short
                    startDate: 	        '',		// (DD/MM/YYYY) 			Only required if durationType = short
                    startTime: 	        '',		// (00:00)					Only required if durationType = short
                    renewalNum:         'rod-448262',		// (numeric string)			Only required if durationType = full
                    isLicenseHolder:    'yes',     // (yes|no)                 Required always

                    cstmTitle:          'Miss',     // (ms|mrs|mr...)           req
                    cstmFirstName:      'Emma',     // (text)                   req
                    cstmLastName:       'Cooper',     // (text)                   req
                    cstmEmail:          'emma.cooper@accenture.com',     // (text/email)             req
                    cstmMobile:          '07854652107',     // (num)                    req
                    cstmAddress1:       'Kemperleye Way',     // (text)                   req
                    cstmAddress2:       'Bradley Stoke',     // (text)                   req
                    cstmCity:           'Bristol',     // (text)                   req
                    cstmCountry:        'United Kingdom',     // (text)                   req
                    cstmPostcode:       'BS32 8EB',      // (text)                   req
                    cstmHouseNo:        '52'
                }
            }

    });