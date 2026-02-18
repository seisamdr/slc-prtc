import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import Card from "./Card";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Card",
  component: Card,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  // args: { onClick: fn() },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const CenterCard: Story = {
  args: {
    label: "Pro",
    price: "$12 per user/month",
    bill: "YEAR",
    billString: "Billed Yearly",
    features: [
      "All Free features +",
      "Connect 100+ apps",
      "Advanced workflow templates",
      "Priority support (chat & email)",
      "Team collaboration tools",
    ],
    position: "CENTER",
    buttonLabel: "Get Started",
  },
};

export const LeftCard: Story = {
  args: {
    label: "Free",
    price: "$0",
    bill: "TEXT",
    billString: "Free For Everyone",
    features: [
      "Up to 3 active automations",
      "Connect up to 5 apps",
      "Basic support (email only)",
      "Community access",
    ],
    position: "LEFT",
    buttonLabel: "Get Started",
  },
};

export const RightCard: Story = {
  args: {
    label: "Enterprise",
    price: "Contact Us",
    bill: "TEXT",
    billString: "Annual billing only",
    features: [
      "All Pro features +",
      "Dedicated account manager",
      "Custom integrations (API & SSO)",
      "Enterprise-grade security & compliance",
      "SLA with 99.9% uptime guarantee",
      "Personalized onboarding & training",
    ],
    position: "RIGHT",
    buttonLabel: "Request Trial",
  },
};
