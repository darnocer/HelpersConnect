// /* global gapi */
// const { db, deleteOne } = require("../models/events");
// const Event = require("../models/events")
// const {google} = require('googleapis')


// const GOOGLE_API_KEY = "AIzaSyAtHz02Yzb-TGWflfO9YLXH7pwXX_oKDEQ";

// const getEvents = () => {
//     //this function is called on page load--ie gapi.load('client', START)
//     function start() {
//         console.log("bloop")
//       gapi.client
//         .init({
//           apiKey: GOOGLE_API_KEY,
//           // Array of API discovery doc URLs for APIs used by the quickstart
//           DISCOVERY_DOCS: [
//             "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
//           ],
//         })
//         .then(function () {
//           //taking the API from above and allowing the path below to access the events in prettyawesomepractice007@gmail.com public calendar
//           return gapi.client.request({
//             path: `https://www.googleapis.com/calendar/v3/calendars/prettyawesomepractice007@gmail.com/events?singleEvents=true`,
//           });
//         })
//         .then(
//           (response) => {
//             //define a variable res that only pulls the events from the response

//             let res = response.result.items;
//             res = res.filter((event) => {
//               return event.end.dateTime >= moment().format();
//             });
//             res = res.sort((a, b) => {
//               return a.end.dateTime.localeCompare(b.end.dateTime);
//             });

//             //setEvents redefines events to equal the array res
//             // setEvents(res);
//             // setFilteredEvents(res);
            
//             res.map((event) => 
//             {
//                 const existingEvent = Event.findOne({event_id: event.id});
//                 if(existingEvent) {
//                     return done(null, existingEvent)
//                 }
//                 const eventData = new Event({
//               event_name: event.name,
//               event_id: event.id,
//               date: event.start.dateTime,
//               location:event.location,
//               startTime:event.start.dateTime,
//               endTime: event.end.dateTime,
//               attending:
//             }).save();
//             console.log(eventData)
//             return done(null, eventData);
            
//           }),
//           //this is a fail safe in case start() does not run
//           function (reason) {
//             console.log(reason);
//           }
//     });
// }
//     //once getEvents is called, it will initially load the client and the function start() will be called
//     gapi.load("client", start);
//   };

//   getEvents()