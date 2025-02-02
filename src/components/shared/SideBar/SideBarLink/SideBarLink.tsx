import { NavLink } from "react-router-dom"

interface SideBarLinkProp {
   className : string
   title : string
   path : string
   icon : React.ReactNode
}

function SideBarLink({className , title , path , icon} : SideBarLinkProp) {
  return (
    <NavLink to={path} className={className}>
      {icon}            
      <p>{title}</p>
   </NavLink>
  )
}

export default SideBarLink