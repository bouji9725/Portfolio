import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Tag from "@/components/ui/Tag";

describe("Tag", () => {
  it("renders the label text", () => {
    render(<Tag label="TypeScript" />);
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
  });

  it("renders as a <span>", () => {
    const { container } = render(<Tag label="React" />);
    expect(container.firstChild?.nodeName).toBe("SPAN");
  });

  it("applies rounded-full styling", () => {
    const { container } = render(<Tag label="Next.js" />);
    expect(container.firstChild).toHaveClass("rounded-full");
  });
});
