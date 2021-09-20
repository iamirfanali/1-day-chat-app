# Intro

This app is a 1 day chat app a project by Anymind Group.

- This is a single page application and users can talk with others.
- User can choose username from three of the predefined users.
- User can choose a channel from three of the predefined channels.
- After user choose a channel, latest messages will be shown (Right side of page).
- Read more button will show more messages.

# Getting Started

Copy `.env.example` and rename it to `.env`.

Install dependencies:

```bash
yarn
```

Then run the development server:

```bash
yarn start
```

# Code Quality

We use various tools to ensure code quality along the whole development process:

- static code analysis via eslint
- code conventions via prettier
- [husky](https://github.com/typicode/husky) to ensure linting before committing
