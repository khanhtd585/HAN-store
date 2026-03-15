/**
 * @file ProcessSection.tsx
 * @description Tattoo process steps with icons and minimal layout.
 */

import type { FC } from 'react'
import { Calendar, PenTool, PhoneCall, Sparkles, ShieldCheck } from 'lucide-react'
import { SectionHeader } from '../components/common/SectionHeader'

/**
 * @description Represents a single process step item.
 */
interface ProcessStep {
  /** Title for the step. */
  title: string
  /** Short description of what happens in the step. */
  description: string
  /** Icon component to render. */
  icon: JSX.Element
}

/**
 * @description Steps for the tattoo process from consultation to aftercare.
 */
const steps: ProcessStep[] = [
  {
    title: 'Consultation',
    description:
      'Share your story, references and placement ideas with the artist.',
    icon: <PhoneCall size={18} />,
  },
  {
    title: 'Design Discussion',
    description:
      'We sketch, refine and adjust until the design matches your vision.',
    icon: <PenTool size={18} />,
  },
  {
    title: 'Booking Appointment',
    description:
      'Secure your slot with a deposit and confirm the session details.',
    icon: <Calendar size={18} />,
  },
  {
    title: 'Tattoo Session',
    description:
      'We set up the station, stencil and carefully execute each line.',
    icon: <Sparkles size={18} />,
  },
  {
    title: 'Aftercare',
    description:
      'Detailed aftercare instructions so your tattoo heals clean and strong.',
    icon: <ShieldCheck size={18} />,
  },
]

/**
 * @description Explains the five-step tattoo process for customers.
 */
export const ProcessSection: FC = () => {
  return (
    <section
      id="process"
      className="bg-[#0B0B0B] py-16 text-[#F5F5F5] sm:py-20 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          title="The Process"
          subtitle="From first idea to healed tattoo, every step is guided so you always know what happens next."
        />

        <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="group flex flex-col gap-3 rounded-2xl border border-zinc-700/80 bg-[#151515]/90 p-4 text-sm text-zinc-200 transition hover:border-[#E11D48] hover:bg-[#181818]"
            >
              <div className="flex items-center justify-between">
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900 text-[#E11D48]">
                  {step.icon}
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-500">
                  0{index + 1}
                </span>
              </div>
              <h3 className="text-sm font-semibold text-[#F5F5F5]">
                {step.title}
              </h3>
              <p className="text-xs text-zinc-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}