import ConductBlurb from '../../components/ConductBlurb'
import Logo from '../../components/Logo'
import { object, shape, string } from 'prop-types'
import React from 'react'
import RsvpButton from './RsvpButton'
import './Sidebar.css'

const Sidebar = ({ className, meetup }, { organization: { location } }) => (
  <aside className="Sidebar">
    <header className="Sidebar-Header">
      <Logo className="Sidebar-LogoImg"/>
    </header>
    <section className="Sidebar-Details">
      <p>
        A Support Group for JavaScript Developers based in Dar es Salaam, Tanzania.
        On the second Friday of every month
        {/* <a href={location.url}>{location.name}</a>. */}
      </p>
    </section>
    <section className="Sidebar-RSVP">
      <RsvpButton meetupId={meetup && meetup.id}/>
    </section>
    <footer className="Sidebar-Footer">
      <ConductBlurb/>
    </footer>
  </aside>
)

Sidebar.contextTypes = {
  organization: shape({
    location: shape({
      name: string,
      url: string
    })
  })
}

Sidebar.propTypes = {
  className: string,
  meetup: object
}

export default Sidebar
