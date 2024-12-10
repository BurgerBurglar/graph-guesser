"use client"

import { Label } from "~/components/ui/label"
import type { NextPage } from "next"
import DisplayCard from "~/app/donation/DisplayCard"
import { LogoSmall } from "~/components/logos"
import { Input } from "~/components/ui/input"
import { CHARITIES } from "~/data"
import { type ChangeEventHandler, useState } from "react"
import { Button } from "~/components/ui/button"
import Link from "next/link"

const Donate: NextPage = () => {
  const [search, setSearch] = useState("")
  const handleSearchChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearch(e.target.value)
  }
  return (
    <main className="container relative flex min-h-screen flex-col gap-6 p-4 pb-6">
      <LogoSmall />
      <section>
        <h2 className="font-bold text-xl pb-2">Donation</h2>
        <p>
          If you feel luckier than others around the world after playing the
          game, you might consider donating to those in need.
        </p>
      </section>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="seach" className="text-base">
          Search for charity organizations
        </Label>
        <Input
          id="seach"
          placeholder="hunger, medicine, education..."
          value={search}
          onChange={handleSearchChange}
        />
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {CHARITIES.filter((charity) =>
          charity.description.includes(search),
        ).map((charity) => (
          <DisplayCard key={charity.link} {...charity} />
        ))}
      </ul>
      <Button asChild className="max-w-xs w-full mx-auto">
        <Link href="/">GO HOME</Link>
      </Button>
    </main>
  )
}

export default Donate
