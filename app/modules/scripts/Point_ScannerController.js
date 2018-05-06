angular.module("modules")
        .controller("pointscanner_Controller", function($scope, supersonic){
            supersonic.ui.drawers.close();
                // create new qr code and add data to it
            new QRCode(document.getElementById("qrcode"), "User Id : test"); 
             
        });
    