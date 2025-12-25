# EMA - Knowledge Insights Platform

## Prerequisites

Ensure you have the following installed:

- Node.js (v18.0.0 or higher)
- npm or yarn or pnpm or bun
- Git
- Contentful Account (for CMS integration)

## Local Setup

### 1. Clone the Repository

```bash
git clone https://github.com/KrisD23/ema-beta
cd ema
```

### Step 2: Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Step 3: Environment Configuration

Create a `.env.local` file in the root directory of the project and add your Contentful credentials:

```env
CONTENTFUL_SPACE_ID=your_space_id_here
CONTENTFUL_ENVIRONMENT=master
CONTENTFUL_ACCESS_TOKEN=your_access_token_here
```

Getting Your Contentful Credentials:

1. Log in to your Contentful account at https://app.contentful.com/
2. Navigate to Settings → API keys
3. Create a new API key or use an existing one
4. Copy the following values:
   - Space ID: Your Contentful space identifier
   - Environment: Usually `master` for production or `development` for testing
   - Content Delivery API access token: Your access token

### Step 4: Run the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun run dev
```

Open http://localhost:3000 in your browser to see the application.

### Step 5: Build for Production

```bash
npm run build
npm run start
# or
yarn build
yarn start
# or
pnpm build
pnpm start
# or
bun run build
bun run start
```

## Contentful CMS Integration

### Overview

This project uses Contentful as a headless CMS to manage dynamic content. The integration is handled through the `contentful` SDK.

### Content Types

The application uses the following Contentful content types:

1. Hero Section - Main hero content with title, description
2. Solution Cards - Service/solution offerings displayed on the homepage that contains heading, image and description
3. Feature Showcase - Feature highlights with images, heading and descriptions

### Setup Process

#### 1. Create Contentful Space

1. Sign up at https://www.contentful.com/ if you haven't already
2. Create a new space for your project
3. Note your Space ID from the space settings

#### 2. Configure Content Models

Create the following content types in your Contentful space:

Hero Content Model:

- Title (Short text)
- Description (Short text)
- Heading batch (Short text)

Solution Cards Content Model:

- Title (Short text)
- Description (Short text)
- Image (Media Single)

Feature Showcase Content Model:

- Title (Short text)
- Description (Short text)
- Images (Media - single files)

#### 3. Populate Content

Add content entries for each content type in your Contentful space.

#### 4. Get API Credentials

1. Go to **Settings → API keys** in Contentful
2. Create a new Content Delivery API key
3. Copy the Space ID and access token
4. Add them to your `.env.local` file

### Integration Code

The Contentful client is initialized in `lib/contentful.ts`:

```typescript
import { createClient } from "contentful";

export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  environment: process.env.CONTENTFUL_ENVIRONMENT!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});
```

Content fetching functions are located in `lib/action.ts`.

## Tech Stack

- Framework: Next.js 16
- Language: TypeScript
- Styling: Tailwind CSS 4
- CMS: Contentful
- Animations: GSAP, Lottie React
- Icons: Lucide React and React Icons
