"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Donate() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <Link href="/" className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 tracking-tight hover:text-blue-600 transition-colors">
            EHR Research Institute
          </Link>
          <a
            href="https://surveillancenation.us/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 hover:bg-gray-800 text-white px-3 sm:px-6 py-2 sm:py-2.5 rounded-full transition-all duration-300 font-medium text-xs sm:text-sm md:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Surveillance Nation
          </a>
        </div>
      </nav>

      {/* Header Section */}
      <header className="relative w-full pt-16 sm:pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="w-full h-[40vh] sm:h-[50vh] md:h-[75vh] lg:h-[85vh] relative overflow-hidden"
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
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6 text-gray-900">
            Support Our Mission
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Help EHR Research Institute continue our critical work in discovering and researching surveillance technologies that threaten our constitutional rights.
          </p>
        </motion.div>

        {/* Donation Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-12 mb-8 sm:mb-12 border border-gray-100"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 text-center text-gray-900">Make a Donation</h2>

          {/* Donation Amounts */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
            {['$25', '$50', '$100', '$250'].map((amount, index) => (
              <motion.button
                key={amount}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 border-2 border-blue-200 hover:border-blue-400 rounded-xl py-3 sm:py-4 px-4 sm:px-6 font-bold text-base sm:text-lg transition-all duration-300 text-gray-800 shadow-md hover:shadow-lg"
              >
                {amount}
              </motion.button>
            ))}
          </div>

          {/* Custom Amount */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mb-6 sm:mb-8"
          >
            <label htmlFor="custom-amount" className="block text-base sm:text-lg font-semibold text-gray-700 mb-2 sm:mb-3">
              Custom Amount
            </label>
            <div className="relative">
              <span className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg sm:text-xl font-bold">$</span>
              <input
                type="number"
                id="custom-amount"
                className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base sm:text-lg transition-all duration-300"
                placeholder="Enter amount"
                min="1"
              />
            </div>
          </motion.div>

          {/* Donation Type */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mb-6 sm:mb-8"
          >
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8">
              <label className="flex items-center text-base sm:text-lg">
                <input type="radio" name="donation-type" value="one-time" className="mr-2 sm:mr-3 scale-110 sm:scale-125" defaultChecked />
                <span className="font-medium">One-time donation</span>
              </label>
              <label className="flex items-center text-base sm:text-lg">
                <input type="radio" name="donation-type" value="monthly" className="mr-2 sm:mr-3 scale-110 sm:scale-125" />
                <span className="font-medium">Monthly donation</span>
              </label>
            </div>
          </motion.div>

          {/* Payment Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="space-y-4"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 sm:py-5 rounded-xl transition-all duration-300 text-base sm:text-lg shadow-lg hover:shadow-xl"
            >
              💳 Donate with Credit/Debit Card
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-4 sm:py-5 rounded-xl transition-all duration-300 text-base sm:text-lg shadow-lg hover:shadow-xl"
            >
              🏦 Donate with Bank Transfer (ACH)
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Alternative Payment Method */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="bg-gray-50 rounded-2xl p-6 sm:p-8 mb-8 sm:mb-12 border border-gray-200"
        >
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 text-center">
            💌 Prefer to Mail a Check?
          </h3>
          <p className="text-sm sm:text-base text-gray-600 mb-4 text-center">
            You can also send a check by mail to:
          </p>
          <div className="bg-white rounded-xl p-4 sm:p-6 text-center border border-gray-300">
            <p className="font-semibold text-gray-900 text-base sm:text-lg mb-2">
              EHR Research Institute
            </p>
            <p className="text-gray-700 text-sm sm:text-base">
              Box 3307<br />
              San Diego, CA 92163
            </p>
          </div>
          <p className="text-xs sm:text-sm text-gray-500 mt-4 text-center">
            Please make checks payable to "EHR Research Institute"
          </p>
        </motion.div>

        {/* Tax Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="text-center text-gray-600 bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100"
        >
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Tax Information</h3>
          <p className="mb-3 sm:mb-4 text-base sm:text-lg">
            <strong>EHR Research Institute</strong> is a 501(c)(3) nonprofit organization.
          </p>
          <p className="mb-3 sm:mb-4 text-sm sm:text-base">
            Your donation is tax-deductible as allowed by law.
          </p>
          <p className="text-xs sm:text-sm opacity-75">
            You will receive a receipt for your donation via email for your records.
          </p>
        </motion.div>

        {/* Back to Home */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="text-center mt-8 sm:mt-12"
        >
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold text-base sm:text-lg hover:underline transition-colors"
          >
            ← Back to Home
          </Link>
        </motion.div>
      </main>
    </div>
  );
}