import { TfiSettings } from "react-icons/tfi";
import { TfiCheck } from "react-icons/tfi";
import { TfiLoop } from "react-icons/tfi";


export default function FeaturesBlocks() {
  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Prep for Success</h2>
            <p className="text-xl text-gray-600">Navigate Your Journey with Comprehensive Exam Prep Resources - Reading You Up to Exam Excellence!</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                  <TfiSettings className="stroke-current text-white" size={32} x={16.5} y={16.6} />
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Adjustable Settings</h4>
              <p className="text-gray-600 text-center">Customize your assignments to match your unique learning style and pace with sysMentor's adjustable settings.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                  <TfiCheck className="stroke-current text-white" size={32} x={16.5} y={16.6} />
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Instant Feedback</h4>
              <p className="text-gray-600 text-center">Receive immediate validation for your answers - right or wrong - with sysMentor's real-time assessment.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                  <TfiLoop className="stroke-current text-white" size={32} x={16.5} y={16.6} />
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Practice Limitlessly</h4>
              <p className="text-gray-600 text-center">Enjoy an infinite supply of practice opportunities with sysMentor. Hone your skills to perfection.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}