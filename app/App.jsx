import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button, buttonVariants } from '@components/ui/Button';
import { Badge, badgeVariants } from '@components/ui/Badge';
import { Icon } from '@components/ui/Icon';
import { cn } from '@utils/cn';
import AOS from 'aos';
import 'aos/dist/aos.css';
import avi from '@assets/avi-1.jpg';
import certData from '@/data/certs.json';
import skillsData from '@/data/skills.json';
import reviewsData from '@/data/reviews.json';

function App() {
  const date = new Date();
  const contactSection = useRef(null);

  function scrollToContact() {
    window.scrollTo({
      top: contactSection.current.offsetTop,
      behavior: 'smooth',
    });
  }

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      {/* Start: Navbar */}
      <nav id='navbar' data-aos='fade-down'>
        <div className='container'>
          <div className='py-6 flex justify-between'>
            <div className='flex gap-4 items-center'>
              <div className='h-14 w-14 rounded-full overflow-hidden bg-gray-500'>
                <img src={avi} alt='' className='h-full w-full scale-[1.5]' />
              </div>
              <div className='flex flex-col space-y-2'>
                <p className='leading-3 font-medium text-lg text-neutral-900'>
                  Stephen Mwingira
                </p>
                <small className='text-md text-neutral-700'>
                  Software Engineer
                </small>
              </div>
            </div>

            <div className='hidden md:flex items-center gap-4'>
              <Link
                to='https://linkedin.com/in/stephen-mwingira/'
                target='_blank'
                rel='noreferrer noopener'
                className={buttonVariants({
                  size: 'icon',
                  className: 'rounded-full',
                })}>
                <Icon name='Linkedin' color='white' size={16} />
              </Link>

              <Link
                to='https://github.com/smwingira/'
                target='_blank'
                rel='noreferrer noopener'
                className={buttonVariants({
                  size: 'icon',
                  className: 'rounded-full',
                })}>
                <Icon name='Github' color='white' size={16} />
              </Link>

              <Link
                to='https://dribbble.com/stephenwm/'
                target='_blank'
                rel='noreferrer noopener'
                className={buttonVariants({
                  size: 'icon',
                  className: 'rounded-full',
                })}>
                <Icon name='Dribbble' color='white' size={16} />
              </Link>

              <Link
                to='https://instagram.com/stephenwmig/'
                target='_blank'
                rel='noreferrer noopener'
                className={buttonVariants({
                  size: 'icon',
                  className: 'rounded-full',
                })}>
                <Icon name='Instagram' color='white' size={16} />
              </Link>
            </div>
          </div>
        </div>
      </nav>
      {/* End: Navbar */}

      {/* Start: Main */}
      <main className='flex flex-col space-y-4 mb-4'>
        {/* Start: Header */}
        <header data-aos='fade-up'>
          <div className='container'>
            <div className='py-6 flex flex-col space-y-6'>
              <h2 className='text-2xl font-medium text-neutral-800 leading-9'>
                Engineer who's passionate about tech, building modern and
                responsive web applications that help change the world.
              </h2>

              <p className='leading-6 font-medium text-sm text-neutral-500'>
                Experienced software engineer, web developer, and certified IT
                specialist from the Garden State. Demonstrated expertise in
                developing modern and innovative solutions to complex problems,
                coupled with exceptional communication skills to effectively
                convey insights to stakeholders at all levels.
              </p>

              <div className='flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2'>
                <Link
                  onClick={scrollToContact}
                  className={buttonVariants({ variant: 'primary' })}>
                  <Icon name='Mail' size={15} /> Contact me
                </Link>

                <Link
                  to='/files/STEPHENMWINGIRARESUME.pdf'
                  target='_blank'
                  className={buttonVariants({ variant: 'light' })}
                  download>
                  <Icon name='ArrowDownToLine' size={15} /> Download CV
                </Link>
              </div>
            </div>
          </div>
        </header>
        {/* End: Header */}

        {/* Start: Work Experience Section */}
        <section id='workExperience' data-aos='fade-down'>
          <div className='container'>
            <div className='flex flex-col bg-white rounded-xl border divide-y'>
              <div className='w-full p-6'>
                <div className='h-14 w-14 rounded-xl flex items-center justify-center bg-neutral-100 border mb-6'>
                  <Icon name='Briefcase' size={26} color='grey' />
                </div>
                <div className='w-full space-y-2'>
                  <h2 className='text-xl font-medium text-neutral-900'>
                    Work Experience
                  </h2>
                  <p className='text-sm font-medium'>
                    Proven track record in programming and web development,
                    delivering impactful solutions.
                  </p>
                </div>
              </div>

              <div className='w-full p-6'>
                {/* Vertical Timeline #1 */}
                <div className='-my-6'>
                  {/* Item #1 */}
                  <div className='relative pl-8 sm:pl-6 py-6 group'>
                    {/* Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) */}
                    <div className='flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-100 sm:before:ml-[0rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-1 after:h-1 after:bg-neutral-300 after:border-2 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[0rem] after:-translate-x-1/2 after:translate-y-[4px]'>
                      <div className='flex flex-col space-y-4 md:flex-row md:space-y-0 w-full justify-between items-start'>
                        <div className='text-md font-medium text-slate-600'>
                          Develop For Good
                          <small className='mt-2 block'>
                            Software Engineer &middot; Remote
                          </small>
                        </div>

                        <Badge variant='white' size='md'>
                          <Icon name='CalendarRange' size={13} />
                          Oct 2023 - Present
                        </Badge>
                      </div>
                    </div>

                    {/* Content */}
                    <div className='mt-4 md:mt-2'>
                      <p className='text-xs font-medium text-slate-500'>
                        Worked with a small team of engineers to revamp the
                        Readeazy Literacy platform. Worked with a large PHP,
                        HTML, JavaScript, Sass, and CSS codebase. Implemented
                        mobile responsive Sass updates to ensure the website was
                        usable on smartphones and tablets. Updated JavaScript
                        functionality for certain features to improve usability
                        on mobile devices.
                      </p>
                    </div>
                  </div>

                  {/* Item #2 */}
                  <div className='relative pl-8 sm:pl-6 py-6 group'>
                    {/* Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) */}
                    <div className='flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-100 sm:before:ml-[0rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-1 after:h-1 after:bg-neutral-300 after:border-2 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[0rem] after:-translate-x-1/2 after:translate-y-[4px]'>
                      <div className='flex flex-col space-y-4 md:flex-row md:space-y-0 w-full justify-between items-start'>
                        <div className='text-md font-medium text-slate-600'>
                          UpWork
                          <small className='mt-2 block'>
                            Web Developer &middot; Freelancer
                          </small>
                        </div>

                        <Badge variant='white' size='md'>
                          <Icon name='CalendarRange' size={13} />
                          Sep 2019 - Oct 2023
                        </Badge>
                      </div>
                    </div>
                    {/* Content */}
                    <div className='mt-4 md:mt-2'>
                      <p className='text-xs font-medium text-slate-500'>
                        Worked with businesses to design their logos, branding
                        guidelines, and stationaries. Developed websites using
                        React.js, Redux, Bootstrap, TailwindCSS, Vite, and Sass.
                        Developed REST APIs using Node.js, Express.js, MongoDB,
                        and Mongoose. Helped businesses restore website
                        functionality, optimize loading speed, and reconfigure
                        DNS services.
                      </p>
                    </div>
                  </div>

                  {/* Item #3 */}
                  <div className='relative pl-8 sm:pl-6 py-6 group'>
                    {/* Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) */}
                    <div className='flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-100 sm:before:ml-[0rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-1 after:h-1 after:bg-neutral-300 after:border-2 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[0rem] after:-translate-x-1/2 after:translate-y-[4px]'>
                      <div className='flex flex-col space-y-4 md:flex-row md:space-y-0 w-full justify-between items-start'>
                        <div className='text-md font-medium text-slate-600'>
                          FYRE-Digital
                          <small className='mt-2 block'>
                            Lead Web Developer &middot; Remote
                          </small>
                        </div>

                        <Badge variant='white' size='md'>
                          <Icon name='CalendarRange' size={13} />
                          Aug 2018 - Aug 2019
                        </Badge>
                      </div>
                    </div>
                    {/* Content */}
                    <div className='mt-4 md:mt-2'>
                      <p className='text-xs font-medium text-slate-500'>
                        Worked with a team of developers to build websites using
                        Bootstrap, HTML, CSS, Sass, JavaScript, PHP, Laravel,
                        WordPress, and Webflow. Collaborated with the design
                        team to prototype user interfaces and user experience
                        flows using Figma. Managed projects through the entire
                        development lifecycle, creating milestones, and
                        delegating tasks to team members.
                      </p>
                    </div>
                  </div>

                  {/* Item #4 */}
                  <div className='relative pl-8 sm:pl-6 py-6 group'>
                    {/* Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) */}
                    <div className='flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[0rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-1 after:h-1 after:bg-neutral-300 after:border-2 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[0rem] after:-translate-x-1/2 after:translate-y-[4px]'>
                      <div className='flex flex-col space-y-4 md:flex-row md:space-y-0 w-full justify-between items-start'>
                        <div className='text-md font-medium text-slate-600'>
                          Baruch High School
                          <small className='mt-2 block'>
                            IT Assistant &middot; Internship
                          </small>
                        </div>

                        <Badge variant='white' size='md'>
                          <Icon name='CalendarRange' size={13} />
                          Sep 2016 - Jun 2017
                        </Badge>
                      </div>
                    </div>
                    {/* Content */}
                    <div className='mt-4 md:mt-2'>
                      <p className='text-xs font-medium text-slate-500'>
                        Maintaining and troubleshooting issues related to school
                        software and hardware. Provided technical assistance for
                        installing and fixing printers, projectors, and
                        computers. Helped students and school staff to install
                        and manage mobile devices on the school network.
                      </p>
                    </div>
                  </div>
                </div>
                {/* End: Timeline */}
              </div>
            </div>
          </div>
        </section>
        {/* End: Work Experience Section */}

        {/* Start: Education Section */}
        <section id='education' data-aos='fade-down'>
          <div className='container'>
            <div className='flex flex-col bg-white border rounded-xl divide-y'>
              <div className='w-full p-6'>
                <div className='h-14 w-14 rounded-xl flex items-center justify-center bg-neutral-100 border mb-6'>
                  <Icon name='GraduationCap' size={26} color='grey' />
                </div>
                <div className='w-full space-y-2'>
                  <h2 className='text-xl font-medium text-neutral-900'>
                    Education
                  </h2>
                  <p className='text-sm font-medium'>
                    Degrees and certifications in the specialized fields of data
                    science and business analytics.
                  </p>
                </div>
              </div>

              <div className='divide-y p-6'>
                <div className='flex flex-col space-y-6 md:flex-row md:space-y-0 justify-between items-start pb-6'>
                  <div className='flex-col'>
                    <div className='text-md font-medium text-slate-600'>
                      Brooklyn College
                      <small className='mt-2 block'>
                        Bachelor's degree &middot; Computer Science
                      </small>
                    </div>
                  </div>

                  <Badge variant='white' size='md'>
                    <Icon name='CalendarRange' size={14} />
                    Aug 2017 - Dec 2022
                  </Badge>
                </div>

                <div className='flex flex-col space-y-6 md:flex-row md:space-y-0 justify-between items-start py-6'>
                  <div className='flex-col'>
                    <div className='text-md font-medium text-slate-600'>
                      Queensborough Community College
                      <small className='mt-2 block'>
                        Certificate &middot; Information Systems
                      </small>
                    </div>
                  </div>

                  <Badge variant='white' size='md'>
                    <Icon name='CalendarRange' size={14} />
                    Dec 2021 - Aug 2022
                  </Badge>
                </div>

                <div className='flex flex-col space-y-6 md:flex-row md:space-y-0 justify-between items-start pt-6'>
                  <div className='flex-col'>
                    <div className='text-md font-medium text-slate-600'>
                      Baruch College
                      <small className='mt-2 block'>
                        Courses &middot; Business Management
                      </small>
                    </div>
                  </div>

                  <Badge variant='white' size='md'>
                    <Icon name='CalendarRange' size={14} />
                    Aug 2016 - Dec 2016
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End: Education Section */}

        {/* Start: Certifications Section */}
        <section id='certifications' data-aos='fade-down'>
          <div className='container'>
            <div className='flex flex-col bg-white rounded-xl border divide-y'>
              <div className='w-full p-6'>
                <div className='h-14 w-14 rounded-xl flex items-center justify-center bg-neutral-100 border mb-6'>
                  <Icon name='Award' size={26} color='grey' />
                </div>
                <div className='w-full space-y-2'>
                  <h2 className='text-xl font-medium text-neutral-900'>
                    Certifications
                  </h2>
                  <p className='text-sm font-medium'>
                    Professional accreditations and certifications demonstrating
                    drive and expertise.
                  </p>
                </div>
              </div>

              <div className='w-full p-6'>
                <div className='divide-y grid grid-cols-1 md:grid-cols-2 md:divide-y-0 md:gap-y-12 md:gap-x-10'>
                  {certData['certs'].map((item, i) => (
                    <div
                      key={i}
                      className='col-span-1 space-y-6 [&:not(:first-of-type,:last-of-type)]:py-6 last:pt-6 md:last:pt-0 md:[&:not(:first-of-type,:last-of-type)]:py-0 first:pb-6 md:first:pb-0 md:last-pt-0 md:py-0'>
                      <div className='flex-col'>
                        <div className='text-md font-medium text-slate-600'>
                          {item.title}
                          <small className='mt-2 block text-neutral-400'>
                            {item.issuer} &middot; {item.issued}
                          </small>
                        </div>
                      </div>

                      <Link
                        className={buttonVariants({
                          variant: 'light',
                          className: 'w-full md:w-max',
                        })}
                        to={item.link}
                        target='_blank'
                        rel='noreferrer noopener'>
                        <Icon name='MoveUpRight' size={18} />
                        Show Credentials
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End: Certifications Section */}

        {/* Start: Professional Skills Section */}
        <section id='professionalSkills' data-aos='fade-down'>
          <div className='container'>
            <div className='flex flex-col bg-white border rounded-xl divide-y'>
              <div className='w-full p-6'>
                <div className='h-14 w-14 rounded-xl flex items-center justify-center bg-neutral-100 border mb-6'>
                  <Icon name='Gamepad' size={26} color='grey' />
                </div>
                <div className='w-full space-y-2'>
                  <h2 className='text-xl font-medium text-neutral-900'>
                    Professional Skills
                  </h2>
                  <p className='text-sm font-medium'>
                    Key competencies essential for navigating and excelling in
                    various professional contexts.
                  </p>
                </div>
              </div>

              <div className='w-full p-6 space-y-12'>
                <div className='flex flex-col space-y-4'>
                  <h6 className='text-md font-medium'>Programming Languages</h6>

                  <div className='flex flex-wrap gap-2'>
                    {skillsData['programming'].map((item, i) => (
                      <Badge key={i} variant='white' size='md'>
                        <Icon name='Check' size={14} />
                        {item.skill}
                        {/* <img
                          src={item.icon}
                          alt='Icon'
                          height='15'
                          width='15'
                        /> */}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className='flex flex-col space-y-4'>
                  <h6 className='text-md font-medium'>Backend and Databases</h6>

                  <div className='flex flex-wrap gap-2'>
                    {skillsData['databases'].map((item, i) => (
                      <Badge key={i} variant='white' size='md'>
                        <Icon name='Check' size={14} />
                        {item.skill}
                        {/* <img
                          src={item.icon}
                          alt='Icon'
                          height='15'
                          width='15'
                        /> */}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className='flex flex-col space-y-4'>
                  <h6 className='text-md font-medium'>Tools</h6>

                  <div className='flex flex-wrap gap-2'>
                    {skillsData['tools'].map((item, i) => (
                      <Badge key={i} variant='white' size='md'>
                        <Icon name='Check' size={14} />
                        {item.skill}
                        {/* <img
                          src={item.icon}
                          alt='Icon'
                          height='15'
                          width='15'
                        /> */}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End: Professional Skills Section */}

        {/* Start: Languages Section */}
        <section id='education' data-aos='fade-down'>
          <div className='container'>
            <div className='flex flex-col divide-y bg-white rounded-xl border'>
              <div className='w-full p-6'>
                <div className='h-14 w-14 rounded-xl flex items-center justify-center bg-neutral-100 border mb-6'>
                  <Icon name='Languages' size={26} color='grey' />
                </div>
                <div className='w-full space-y-2'>
                  <h2 className='text-xl font-medium text-neutral-900'>
                    Languages
                  </h2>
                  <p className='text-sm font-medium'>
                    Proficient in multiple languages, facilitating effective
                    communication and collaboration.
                  </p>
                </div>
              </div>

              <div className='divide-y p-6'>
                <div className='w-full pb-6'>
                  <div className='flex-col'>
                    <div className='text-md font-medium text-slate-600'>
                      <span className='text-xs me-2'>GB</span>English
                      <small className='mt-2 block'>
                        Native or bilingual proficiency
                      </small>
                    </div>
                  </div>
                </div>

                <div className='w-full py-6'>
                  <div className='flex-col'>
                    <div className='text-md font-medium text-slate-600'>
                      <span className='text-xs me-2'>TZ</span>Swahili
                      <small className='mt-2 block'>
                        Native or bilingual proficiency
                      </small>
                    </div>
                  </div>
                </div>

                <div className='flex justify-between items-start pt-6'>
                  <div className='text-md font-medium text-slate-600'>
                    <span className='text-xs me-2'>ES</span>Spanish
                    <small className='mt-2 block'>Elementary proficiency</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End: Languages Section */}

        {/* Start: Endorsements Section */}
        <section id='endorsements' data-aos='fade-down'>
          <div className='container'>
            <div className='flex flex-col bg-white border rounded-xl divide-y'>
              <div className='w-full p-6'>
                <div className='h-14 w-14 rounded-xl flex items-center justify-center bg-neutral-100 border mb-6'>
                  <Icon name='MessageSquareQuote' size={26} color='grey' />
                </div>
                <div className='w-full space-y-2'>
                  <h2 className='text-xl font-medium text-neutral-900'>
                    Endorsements
                  </h2>
                  <p className='text-sm font-medium'>
                    Endorsements and testimonials highlighting from colleagues
                    and previous employers.
                  </p>
                </div>
              </div>

              <div className='w-full p-6 space-y-10'>
                {reviewsData['reviews'].map((item, i) => (
                  <div
                    key={i}
                    className='w-full ps-6 border-l-2'
                    style={{ borderLeftColor: `${item.color}` }}>
                    <div className='flex-col'>
                      <div className='text-md font-medium text-slate-600'>
                        {item.name}
                        <small className='mt-2 block'>
                          {item.role} &middot; {item.company}
                        </small>
                      </div>
                    </div>

                    <p className='text-xs font-medium pt-4 leading-5'>
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* End: Endorsements Section */}

        {/* Start: Contact Section */}
        <section id='contactSection' data-aos='fade-down' ref={contactSection}>
          <div className='container'>
            <div className='flex flex-col bg-white border rounded-xl divide-y'>
              <div className='w-full p-6'>
                <div className='h-14 w-14 rounded-xl flex items-center justify-center bg-neutral-100 border mb-6'>
                  <Icon name='Mail' size={26} color='grey' />
                </div>
                <div className='w-full space-y-2'>
                  <h2 className='text-xl font-medium text-neutral-900'>
                    Contact Me
                  </h2>
                  <p className='text-sm font-medium'>
                    Have a question, or just want to say hello, feel free to
                    reach out by completing the form below.
                  </p>
                </div>
              </div>

              <div className='w-full p-6'>
                <form action='#' className='space-y-6'>
                  <div className='w-full'>
                    <input
                      type='text'
                      placeholder='Full name'
                      className='w-full text-sm font-medium rounded-lg transition-colors duration-300 bg-neutral-100 outline-none border focus:border-neutral-900 px-4 py-3'
                    />
                  </div>

                  <div className='w-full'>
                    <input
                      type='email'
                      placeholder='Email address'
                      className='w-full text-sm font-medium rounded-lg transition-colors duration-300 bg-neutral-100 outline-none border focus:border-neutral-900 px-4 py-3'
                    />
                  </div>

                  <div className='w-full'>
                    <textarea
                      type='email'
                      placeholder='Message'
                      rows='6'
                      className='w-full text-sm font-medium rounded-lg transition-colors duration-300 bg-neutral-100 outline-none border focus:border-neutral-900 px-4 py-3'></textarea>
                  </div>

                  <Button type='submi'>Send message</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* End: Contact Section */}
      </main>
      {/* End: Main */}

      {/* Start: Footer */}
      <footer className='pb-4' data-aos=''>
        <div className='container'>
          <div className='text-center bg-white border rounded-xl p-6'>
            <p className='text-sm font-medium'>
              Copyright &copy; {date.getFullYear()} www.stephenwm.me
            </p>
          </div>
        </div>
      </footer>
      {/* End: Footer */}
    </>
  );
}

export { App };
