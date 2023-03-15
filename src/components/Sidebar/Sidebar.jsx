import React from "react"

import SidebarHeader from "./SidebarHeader"
import SidebarBody from "./SidebarBody"
import SidebarFooter from "./SidebarFooter"

const Sidebar = () => {
  return (
    <section className="bg-white px-10 py-14 flex flex-col justify-between dark:bg-neutral-900 transition-all">
      <SidebarHeader />
      <div>
        <SidebarBody />
        <hr />
        <SidebarFooter />
      </div>
    </section>
  )
}

export default Sidebar
