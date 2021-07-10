import React from 'react'
import InformationBox from './InformationBox'

function Information() {
  return (
    <div className="h-auto darker-bg">
      <div className="flex lg:flex-nowrap justify-center flex-wrap p-10">
        <InformationBox icon={"fas fa-shipping-fast"} title={"Fast"} description={"Our service is not only quality-first, but it's also works at rapid speeds."} />
        <InformationBox icon={"fas fa-lock"} title={"Secure"} description={"Secured encrypted connections and hashed with one of the best crypto hashers bcrypt."} />
        <InformationBox icon={"fas fa-fighter-jet"} title={"Quality"} description={"Quality as the main focus to ensure the best user experience on our website."} />
        <InformationBox icon={"fas fa-user-check"} title={"Trusted"} description={"Our service is used by thousands of users across the globe. With 4.9/5 stars on TrustPilot."} />
      </div>
    </div>
  )
}

export default Information
