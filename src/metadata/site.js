const pkg = require('../../package.json')

const site = {
  baseUrl: '',
  description: 'The Sacramento Javascript Meetup Group',
  gaTrackingId: 'UA-55321041-1',
  themeColor: '#b51737',
  title: 'DarJS',
  url: process.env.URL || pkg.homepage
}

module.exports = site
