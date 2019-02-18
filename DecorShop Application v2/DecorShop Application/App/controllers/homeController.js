
'use strict'
app.controller('homeController', function (shopService) {

    var vm = this;

    vm.message = 'Golriz';
    vm.SendOrder = function () {

        var oreder = {

            name: vm.Name,
            email: vm.Email,
            phone: vm.Phone,
            order: vm.OContent
        }
        alert(JSON.stringify(oreder))
    }


})