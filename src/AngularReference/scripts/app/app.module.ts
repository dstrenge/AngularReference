/// <reference path="../../typings/tsd.d.ts" />
/// <amd-dependency path="angular" />

export var ApplicationClass: ng.IModule = angular.module("vo.application", []).run([(): void => {
    alert("hey girl!!");
}]);