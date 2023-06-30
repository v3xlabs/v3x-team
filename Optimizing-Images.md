When adding an image to the team or contributors, we optimize it in a lossy way (webp 80% with 108x108 or 54x54 depending on if it's a contributor or team member)

Optimize Team: `INPUT="relativepath-to-jpeg-or-png" SLUG="slug" pnpm optimize-team`
Optimize Contributor: `INPUT="relativepath-to-jpeg-or-png" SLUG="slug" pnpm optimize-contributor`
