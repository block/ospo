import { defineCollection, z } from "astro:content";

const repoSchema = z.object({
  owner: z.string(),
  name: z.string(),
  mainBranch: z.string().optional(),
  subPath: z.string().optional(),
});

export type Repo = z.infer<typeof repoSchema>;

const languageSchema = z.enum([
  "javascript",
  "typescript",
  "kotlin",
  "swift",
  "rust",
  "go",
  "java",
  "python",
  "ruby",
]);

export type Language = z.infer<typeof languageSchema>;

const artifactTypeSchema = z.enum([
  "npm",
  "maven",
  "reference-docs",
  "pypi",
  "cocoapods",
  "rubygems"
]);

export type ArtifactType = z.infer<typeof artifactTypeSchema>;

const artifactSchema = z.object({
  type: artifactTypeSchema,
  value: z.string(),
});

export type Artifact = z.infer<typeof artifactSchema>;
const packageSchema = z.object({
  packageName: z.string(),
  repoPath: z.string().optional(),
  language: languageSchema,
  artifacts: z.array(artifactSchema),
  ghTagFilter: z.string().optional(),
});

const badgeTypeSchema = z.enum([
  "github-actions",
  "github-repo",
  "github-license",
  "github-tag",
  "fossa-license",
  "fossa-security",
  "ossf",
  "codecov",
  "tbd-vectors",
  "npm",
  "pypi",
  "cocoapods",
  "maven",
  "reference-docs",
  "life-cycle-status",
  "code-of-conduct",
  "contribution-guidelines",
  "issues",
  "discord",
  "mailing-list",
  "github-discussions",
  "slack",
  "link",
  "rubygems"
]);

export type BadgeType = z.infer<typeof badgeTypeSchema>;
const badgeSchema = z.object({
  type: badgeTypeSchema,
  label: z.string().optional(),
  value: z.string().optional(),
  token: z.string().optional(),
});

export type Badge = z.infer<typeof badgeSchema>;

const lifeCycleStatusSchema = z.enum([
  "proposal",
  "incubation",
  "mature",
  "core",
  "archived",
]);

export type LifeCycleStatus = z.infer<typeof lifeCycleStatusSchema>;

const brandingSchema = z.enum(["block", "square", "cashapp", "tbd"]);

export type Branding = z.infer<typeof brandingSchema>;

const projectSchema = z.object({
  repo: repoSchema,
  description: z.string().optional(),
  title: z.string().optional(),
  website: z.string().optional(),
  lifeCycleStatus: lifeCycleStatusSchema.optional(),
  branding: brandingSchema,
  packages: z.array(packageSchema).optional(),
  ciChecks: z.array(badgeSchema).optional(),
  licenses: z.array(badgeSchema).optional(),
  securityScans: z.array(badgeSchema).optional(),
  scoreCards: z.array(badgeSchema).optional(),
  tests: z.array(badgeSchema).optional(),
  contributing: z.array(badgeSchema).optional(),
});

const projectsCollection = defineCollection({
  type: "content",
  schema: projectSchema,
});

export const collections = { project: projectsCollection };
