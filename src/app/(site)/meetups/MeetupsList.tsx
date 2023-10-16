const meetups = [
  {
    id: 1,
    title: 'Lessons learned while building A mini app for Mpesa Super App platform',
    href: 'https://x.com/i/spaces/1LyGBnPvYryGN',
    description:
      'In this meetup, we will be discussing the lessons learned while building a mini app for the Mpesa Super App platform. We will be discussing the challenges faced, the solutions we came up with, and the lessons learned. We will also be discussing the future of the Mpesa Super App platform and the opportunities it presents for developers.',
    imageUrl:
      '/meetups/mpesa-super-app-kim.jpg',
    date: 'Oct 15, 2023',
    datetime: '2023-10-15',
    category: { title: 'Tech Meetup', href: '#' },
    organizer: {
      name: 'Kim Jisena',
      role: 'Software Developer @ Tunzaa',
      href: '#',
      imageUrl:
        'https://avatars.githubusercontent.com/u/73499939?v=4',
    },
  },
  // More meetups...
];

export default function MeetupsList() {
  return (
    <div className="bg-white mb-12 max-w-5xl mx-auto py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Upcoming Meetups</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Join our community and stay updated on upcoming meetups and events.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {meetups.map((meetup) => (
            <article key={meetup.id} className="flex flex-col items-start justify-between">
              <div className="relative w-full">
                <img
                  src={meetup.imageUrl}
                  alt=""
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={meetup.datetime} className="text-gray-500">
                    {meetup.date}
                  </time>
                  <a
                    href={meetup.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {meetup.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={meetup.href}>
                      <span className="absolute inset-0" />
                      {meetup.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{meetup.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img src={meetup.organizer.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-100" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href={meetup.organizer.href}>
                        <span className="absolute inset-0" />
                        {meetup.organizer.name}
                      </a>
                    </p>
                    <p className="text-gray-600">{meetup.organizer.role}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
