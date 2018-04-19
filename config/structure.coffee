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
    location: "modules#homepage"



