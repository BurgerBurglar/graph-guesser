import type { NextPage } from "next"
import DisplayCard from "~/app/donation/DisplayCard"
import { LogoSmall } from "~/components/logos"
import { CHARITIES } from "~/data"

const Donate: NextPage = () => {
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
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {CHARITIES.map((charity) => (
          <DisplayCard key={charity.link} {...charity} />
        ))}
      </ul>
    </main>
  )
}

export default Donate
