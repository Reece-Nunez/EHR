"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 py-4 sm:py-6 flex items-center justify-between gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <Image
              src="/erh-logo.png"
              alt="ERH Research Institute Logo"
              width={80}
              height={80}
              className="w-14 h-14 sm:w-16 sm:h-16 md:w-36 md:h-24 rounded-full"
            />
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent tracking-tight">
              ERH Research Institute
            </h1>
          </motion.div>
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            href="https://surveillancenation.us/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 sm:px-8 py-2.5 sm:py-3 rounded-full transition-all duration-300 font-bold text-sm sm:text-lg md:text-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2"
          >
            <Image
              src="/erh-logo.png"
              alt="Surveillance Nation Logo"
              width={40}
              height={40}
              className="w-8 h-8 sm:w-16 sm:h-12 rounded-full"
            />
            Surveillance Nation
          </motion.a>
        </div>
      </nav>

      {/* Hero Header Section */}
      <header className="relative w-full pt-16 sm:pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="w-full h-[40vh] sm:h-[45vh] md:h-[85vh] lg:h-[95vh] relative overflow-hidden"
        >
          <Image
            src="/header.jpg"
            alt="EHR Research Institute Header"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </motion.div>

        {/* Hero Text Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 md:p-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 text-center tracking-tight leading-tight"
          >
            <span className="hidden sm:inline">DISCOVERING HIGH-TECH SURVEILLANCE</span>
            <span className="sm:hidden">DISCOVERING HIGH-TECH<br />SURVEILLANCE</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-sm sm:text-lg md:text-xl text-white/90 text-center max-w-3xl mx-auto leading-relaxed"
          >
            Researching and exposing clandestine surveillance technologies that threaten privacy and constitutional rights
          </motion.p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-16">
        {/* Mission Statement */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-12 border border-gray-100">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
                Our Mission
              </h3>
              <div className="prose prose-sm sm:prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p className="text-sm sm:text-base">
                  How would you feel if you knew that the Government was watching you 24 hours a day in your home?
                  Would it affect what you do or how you do it? How would you feel knowing that someone was watching
                  you during sex, or while you were balancing your bank account? How about while planning business
                  strategies, or evaluating prices for real estate? What about coordinating business mergers or
                  calculating proprietary information about profits and losses?
                </p>
                <p className="text-sm sm:text-base">
                  Maybe you think "That could never happen in the United States". After all, the Constitution
                  includes the Fourth Amendment which explicitly prohibits this. But what if there were ways to do
                  this without your knowledge and that were undetectable? Do you think that it would be used? How
                  would you know? What could you do about it? Would people assume you were paranoid or mentally ill?
                  Who would you go to enforce your Fourth Amendment rights?
                </p>
                <p className="text-sm sm:text-base">
                  Advances in technology now enable exactly this scenario: Through-wall, lens-less imaging techniques
                  that are virtually undetectable have been developed that can see in the dark. Unmanned Aerial
                  Vehicles (UAVs) with invisibility cloaks can follow anyone, anywhere, undetected, or transport
                  other robotic devices or dangerous substances to essentially any location. Small, ground-traversing
                  robots can slip through even small cracks to enter any building. Coding and compression techniques
                  have been developed that approach theoretical limits and allow unbelievably low power radio
                  transmission of information. It should not be too outlandish to consider that the technologies used
                  for robotic surgery, repairing reactors where humans cannot survive the radiation, and the
                  exploration of Mars remotely using radio signals that have incredibly low power levels, might be
                  being applied to more down-to-earth, albeit illegal, activities.
                </p>
                <p className="text-sm sm:text-base">
                  The potential power, insight, and financial gains from purloined knowledge combined with the
                  anonymity these high-technologies provide is a powerful motivation to violate the Fourth Amendment.
                  And given the basic foundation of the US legal system where the burden of proof is on the plaintiff,
                  proving such a violation is virtually impossible, especially by the average citizen, when these
                  modern technologies are used. Citizens assume that they are protected by the Fourth Amendment, and
                  authorities pay lip service to it, but there are no easy ways to know if it is being violated nor
                  any mechanisms to enforce it. The use of these technologies effectively nullifies the Fourth
                  Amendment just a surely as having imaging and listening devices in every room of your home.
                  Moreover, there is the distinct possibility that law enforcement organizations that ought to be
                  responsible for investigating such activities may well be participating or colluding in these
                  violations of Constitutional civil rights. After all, it tremendously simplifies their jobs.
                </p>
                <p className="text-sm sm:text-base">
                  Hence, the fundamental integrity of law-enforcement is essential in these matters, but history does
                  not paint a good picture. In the 1970s Senator Frank Church chaired a committee that investigated
                  abuses of surveillance capabilities by intelligence agencies, and found rampant violations. Although
                  those agencies promised to rein in such violations, the real message that they took home was that,
                  in the future, they should be careful not to be caught. The motivation to perform illegal
                  surveillance is so powerful and persistent that Glenn Greenwald states that it is not a matter of
                  if, but when these agencies will violate the law. Currently there are no mechanisms available to
                  citizens to allege and have investigated the use of high-technology, warrantless surveillance.
                </p>
                <p className="text-sm sm:text-base">
                  Although most people are aware of the web-based snooping being performed by various agencies as
                  revealed by Edward Snowden, such interceptions leave a record that they have occurred. These new
                  technologies open a whole other arena of more invasive surveillance, without any obligatory trace,
                  whereby people can be observed in their homes and followed inconspicuously wherever they go. This
                  brings with it a whole set of new and very scary dangers.
                </p>
                <p className="text-sm sm:text-base">
                  For one, if you can be observed at your computer or phone typing in passwords, any encryption of
                  data to obtain privacy and secure communications could be bypassed. Any information on your screen
                  would be available to the observers, allowing them to filch sensitive data and use it to their
                  advantage. These advantages could be of many varieties, but include secrets about activities that
                  could easily be exploited for financial gain. Used this way, it would enable self-funding, and free
                  these programs from funding constraints or other oversight. Many other nefarious applications of
                  this technology can be imagined.
                </p>
                <p className="text-sm sm:text-base">
                  As much as this sounds like a science fiction plot or conspiracy theory, an organization with ties
                  to Federal law-enforcement is currently developing these technologies and a substantial investment
                  in hardware and personnel has already been made and deployed. Although able to hide behind the
                  anonymity these modern technologies provide, additional steps have been taken to avoid discovery and
                  investigation using infiltration, dis-/mis-information, and social engineering as well as relying in
                  large part on the general belief that such an egregiously illegal and unconstitutional program would
                  never be undertaken - a form of "the big lie" propaganda technique.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Support Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 sm:p-8 md:p-12 text-white shadow-2xl">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6"
            >
              Support Our Critical Work
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-base sm:text-lg md:text-xl mb-2 opacity-90"
            >
              ERH RI is a 501(c)3 corporation. Your contributions are tax-deductible.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-sm sm:text-base mb-6 sm:mb-8 opacity-80"
            >
              Help us continue researching and exposing surveillance technologies that threaten our privacy and constitutional rights.
            </motion.p>

            <motion.a
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
              href="/donate"
              className="inline-block bg-white hover:bg-gray-100 text-blue-600 font-bold px-8 sm:px-12 py-3 sm:py-4 rounded-full transition-all duration-300 text-base sm:text-lg shadow-lg hover:shadow-xl transform"
            >
              Donate Now
            </motion.a>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12 mt-12 sm:mt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">ERH Research Institute</h4>
            <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
              Dedicated to researching surveillance technologies and protecting constitutional rights
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8">
              <a
                href="https://surveillancenation.us/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
              >
                Surveillance Nation
              </a>
              <a
                href="/donate"
                className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
              >
                Support Us
              </a>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
