<h1 align="center">Afghan A.I</h1>

<p align="center">
  Afghan A.I is a modern, open-source AI chatbot app built with Next.js and the AI SDK, personalized and maintained by Farhad Nejrabi.
</p>

<p align="center">
  <a href="#features"><strong>Features</strong></a> ·
  [**Deploy Your Own**](#deploy-your-own) ·
  <a href="#running-locally"><strong>Running Locally</strong></a> ·
  <a href="#authors"><strong>Authors</strong></a>
</p>
<br/>

## Features

- Streaming text responses powered by the [AI SDK](https://sdk.vercel.ai/docs), allowing multiple AI providers to be used interchangeably.
- Built-in tool integration for extending AI capabilities (e.g., weather tool).
- Reasoning model support.
- [shadcn/ui](https://ui.shadcn.com/) components for a modern, responsive UI powered by [Tailwind CSS](https://tailwindcss.com).
- Built with the latest [Next.js](https://nextjs.org) App Router.

## Deploy Your Own

You can deploy your own version to Vercel by clicking the button below:

[![Deploy with Vercel](https://vercel.com/button)](<https://vercel.com/new/clone?project-name=Afghan-AI&repository-name=afghan-ai&repository-url=https%3A%2F%2Fgithub.com%2Fyour-username%2Fafghan-ai&demo-title=Afghan+A.I+Chatbot&demo-url=https%3A%2F%2Fafghan-ai.vercel.app%2F&demo-description=A+simple+chatbot+application+built+with+Next.js+and+the+AI+SDK+for> Afghan users)

## Running Locally

1. Clone the repository and install dependencies:

   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

2. Install the [Vercel CLI](https://vercel.com/docs/cli):

   ```bash
   pnpm install -g vercel
   # or
   npm i -g vercel
   # or
   yarn global add vercel
   ```

   Once installed, link your local project to your Vercel project:

   ```bash
   vercel link
   ```

   After linking, pull your environment variables:

   ```bash
   vercel env pull
   ```

   This will create a `.env.local` file with all the necessary environment variables.

3. Run the development server:

   ```bash
   pnpm dev
   # or
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view your new Afghan A.I chatbot application.

## Authors

Founder: Farhad Nejrabi

Contributions are welcome! Feel free to open issues or submit pull requests to enhance functionality or fix bugs.
