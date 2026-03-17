const QUESTIONS = [
  {
    id: 1,
    question: "Which HTML tag is used to create a hyperlink?",
    options: [
      "&lt;link&gt;",
      "&lt;href&gt;",
      "&lt;a&gt;",
      "&lt;nav&gt;"
    ],
    answer: "&lt;a&gt;"
  },
  {
    id: 2,
    question: "What steps should you follow to remove unnecessary CSS Reset tags that are causing issues with bold or superscript text in emails?",
    options: [
      "Delete all CSS in the template",
      "Identify reset rules affecting strong, b, or sup elements and remove or override them with inline styles",
      "Replace all CSS with JavaScript styling",
      "Only change font-family settings"
    ],
    answer: "Identify reset rules affecting strong, b, or sup elements and remove or override them with inline styles"
  },
  {
    id: 3,
    question: "How can text wrapping issues in Outlook be resolved when working with HTML templates?",
    options: [
      "Replace all tables with <div> layouts",
      "Use fixed-width tables and apply Outlook-compatible CSS such as word-break or inline styles",
      "Remove all width attributes from tables",
      "Convert the email to plain text"
    ],
    answer: "Use fixed-width tables and apply Outlook-compatible CSS such as word-break or inline styles"
  },
  {
    id: 4,
    question: "What is the best way to handle disappearing bullet points in emails?",
    options: [
      "Replace bullet lists with images",
      "Avoid using lists entirely",
      "Use table-based layouts or inline styles and ensure proper list-style-type support for Outlook",
      "Convert bullet lists into paragraphs"
    ],
    answer: "Use table-based layouts or inline styles and ensure proper list-style-type support for Outlook"
  },
  {
    id: 5,
    question: "How should variables with parentheses be wrapped in brackets for proper functionality in Handlebars JS templates?",
    options: [
      "Use a single set of parentheses around the variable",
      "Use a single set of brackets around the variable",
      "Wrap the variable in double curly braces while escaping parentheses if necessary",
      "Place the variable inside quotation marks"
    ],
    answer: "Wrap the variable in double curly braces while escaping parentheses if necessary"
  },
  {
    id: 6,
    question: "What is the correct syntax for block helpers in Handlebars JS when working with conditional logic in FormTrak templates?",
    options: [
      "<if condition=\"value\">Content</if>",
      "{{#if condition}} Content {{/if}}",
      "{if condition} Content {/if}",
      "if(condition){Content}"
    ],
    answer: "{{#if condition}} Content {{/if}}"
  },
  {
    id: 7,
    question: "How do you add a third set of brackets around variables if there is HTML in the CCFs?",
    options: [
      "Use triple curly braces to allow HTML rendering without escaping",
      "Replace curly braces with square brackets",
      "Remove the HTML from the variable entirely",
      "Convert the variable to plain text"
    ],
    answer: "Use triple curly braces to allow HTML rendering without escaping"
  },
  {
    id: 8,
    question: "What are best practices for configuring quick filters and plan search filters in FTW and FTV?",
    options: [
      "Use only default filters with no customization",
      "Configure filters based on commonly used plan attributes and user workflow requirements",
      "Disable filters to improve performance",
      "Use filters only for administrative users"
    ],
    answer: "Configure filters based on commonly used plan attributes and user workflow requirements"
  },
  {
    id: 9,
    question: "What HTML or CSS modifications help prevent Outlook from stripping out formatting such as bold or superscript text?",
    options: [
      "Use inline CSS styles and supported HTML tags",
      "Replace all formatting with images",
      "Avoid using formatting in emails",
      "Use JavaScript styling functions"
    ],
    answer: "Use inline CSS styles and supported HTML tags"
  },
  {
    id: 10,
    question: "How can you ensure a user email displays correctly from Veeva Vault, and what code should be removed if it is not showing?",
    options: [
      "Remove all template variables",
      "Remove conflicting placeholder tags or unsupported merge syntax",
      "Delete the email field from the template",
      "Replace the variable with static text"
    ],
    answer: "Remove conflicting placeholder tags or unsupported merge syntax"
  },
  {
    id: 11,
    question: "What troubleshooting steps should be taken if bullet points disappear in emails sent via Outlook?",
    options: [
      "Disable HTML emails entirely",
      "Verify list styles, apply inline formatting, and test with table-based structures",
      "Replace bullets with emojis",
      "Convert the email into an attachment"
    ],
    answer: "Verify list styles, apply inline formatting, and test with table-based structures"
  },
  {
    id: 12,
    question: "What is the recommended approach for structuring JSON entries for CosmosDB in FormTrak templates?",
    options: [
      "Use unstructured text fields",
      "Follow a consistent schema with clearly defined keys and nested objects",
      "Store all data in a single string value",
      "Avoid using arrays in JSON"
    ],
    answer: "Follow a consistent schema with clearly defined keys and nested objects"
  },
  {
    id: 13,
    question: "How can JSON entries be validated to ensure compatibility with CosmosDB and FormTrak requirements?",
    options: [
      "Manually review the file without tools",
      "Use JSON validators and confirm schema alignment with FormTrak data structures",
      "Convert JSON to XML before uploading",
      "Remove all nested objects"
    ],
    answer: "Use JSON validators and confirm schema alignment with FormTrak data structures"
  },
  {
    id: 14,
    question: "What are best practices for handling overrides and dynamic data in JSON for CosmosDB?",
    options: [
      "Hardcode all values directly into the template",
      "Use structured override fields and dynamic keys aligned with template logic",
      "Avoid dynamic data entirely",
      "Store overrides in separate HTML files"
    ],
    answer: "Use structured override fields and dynamic keys aligned with template logic"
  },
  {
    id: 15,
    question: "What steps should be followed to delete all columns and re-add them when updating FormTrak templates?",
    options: [
      "Delete the template entirely and recreate it",
      "Remove column definitions, refresh the schema, and re-add required columns with updated mappings",
      "Only rename existing columns",
      "Convert columns to plain text fields"
    ],
    answer: "Remove column definitions, refresh the schema, and re-add required columns with updated mappings"
  },
  {
    id: 16,
    question: "How should plan level lives and majority status settings be handled in FTV filters and templates?",
    options: [
      "Ignore plan-level data completely",
      "Configure filters and template logic to evaluate plan-level lives and majority conditions correctly",
      "Only use majority status without plan-level lives",
      "Hardcode the values directly in the template"
    ],
    answer: "Configure filters and template logic to evaluate plan-level lives and majority conditions correctly"
  },
  {
    id: 17,
    question: "What are the implications of altering code in Veeva Vault templates for future GUI editing?",
    options: [
      "There are no implications",
      "Certain code changes may prevent further editing in the GUI editor",
      "It automatically improves GUI compatibility",
      "It converts the template into JSON"
    ],
    answer: "Certain code changes may prevent further editing in the GUI editor"
  },
  {
    id: 18,
    question: "How should variables with parentheses be escaped in Handlebars JS for FormTrak templates?",
    options: [
      "Replace parentheses with quotation marks",
      "Use Handlebars escaping or proper bracket syntax around the variable",
      "Remove the parentheses entirely",
      "Convert the variable to a comment"
    ],
    answer: "Use Handlebars escaping or proper bracket syntax around the variable"
  },
  {
    id: 19,
    question: "What is the recommended approach for adding a third set of brackets when HTML is present in CCFs within FormTrak templates?",
    options: [
      "Use triple curly braces to render HTML content without escaping",
      "Replace HTML with plain text",
      "Remove the variable entirely",
      "Use square brackets instead of curly braces"
    ],
    answer: "Use triple curly braces to render HTML content without escaping"
  },
  {
    id: 20,
    question: "How can disappearing bullet points in emails generated from FormTrak templates be resolved, especially when using Outlook?",
    options: [
      "Convert lists to images",
      "Apply inline CSS and ensure proper list structure supported by Outlook",
      "Remove all bullet lists",
      "Replace bullet lists with numbered paragraphs"
    ],
    answer: "Apply inline CSS and ensure proper list structure supported by Outlook"
  }
];
