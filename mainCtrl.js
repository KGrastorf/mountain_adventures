angular.module("mtnApp")
    .controller("mainCtrl", function($scope, mainServ){
        $scope.name = mainServ.name;
        $scope.gallery = [{
          img: "http://travellogs.us/2011%20Logs/Wyoming/11-142%20Yellowstone%20NP/Yellowstone_8619---------.JPG",
          data: "Yellowstone"
        },{
          img: "https://thumb1.shutterstock.com/display_pic_with_logo/9438/194278274/stock-photo-family-of-five-people-camping-and-having-fun-cooking-over-fire-194278274.jpg",
          data: "Fun at the Campsite."
        },{
          img: "https://content-oars.netdna-ssl.com/wp-content/uploads/2015/12/wyoming-yellowstone-explorer-019.jpg",
          data: "The Grand Canyon of Yellowstone"
        },{
          img: "http://www.travelyosemite.com/media/262972/yosemite-backpacking-488938739_1000x500.jpg",
          data: "Yosemite National Park."
        },{
          img: "http://katelynjamesblog.com/wp-content/uploads/2013/03/yosemite-vacation_2216.jpg",
          data: "Yosemite Valley."
        },{
          img: "http://www.env.gov.yk.ca/camping-parks/images/hikers.jpg",
          data: "Hiking it in the backcountry."
        },{
          img: "http://www.fun-family-vacations.com/images/train-vacation-day-9-Yosemite-tunnel-view.jpg",
          data: "Happy Campers."
        },{
          img: "http://www.duskyswondersite.com/wp-content/uploads/2015/09/vaca-A-hiker%E2%80%94dropped-by-helicopter%E2%80%94explores-a-crevasse-of-Franz-Josef-Glacier-on-New-Zealands-South-Island.-via-n.g..jpg",
          data: "Chillin' at the Franz Josef Glacier."
        },{
          img: "http://cdn.allwhitefish.com/images/content/21142_20501_Whitefish_Montana_Family_Vacation_md.jpg",
          data: "Splish, splash I was takin' a raft..."
        }];

        $scope.gear = [{
            img: "/images/Black.jpg",
            data: "Black Tee"
        },{
            img: "/images/Blue.jpg",
            data: "Blue Tee"
        },{
            img: "/images/Orange.jpg",
            data: "Orange Tee"
        },{
            img: "/images/White.jpg",
            data: "White Tee"
        },{
            img: "/images/Green.jpg",
            data: "Green Tee"
        },{
            img: "/images/Yellow.jpg",
            data: "Yellow Tee"
        },{
            img: "/images/WhiteBC.jpg",
            data: "White Baseball Cap"
        },{
            img: "/images/GreenBC.jpg",
            data: "Green Baseball Cap"
        },{
            img: "/images/BlackBC.jpg",
            data: "Black Baseball Cap"
        }]

    });
