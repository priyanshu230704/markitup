import { Metadata } from "next";
import MarketBuddyClient from "./MarketBuddyClient";

// Force static generation with multiple explicit hints for Vercel
export const dynamic = "force-static";
export const revalidate = false; // Never revalidate, pure static

export const metadata: Metadata = {
    title: "MarketBuddy - Your Personal Brand Growth Engine",
    description:
        "MarketBuddy is part of MarkitUp Group, specialized in building long-term growth engines for brands through strategy, content, and community.",
};

export default function MarketBuddyPage() {
    return <MarketBuddyClient />;
}
