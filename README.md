This is a [Next.js](https://nextjs.org/) starter project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install the project:

```bash
npm i
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Jest Testing

### Writing Jest Tests

[Jest](https://jestjs.io/) is a delightful JavaScript testing framework with a focus on simplicity. It works seamlessly with React applications, allowing you to easily write unit tests for your components.

Here's how you can write Jest tests for your components:

```javascript
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // for using jest-dom matchers
import { Button } from "./ButtonComponent"; // Adjust the import path as per your project structure

describe("Button Component", () => {
  test("renders Button component with default variant and size", () => {
    // Test code here
  });

  // Add more test cases as needed
});
```

### Running Tests

You can run your Jest tests using the following command:

```bash
npm test
```

### How to Use Snapshots in Jest

When writing tests with Jest, you can use snapshots to verify that your components or functions render the expected output. Here's a basic example of how to use snapshots in Jest:

1. Write your test case and render your component or execute your function.
2. Use Jest's snapshot matcher (`toMatchSnapshot()`) to capture the output.

```javascript
import { render } from "@testing-library/react";
import MyComponent from "./MyComponent";

test("renders MyComponent correctly", () => {
  const { container } = render(<MyComponent />);
  expect(container).toMatchSnapshot();
});
```

3. When you run your tests for the first time, Jest will generate a snapshot file (.snap) containing the rendered output.
4. Subsequent test runs will compare the rendered output with the stored snapshot. If they match, the test passes. If they differ, Jest will indicate a test failure and provide a diff between the current output and the stored snapshot.
5. Review the changes and either accept them by updating the snapshot or modify your component or test case accordingly.

## Storybook Documentation

### What is Storybook?

[Storybook](https://storybook.js.org/) is an open-source tool for building UI components and pages in isolation for React, Vue, Angular, and more. It helps you document, visualize, and interact with your components in a development environment.

### Writing Storybook Stories

To document your components using Storybook, you need to write stories that showcase your components in different states.

Here's an example of how you can write a story for your `Button` component:

```javascript
import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button } from './ButtonComponent'; // Adjust the import path as per your project structure

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: { control: 'text' },
    size: { control: 'text' },
    onClick: { action: 'clicked' },
  },
} as Meta;

const Template: Story = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default Button',
};

// Add more stories for different variants and sizes as needed
```

### Running Storybook

You can run your Storybook server locally using the following command:

```
npm run storybook
```

Then, open [http://localhost:6006](http://localhost:6006) in your browser to view your Storybook.

## Shadcn

This project utilizes Shadcn for component generation based on RadixUI. Shadcn doesn't function as a standalone library. This approach offers the flexibility to modify all generated components according to our specific requirements and preferences.
See [Shadcn documentation](https://ui.shadcn.com/docs)

To add a component from shadcn to `@/components/ui` run the following command:

```
npx shadcn-ui@latest add component_name
```

## Internationalization (i18n) with `next-intl`

This project utilizes `next-intl` for internationalization (i18n) support. For implementation details and getting started guide, please refer to the [documentation](https://next-intl-docs.vercel.app/docs/getting-started).

**Note:**

- All copy changes should be included in `./messages`.
- Each new page should be included in `src/i18n.ts`.

