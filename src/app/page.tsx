"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 tracking-tight"
          >
            EHR Research Institute
          </motion.h1>
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            href="https://surveillancenation.us/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 hover:bg-gray-800 text-white px-3 sm:px-6 py-2 sm:py-2.5 rounded-full transition-all duration-300 font-medium text-xs sm:text-sm md:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
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
              <div className="prose prose-sm sm:prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="mb-4 sm:mb-6 text-sm sm:text-base">
                  Advances in technology now enable virtually undetectable, through-wall imaging inside
                  homes using devices that can be carried using Unmanned Aerial Vehicles (UAVs). Along
                  with small, ground-traversing robots that can enter a building through a small crack,
                  it's now possible to delve into people's private lives without their knowledge and
                  without leaving any evidence it has occurred.
                </p>
                <p className="mb-4 sm:mb-6 text-sm sm:text-base">
                  The insight and advantages provided by this inside information has apparently persuaded
                  the Federal Government to implement a clandestine program, in clear violation of the
                  Fourth Amendment, that is being used to perform extrajudicial punishment, non-consensual
                  medical experimentation, and other nefarious operations in secret.
                </p>
                <p className="text-lg sm:text-xl font-semibold text-gray-900">
                  The ERHRI is a non-profit, 501(c)3 organization whose objective is to research these
                  technologies and educate the public about them.
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
              EHR RI is a 501(c)3 corporation. Your contributions are tax-deductible.
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
            <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">EHR Research Institute</h4>
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
