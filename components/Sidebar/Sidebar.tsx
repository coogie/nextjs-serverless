import Link from "next/link";

import style from "./Sidebar.module.css";

const hardcoded = [
  {
    title: "Personal",
    links: [
      { label: "Profile", href: "/personal" },
      { label: "Tasks", href: "/personal/tasks" },
      { label: "Absences", href: "/personal/absences" },
      { label: "Work hours", href: "/personal/hours" },
    ]
  },
  {
    title: "Company",
    links: [
      { label: "Company info", href: "/company" },
      { label: "People", href: "/company/people" },
      { label: "Time management", href: "/company/time-management" },
      { label: "Recruiting", href: "/company/recruiting" },
      { label: "Payroll", href: "/company/payroll" },
      { label: "Automation", href: "/company/automation" },
    ]
  },
  {
    title: "Settings",
    links: [
      { label: "Company settings", href: "/settings" },
      { label: "Account management", href: "/settings/account" },
      { label: "Access rights", href: "/settings/access" },
    ]
  },
]

const SidebarGroup = ({ index, title, links }) => (
  <nav aria-labelledby={`nav-${index}`}>
    <h2 id={`nav-${index}`} className={style.groupTitle}>{title}</h2>
    <ul className={style.group}>
      {links.map(({ label, href }) => (
        <li key={href} className={style.groupItem}>
          <Link href={href}>
            <a className={style.groupLink}>{label}</a>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
)

const Sidebar = () => {
  return (
    <aside className={style.sidebar}>
      <Link href="/">
        <a>Dashboard</a>
      </Link>
      {hardcoded.map((group, i) => (
        <SidebarGroup
          index={i}
          title={group.title}
          links={group.links}
          key={group.title}
        />
      ))}
    </aside>
  );
}

export default Sidebar;