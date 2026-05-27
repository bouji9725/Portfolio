import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import SectionHeading from "@/components/ui/SectionHeading";

describe("SectionHeading", () => {
  it("renders children inside an h2", () => {
    render(<SectionHeading>About</SectionHeading>);
    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("About");
  });

  it("applies bold styling", () => {
    render(<SectionHeading>Projects</SectionHeading>);
    expect(screen.getByRole("heading", { level: 2 })).toHaveClass("font-bold");
  });
});
