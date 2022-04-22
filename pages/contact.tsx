import { Button } from '../src/button/Button';
import { Meta } from '../src/layout/Meta';
import { Footer } from '../src/templates/Footer';
import { HeroMin } from '../src/templates/HeroMin';
import { Config } from '../src/utils/Config';

const Contact = () => (
  <div className="antialiased text-gray-600">
    <Meta title={Config.title} description={Config.description} />
    <HeroMin />
    <main className="mb-12">

      <form id="contact-me" className="w-full mx-auto max-w-3xl bg-white shadow p-8 text-gray-700 ">
        <h2 className="w-full text-3xl font-bold leading-tight my-5">Contact form</h2>
        {/* name field */}
        <div className="flex flex-wrap mb-6">
          <div className="relative w-full appearance-none label-floating">
            <input className="tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500" id="name" name="name" type="text" placeholder="Your name" required />
            <label htmlFor="name" className="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text">
              Your name
            </label>
          </div>
        </div>
        {/* email field */}
        <div className="flex flex-wrap mb-6">
          <div className="relative w-full appearance-none label-floating">
            <input className="tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500" id="email" name="email" type="text" placeholder="Your email" required />
            <label htmlFor="email" className="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text">
              Your email
            </label>
          </div>
        </div>
        {/* Message field */}
        <div className="flex flex-wrap mb-6">
          <div className="relative w-full appearance-none label-floating">
            <textarea className="autoexpand tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500" id="message" name="message" placeholder="Message..." defaultValue="" />
            <label htmlFor="message" className="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text">
              Message...
            </label>
          </div>
        </div>
        <div className="">
          <Button block>Send</Button>
        </div>
      </form>

    </main>
    <Footer />
  </div>
);

export default Contact;
