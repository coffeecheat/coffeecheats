# Read more about app structure at http://docs.appgyver.com

module.exports =

  # See styling options for tabs and other native components in app/common/native-styles/ios.css or app/common/native-styles/android.css
    # tabs: [
    #   {
    #     title: "Index"
    #     id: "index"
    #     location: "example#User_Details" # Supersonic module#view type navigation
    #   }
    #   {
    #   title: "Geolocation"
    #   id: "geolocation"
    #   location: "example#User_Coffee_Expense"
    #   }
    #   {
    #     title: "Internet"
    #     id: "internet"
    #     location: "http://google.com" # URLs are supported!
    #   }
    # ]
   drawers:

     left:
       id: "leftDrawer"
       location: "example#drawer"
       showOnAppLoad: false

     options:
       animation: "swingingDoor"

  rootView:
    location: "modules#home"

    initialView:
      id: "initialView"
      location: "modules#index"

  #   preloads: [
   #    {
   #      id: "learn-more"
   #      location: "example#learn-more"
    #   }
    #   {
    #     id: "using-the-scanner"
    #     location: "example#using-the-scanner"
    #   }
   #  ]
