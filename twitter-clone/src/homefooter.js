import React from 'react'
import './homefooter.css'

function HomeFooter() {

    const data = [
  {name: "About"},
  {name: "Help Center"},
  {name: "Terms of Service"},
  {name: "Privacy Policy"},
  {name: "Ads Info"},
  {name: "Status"},
  {name: "Careers"},
  {name: "Brand Resources"},
  {name: "Advertising"},
  {name: "Marketing"},
  {name: "Twitter For Business"},
  {name: "Developers"},
  {name: "Directory"},
  {name: "Settings"},
  {name: "© 2021 Twitter, Inc."}
]


    return (
        <div className="homefooter___div">
        {data.map(name => {
            return <p className="homefooter____names">{name.name}</p>
          })}

        </div>
    )
}

export default HomeFooter
