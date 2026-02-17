import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { fn } from "storybook/test";
import TestimonialCard from "./TestimonialCard";
import { AvatarTesti1, AvatarTesti2, AvatarTesti3 } from "@/src/assets";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/TestimonialCard",
  component: TestimonialCard,
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
} satisfies Meta<typeof TestimonialCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const TestimonialCard1: Story = {
  args: {
    avatarUrl: AvatarTesti1.src,
    name: "Sarah",
    position: "Operations Manager",
    testimonial:
      "FlowSync saved us countless hours every week. Setting up automation was so smooth, even for a non-tech person like me.",
  },
};

export const TestimonialCard2: Story = {
  args: {
    avatarUrl: AvatarTesti2.src,
    name: "David K.",
    position: "Product Lead",
    testimonial:
      "We used to juggle multiple tools, now everything runs seamlessly. Our team productivity went up 40%.",
  },
};

export const TestimonialCard3: Story = {
  args: {
    avatarUrl: AvatarTesti3.src,
    name: "Maya P.",
    position: "Startup Founder",
    testimonial:
      "I love how easy it is to connect apps and let them work in the background. It feels like having an extra teammate.",
  },
};
