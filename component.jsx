/**
 * v0 by Vercel.
 * @see https://v0.dev/t/qp8dciWQT0d
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function Component() {
  const [selectedStatistic, setSelectedStatistic] = useState("tenders")
  const [statisticData, setStatisticData] = useState({
    tenders: 124,
    apiUsage: 2300,
    newClients: 15,
    totalRevenue: 125000,
  })
  const handleStatisticClick = (statistic) => {
    setSelectedStatistic(statistic)
  }
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-[#0a1929] text-white py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <MountainIcon className="h-6 w-6" />
            <span className="text-lg font-bold">Tender AI</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="hover:underline" prefetch={false}>
              Features
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Services
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Pricing
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              About
            </Link>
          </nav>
        </div>
        <Button className="flex items-center gap-2 text-white hover:bg-white hover:text-[#0a1929]">
          Get Started
          <ChevronUpIcon className="h-4 w-4" />
        </Button>
      </header>
      <div className="flex flex-1">
        <div className="bg-[#0a1929] text-white w-64 p-6 border-r border-white/10 flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <Avatar className="w-10 h-10 border-2 border-white">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold">John Doe</h3>
              <p className="text-sm text-white/80">john@tenderai.com</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Button
              variant={selectedStatistic === "tenders" ? "primary" : "outline"}
              onClick={() => handleStatisticClick("tenders")}
              className="bg-white/10 rounded-lg p-4 space-y-2 hover:bg-white/20"
            >
              <h4 className="text-lg font-semibold">Tenders</h4>
              <p className="text-4xl font-bold">{statisticData.tenders}</p>
            </Button>
            <Button
              variant={selectedStatistic === "apiUsage" ? "primary" : "outline"}
              onClick={() => handleStatisticClick("apiUsage")}
              className="bg-white/10 rounded-lg p-4 space-y-2 hover:bg-white/20"
            >
              <h4 className="text-lg font-semibold">API Usage</h4>
              <p className="text-4xl font-bold">{statisticData.apiUsage}</p>
            </Button>
            <Button
              variant={selectedStatistic === "newClients" ? "primary" : "outline"}
              onClick={() => handleStatisticClick("newClients")}
              className="bg-white/10 rounded-lg p-4 space-y-2 hover:bg-white/20"
            >
              <h4 className="text-lg font-semibold">New Clients</h4>
              <p className="text-4xl font-bold">{statisticData.newClients}</p>
            </Button>
            <Button
              variant={selectedStatistic === "totalRevenue" ? "primary" : "outline"}
              onClick={() => handleStatisticClick("totalRevenue")}
              className="bg-white/10 rounded-lg p-4 space-y-2 hover:bg-white/20"
            >
              <h4 className="text-lg font-semibold">Total Revenue</h4>
              <p className="text-4xl font-bold">${statisticData.totalRevenue.toLocaleString()}</p>
            </Button>
          </div>
          <nav className="flex flex-col gap-2">
            <Link href="#" className="flex items-center gap-2 hover:underline" prefetch={false}>
              <HomeIcon className="h-4 w-4" />
              Dashboard
            </Link>
            <Link href="#" className="flex items-center gap-2 hover:underline" prefetch={false}>
              <FileTextIcon className="h-4 w-4" />
              Tenders
            </Link>
            <Link href="#" className="flex items-center gap-2 hover:underline" prefetch={false}>
              <BriefcaseIcon className="h-4 w-4" />
              Consulting
            </Link>
            <Link href="#" className="flex items-center gap-2 hover:underline" prefetch={false}>
              <SettingsIcon className="h-4 w-4" />
              Settings
            </Link>
          </nav>
          <div className="mt-auto">
            <Button variant="outline" className="w-full text-white hover:bg-white hover:text-[#0a1929]">
              Logout
            </Button>
          </div>
          <Button variant="ghost" size="icon" className="absolute top-4 right-4 md:hidden">
            <ChevronLeftIcon className="h-6 w-6" />
            <span className="sr-only">Toggle sidebar</span>
          </Button>
        </div>
        <main className="flex-1 bg-gradient-to-br from-[#0a1929]/50 to-[#0a1929]/50 backdrop-blur-lg">
          <div className="container mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold text-white">Automate, Consult and Review Tenders with AI</h1>
              <p className="text-lg text-white/80">
                Our AI-powered platform streamlines the tender management process, saving you time and resources.
              </p>
              <div className="flex gap-4">
                <Button className="bg-[#0a1929] text-white hover:bg-white hover:text-[#0a1929]">Get Started</Button>
                <Button variant="outline" className="text-white hover:bg-white hover:text-[#0a1929]">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white/20 backdrop-blur-lg rounded-lg p-6 space-y-4">
                <h2 className="text-2xl font-bold text-white">Automated Tender Management</h2>
                <p className="text-white/80">
                  Our AI-powered platform automatically analyzes tender documents, identifies key requirements, and
                  provides personalized recommendations to help you win more bids.
                </p>
                <Link href="#" className="text-white hover:underline" prefetch={false}>
                  Learn More
                </Link>
              </div>
              <div className="bg-white/20 backdrop-blur-lg rounded-lg p-6 space-y-4">
                <h2 className="text-2xl font-bold text-white">Tender Consulting</h2>
                <p className="text-white/80">
                  Our team of experts provides personalized consulting services to help you navigate the tender process,
                  from bid preparation to submission.
                </p>
                <Link href="#" className="text-white hover:underline" prefetch={false}>
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
      <footer className="bg-[#0a1929] text-white py-4 px-6 flex items-center justify-between">
        <p>&copy; 2023 Tender AI. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link href="#" className="hover:underline" prefetch={false}>
            Privacy Policy
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Terms of Service
          </Link>
        </div>
      </footer>
    </div>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  )
}


function ChevronLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}


function ChevronUpIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m18 15-6-6-6 6" />
    </svg>
  )
}


function FileTextIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10 9H8" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
    </svg>
  )
}


function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function SettingsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}
