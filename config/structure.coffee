# Read more about app structure at http://docs.appgyver.com

module.exports =

initialView:
  id: "initialView"
  location: "modules#index"

drawers:
     left:
       id: "drawer-content"
       location: "drawer#content"
       showOnAppLoad: false
     options:
       animation: "swingingDoor"

  rootView:
    id:"rootview"
    location: "modules#index"


tabs: [
  {
    title: "Index"
    id: "index"
    location: "modules#signup" # Supersonic module#view type navigation
  }
  {
  title: "Geolocation"
  id: "geolocation"
  location: "modules#User_Coffee_Expense"
  }
  {
    title: "Internet"
    id: "internet"
    location: "http://google.com" # URLs are supported!
  }
]
