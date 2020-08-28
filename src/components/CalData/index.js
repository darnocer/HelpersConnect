/* global gapi */

import React, {useState, useEffect} from "react";

const GOOGLE_API_KEY = "AIzaSyAtHz02Yzb-TGWflfO9YLXH7pwXX_oKDEQ";

function CalData(){
    //setup useState to equal events and have a function that can change the state of events
    const [events, setEvents] = useState([])

    useEffect(() => {
        console.log('mounted')
        //call getEvents function to pull calendar data
        getEvents()
    }, [])

    const getEvents = () => {
        //this function is called on page load--ie gapi.load('client', START)
        function start() {
            gapi.client.init({
            'apiKey': GOOGLE_API_KEY,
            // Array of API discovery doc URLs for APIs used by the quickstart
            'DISCOVERY_DOCS': ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
            }).then(function() {
            //taking the API from above and allowing the path below to access the events in prettyawesomepractice007@gmail.com public calendar
            return gapi.client.request({
                'path': `https://www.googleapis.com/calendar/v3/calendars/prettyawesomepractice007@gmail.com/events`,
            })
            }).then( (response) => {
            //define a variable res that only pulls the events from the response
            let res = response.result.items
            //setEvents redefines events to equal the array res
            setEvents(res)

            }, 
            //i think this is a catch but not completely sure
            function(reason) {
            console.log(reason);
            });
        }
        //once getEvents is called, it will initially load the client and the function start() will be called
        gapi.load('client', start)
    };
        return(
            <div>
                {/* take the array events and map through it for each event */}
          {events.map(function(item){
            return(
                <div className="col-8">
                <div className="event-details">
                  <h2 className="text-uppercase is-size-6">
                    <strong>
                        {/* I made "item" the parameter--each event is called "item"--this is to pull the summary from this event */}
            <span className="event-name">{item.summary}</span>
                    </strong>
                  </h2>
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <i className="far fa-calendar-alt"></i>{" "}
                      <span className="day-of-week">Monday</span>
                    </li>
                    <li className="list-inline-item">
                      <i className="far fa-clock"></i>{" "}
                      <span className="start-time">{item.start.dateTime}</span> -{" "}
            <span className="end-time">{item.end.dateTime}</span>
                    </li>
                    <li className="list-inline-item">
                      <i className="fas fa-map-marker-alt"></i>{" "}
                      <span className="location">Location</span>
                    </li>
                  </ul>
                  <p className="description">
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })
    }
        </div>
      )}
      

//export function CalData to utilize in other components
  export default CalData;