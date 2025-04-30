import Link from "next/link";

export const DeployButton = () => (
  <Link
    href={`https://vercel.com/new/clone?project-name=Afghan-AI&repository-name=afghan-ai&repository-url=https%3A%2F%2Fgithub.com%2Fyour-username%2Fafghan-ai&demo-title=Afghan+A.I+Chatbot&demo-url=https%3A%2F%2Fafghan-ai.vercel.app%2F&demo-description=A+simple+chatbot+application+built+with+Next.js+and+the+AI+SDK+for+Afghan+users`}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 ml-2 bg-black text-white text-sm px-3 py-1.5 rounded-md hover:bg-zinc-900 dark:bg-white dark:text-black dark:hover:bg-zinc-100"
  >
    <svg
      data-testid="geist-icon"
      height={14}
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      width={14}
      style={{ color: "currentcolor" }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 1L16 15H0L8 1Z"
        fill="currentColor"
      />
    </svg>
    Deploy
  </Link>
);
