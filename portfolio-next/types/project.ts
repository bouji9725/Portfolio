/**
 * PROJECT TYPE
 *
 * This shared type is used by:
 * - project cards on the homepage
 * - dynamic project detail pages
 *
 * Why this file matters:
 * - keeps project data structured
 * - avoids hardcoding case-study content inside page files
 * - makes future project additions much easier
 */

export type ProjectSection = {
  /**
   * Section title shown on the project detail page.
   * Example:
   * - "Overview"
   * - "Technical Decisions"
   * - "Challenges"
   */
  title: string;

  /**
   * Paragraphs rendered inside the section.
   * Keep these concise and recruiter-friendly.
   */
  paragraphs: string[];
};

export type Project = {
  /**
   * URL-friendly unique identifier
   * Used in /projects/[slug]
   */
  slug: string;

  /**
   * Short project title
   */
  title: string;

  /**
   * Short description used on cards / listings
   */
  description: string;

  /**
   * Main technologies used in the project
   */
  techStack: string[];

  /**
   * Repository URL
   */
  githubUrl: string;

  /**
   * Optional live demo URL
   */
  liveUrl?: string;

  /**
   * Card / hero image
   */
  imageUrl: string;

  /**
   * Show on homepage featured section or not
   */
  featured: boolean;

  /**
   * Quick bullets used on the card
   */
  highlights: string[];

  /**
   * Short role summary for the detail page
   */
  role: string;

  /**
   * Optional product summary line shown near the top of the detail page
   */
  summary: string;

  /**
   * Case-study sections rendered on the detail page
   */
  sections: ProjectSection[];
};