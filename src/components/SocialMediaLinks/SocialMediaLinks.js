import { object } from 'prop-types'
import React from 'react'
import GitHubLogo from './github.svg'
import MeetupLogo from './meetup.svg'
import SlackLogo from './slack.svg'
import './SocialMediaLinks.css'
import TwitterLogo from './twitter.svg'

const SocialMediaLinks = (
  props,
  { socialMedia: { github, meetup, slack, twitter } }
) => (
  <ul className="SocialMediaLinks">
    <li className="SocialMediaLink">
      <a href="/code-of-conduct/">Code of Conduct</a>
    </li>
    <li className="SocialMediaLink">
      <img alt="" className="SocialMediaLink-Img" src={TwitterLogo}/>
      <a href={`https://twitter.com/${twitter.username}`}>@{twitter.username}</a>
    </li>
    <li className="SocialMediaLink">
      <img alt="" className="SocialMediaLink-Img" src={SlackLogo}/>
      <a href={slack.url}>#DarJS</a>
    </li>
    <li className="SocialMediaLink">
      <img alt="" className="SocialMediaLink-Img" src={GitHubLogo}/>
      <a href={`https://github.com/${github.username}`}>{github.username}</a>
    </li>
    <li className="SocialMediaLink">
      <img alt="" className="SocialMediaLink-Img" src={MeetupLogo}/>
      <a href={`https://meetup.com/${meetup.groupName}`}>{meetup.groupText}</a>
    </li>
  </ul>
)

SocialMediaLinks.contextTypes = {
  socialMedia: object
}

export default SocialMediaLinks
