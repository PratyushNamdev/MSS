"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { ShieldCheck, Send } from "lucide-react";
import { toast } from "sonner";
import {
  Button,
  Label,
  Textarea,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@UI";
import { Compare } from "@/components/atoms";
import ServerCalls from "@/server";
const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { sendMail } = ServerCalls;
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);

      const res = await sendMail({ success: false, message: "" }, formData);

      if (res?.success) {
        form.reset();
        toast.success(res.message, {
          className: "text-black",
        });
      } else {
        toast.error(res.message, {
          className: "text-black",
        });
      }
    } catch (err) {
      toast.error("Unexpected Error Occured!", {
        className: "text-black",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="w-full -mt-6 md:-mt-10 pt-32 pb-24 px-4 md:px-8 lg:px-16"
    >
      <div className="relative mx-auto max-w-6xl border-t border-slate-800/70 pt-10">
        {/* subtle gradient tie-in with the team section above */}
        <div
          className="pointer-events-none absolute top-0 left-0 h-px w-full 
          bg-linear-to-r from-transparent via-teal-300 to-transparent 
          shadow-[0_0_12px_rgba(45,212,191,0.6)] opacity-80"
        />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="mb-10 max-w-3xl"
        >
          <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-teal-300">
            CONTACT
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-50">
            Talk to our managed security team
          </h2>
          <p className="mt-3 text-sm md:text-base text-gray-300">
            Share a few details and the same team behind your{" "}
            <span className="text-teal-300">managed security</span> will get
            back to you with the right mix of monitoring, response, and{" "}
            <span className="text-cyan-400">governance</span> for your
            environment.
          </p>
        </motion.div>

        {/* Card row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="grid items-stretch gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]"
        >
          {/* Form column */}
          <div className="relative h-full">
            <div className="pointer-events-none absolute -inset-px rounded-3xl bg-linear-to-br from-teal-400/40 via-cyan-400/10 to-transparent opacity-60 blur-xl" />
            <div className="relative h-full min-h-80 rounded-3xl border border-slate-800/80 bg-slate-950/70 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.7)] backdrop-blur-xl md:p-8">
              {/* tie-in with leadership section */}
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-400/25 bg-slate-900/60 px-3 py-1 text-xs font-medium text-teal-300">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-300" />
                Work with our leadership team
              </div>

              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-1.5">
                    <Label htmlFor="fullName" className="text-gray-200">
                      Full name
                    </Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      placeholder="Full Name"
                      className="bg-slate-900/70 border-slate-700/70 text-gray-100 placeholder:text-gray-500 focus-visible:ring-1 focus-visible:ring-teal-300"
                      required
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="email" className="text-gray-200">
                      Work email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="you@company.com"
                      className="bg-slate-900/70 border-slate-700/70 text-gray-100 placeholder:text-gray-500 focus-visible:ring-1 focus-visible:ring-teal-300"
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-1.5">
                    <Label htmlFor="phone" className="text-gray-200">
                      Phone number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="+91 98765 *****"
                      className="bg-slate-900/70 border-slate-700/70 text-gray-100 placeholder:text-gray-500 focus-visible:ring-1 focus-visible:ring-teal-300"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label className="text-gray-200">Service type</Label>
                    <Select name="serviceType">
                      <SelectTrigger className="bg-slate-900/70 border-slate-700/70 text-gray-100 focus-visible:ring-1 focus-visible:ring-teal-300">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent className="border-slate-800 bg-slate-950 text-white">
                        <SelectItem value="mss">
                          Managed Security Services (MSS)
                        </SelectItem>
                        <SelectItem value="assessment">
                          Security Assessment &amp; Hardening
                        </SelectItem>
                        <SelectItem value="incident-response">
                          Incident Response &amp; Forensics
                        </SelectItem>
                        <SelectItem value="governance">
                          Compliance &amp; Governance
                        </SelectItem>
                        <SelectItem value="other">
                          Other / Not sure yet
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="message" className="text-gray-200">
                    How can we help?
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your environment, challenges, or what you’re looking to secure."
                    className="resize-none bg-slate-900/70 border-slate-700/70 text-gray-100 placeholder:text-gray-500 focus-visible:ring-1 focus-visible:ring-teal-300"
                    required
                  />
                </div>

                <div className="flex flex-col gap-3 pt-1 md:flex-row md:items-center md:justify-between">
                  <p className="max-w-xs text-xs text-gray-500">
                    We’ll get back to you within{" "}
                    <span className="text-teal-300">1–2 business days</span>{" "}
                    with next steps and a secure channel to continue the
                    discussion.
                  </p>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 rounded-full bg-teal-400/90 px-6 py-2.5 text-sm font-medium text-slate-900 shadow-lg shadow-teal-500/30 transition hover:bg-teal-300 hover:shadow-teal-400/40 disabled:opacity-70"
                  >
                    <ShieldCheck className="h-4 w-4" />
                    {isSubmitting ? "Sending..." : "Send message securely"}
                    <Send className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </form>
            </div>
          </div>

          {/* Compare column */}
          <div className="relative h-full">
            <div className="pointer-events-none absolute -inset-px rounded-3xl bg-linear-to-br from-teal-400/40 via-cyan-400/10 to-transparent opacity-60 blur-xl" />
            <div className="relative h-full min-h-80 rounded-3xl border border-slate-800/80 bg-slate-950/70 p-3 shadow-[0_18px_60px_rgba(0,0,0,0.7)] backdrop-blur-xl">
              <Compare
                firstImage="https://res.cloudinary.com/dggdpeaw4/image/upload/v1765285010/Gemini_Generated_Image_a87hboa87hboa87h_hxyim5.png"
                secondImage="https://res.cloudinary.com/dggdpeaw4/image/upload/v1765285270/Gemini_Generated_Image_m75yq5m75yq5m75y_rqvidr.png"
                firstImageClassName="object-cover"
                secondImageClassname="object-cover"
                className="h-full w-full rounded-2xl"
                slideMode="hover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
