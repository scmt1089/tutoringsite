"use client";

import { useActionState } from "react";
import { sendBookingEmail, type BookingFormState } from "@/app/actions/sendBookingEmail";

const timeSlots = (() => {
  const slots: string[] = [];
  for (let hour = 8; hour <= 20; hour++) {
    for (let minute = 0; minute < 60; minute += 15) {
      if (hour === 20 && minute > 0) break;
      const h = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
      const ampm = hour < 12 ? "am" : "pm";
      const m = minute.toString().padStart(2, "0");
      slots.push(`${h}:${m}${ampm}`);
    }
  }
  return slots;
})();

const timezones = [
  "UK (GMT/BST)",
  "UAE (GST, UTC+4)",
  "India (IST, UTC+5:30)",
  "Singapore / Hong Kong (UTC+8)",
  "Australia East (AEST, UTC+10)",
  "US Eastern (EST/EDT)",
  "US Pacific (PST/PDT)",
  "Other",
];

const inputClass =
  "w-full border border-cream-300 rounded-md px-4 py-2.5 text-sm bg-white text-navy-900 focus:outline-none focus:border-navy-400 transition-colors";

const initialState: BookingFormState = { success: false };

export default function BookingForm() {
  const [state, action, pending] = useActionState(sendBookingEmail, initialState);

  if (state.success) {
    return (
      <div className="bg-cream-100 border border-cream-300 rounded-lg p-10 text-center">
        <p className="font-serif text-navy-900 text-xl mb-2">Request received.</p>
        <p className="text-navy-600 text-sm leading-relaxed">
          We will be in touch shortly to confirm your call. If you need to reach us
          in the meantime, email{" "}
          <a href="mailto:info@mindseye.education" className="text-navy-900 underline">
            info@mindseye.education
          </a>.
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-4 max-w-lg">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs text-navy-500 mb-1">Your name <span className="text-gold-500">*</span></label>
          <input name="name" type="text" required className={inputClass} />
        </div>
        <div>
          <label className="block text-xs text-navy-500 mb-1">Email address <span className="text-gold-500">*</span></label>
          <input name="email" type="email" required className={inputClass} />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs text-navy-500 mb-1">Child's year group</label>
          <input name="yearGroup" type="text" placeholder="e.g. Year 11" className={inputClass} />
        </div>
        <div>
          <label className="block text-xs text-navy-500 mb-1">Subject or area of interest</label>
          <input name="subject" type="text" placeholder="e.g. A-level Chemistry" className={inputClass} />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs text-navy-500 mb-1">Preferred date <span className="text-gold-500">*</span></label>
          <input
            name="date"
            type="date"
            required
            min={new Date().toISOString().split("T")[0]}
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-xs text-navy-500 mb-1">Preferred time <span className="text-gold-500">*</span></label>
          <select name="time" required className={inputClass}>
            <option value="">Select a time</option>
            {timeSlots.map((slot) => (
              <option key={slot} value={slot}>{slot}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs text-navy-500 mb-1">Your timezone <span className="text-gold-500">*</span></label>
        <select name="timezone" required className={inputClass}>
          <option value="">Select your timezone</option>
          {timezones.map((tz) => (
            <option key={tz} value={tz}>{tz}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-xs text-navy-500 mb-1">Anything else we should know</label>
        <textarea name="message" rows={3} className={`${inputClass} resize-none`} />
      </div>

      {state.error && (
        <p className="text-sm text-red-600">{state.error}</p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="btn-primary w-full text-center disabled:opacity-60"
      >
        {pending ? "Sending..." : "Request a call"}
      </button>

      <p className="text-xs text-navy-400 text-center">
        We will confirm your slot by email within a few hours.
      </p>
    </form>
  );
}
