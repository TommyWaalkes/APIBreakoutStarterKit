"use strict";{

    let pet = {
        //This component will display a pet's info
        template:`<div ng-repeat="pet in $ctrl.pets"> 
        <h2>{{pet.title}}</h2>
        <img src={{pet.image}} width="150px"/>
        </div>`,
        controller: function(petService){
            let vm = this;
            vm.petsPromise = petService.callPetsAPI();
            vm.petsPromise.then(function(response){
                vm.pets = response.data;
            });
        }

    };

    pet.$inject = ["petService"];

    angular
        .module("app")
        .component("pet", pet);

}