const QUESTIONS = [
  {
    id: 1,
    question: "Which HTML snippet correctly creates a table row in an email?",
    // "&lt;tr&gt;&lt;/tr&gt;",
    // "&lt;row&gt;&lt;/row&gt;",
    // "&lt;td&gt;&lt;/td&gt;",
    // "&lt;table-row&gt;&lt;/table-row&gt;"
    options: [
      "tr",
      "tr",
      "tr",
      "tr"
    ],
    answer: "tr"
  }
  //,
  // {
  //   id: 2,
  //   question: "Which code correctly creates a table cell in HTML emails?",
  //   options: [
  //     "&lt;cell&gt;Content&lt;/cell&gt;",
  //     "&lt;td&gt;Content&lt;/td&gt;",
  //     "&lt;tr&gt;Content&lt;/tr&gt;",
  //     "&lt;col&gt;Content&lt;/col&gt;"
  //   ],
  //   answer: "&lt;td&gt;Content&lt;/td&gt;"
  // },
  // {
  //   id: 3,
  //   question: "Which inline CSS is best practice for styling text color in email?",
  //   options: [
  //     "&lt;p style='color: #000000;'&gt;Text&lt;/p&gt;",
  //     "&lt;p class='text-black'&gt;Text&lt;/p&gt;",
  //     "&lt;style&gt;p { color: black; }&lt;/style&gt;",
  //     "&lt;p font-color='black'&gt;Text&lt;/p&gt;"
  //   ],
  //   answer: "&lt;p style='color: #000000;'&gt;Text&lt;/p&gt;"
  // },
  // {
  //   id: 4,
  //   question: "Which HTML structure is most reliable for email layout?",
  //   options: [
  //     "&lt;div&gt;&lt;section&gt;Content&lt;/section&gt;&lt;/div&gt;",
  //     "&lt;table&gt;&lt;tr&gt;&lt;td&gt;Content&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;",
  //     "&lt;layout&gt;&lt;row&gt;Content&lt;/row&gt;&lt;/layout&gt;",
  //     "&lt;grid&gt;Content&lt;/grid&gt;"
  //   ],
  //   answer: "&lt;table&gt;&lt;tr&gt;&lt;td&gt;Content&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;"
  // },
  // {
  //   id: 5,
  //   question: "Which code correctly sets a background color for a table cell in an email?",
  //   options: [
  //     "&lt;td style='background-color: #f4f4f4;'&gt;&lt;/td&gt;",
  //     "&lt;td background='#f4f4f4'&gt;&lt;/td&gt;",
  //     "&lt;td bg='gray'&gt;&lt;/td&gt;",
  //     "&lt;td style='bgcolor: #f4f4f4;'&gt;&lt;/td&gt;"
  //   ],
  //   answer: "&lt;td style='background-color: #f4f4f4;'&gt;&lt;/td&gt;"
  // },
  // {
  //   id: 6,
  //   question: "Which snippet correctly centers a table in an email?",
  //   options: [
  //     "&lt;table align='center'&gt;&lt;/table&gt;",
  //     "&lt;table style='margin: auto;'&gt;&lt;/table&gt;",
  //     "&lt;table center='true'&gt;&lt;/table&gt;",
  //     "&lt;center&gt;&lt;div&gt;...&lt;/div&gt;&lt;/center&gt;"
  //   ],
  //   answer: "&lt;table align='center'&gt;&lt;/table&gt;"
  // },
  // {
  //   id: 7,
  //   question: "Which HTML is best for adding spacing inside a table cell in email?",
  //   options: [
  //     "&lt;td padding='20'&gt;&lt;/td&gt;",
  //     "&lt;td style='padding: 20px;'&gt;&lt;/td&gt;",
  //     "&lt;td space='20px'&gt;&lt;/td&gt;",
  //     "&lt;td margin='20px'&gt;&lt;/td&gt;"
  //   ],
  //   answer: "&lt;td style='padding: 20px;'&gt;&lt;/td&gt;"
  // },
  // {
  //   id: 8,
  //   question: "Which code correctly creates a bulletproof button for email?",
  //   options: [
  //     "&lt;button&gt;Click Me&lt;/button&gt;",
  //     "&lt;a href='#' style='display:inline-block; padding:10px 20px; background:#007BFF; color:#fff; text-decoration:none;'&gt;Click Me&lt;/a&gt;",
  //     "&lt;div onclick='go()'&gt;Click Me&lt;/div&gt;",
  //     "&lt;input type='button' value='Click Me'&gt;"
  //   ],
  //   answer: "&lt;a href='#' style='display:inline-block; padding:10px 20px; background:#007BFF; color:#fff; text-decoration:none;'&gt;Click Me&lt;/a&gt;"
  // },
  // {
  //   id: 9,
  //   question: "Which snippet correctly makes an image responsive in email?",
  //   options: [
  //     "&lt;img src='image.jpg' style='width: 100%; height: auto;'&gt;",
  //     "&lt;img src='image.jpg' responsive&gt;",
  //     "&lt;img src='image.jpg' style='flex:1'&gt;",
  //     "&lt;img src='image.jpg' auto-resize&gt;"
  //   ],
  //   answer: "&lt;img src='image.jpg' style='width: 100%; height: auto;'&gt;"
  // },
  // {
  //   id: 10,
  //   question: "Which code ensures an image displays properly in email clients?",
  //   options: [
  //     "&lt;img src='image.jpg'&gt;",
  //     "&lt;img src='image.jpg' alt='Description' border='0' style='display:block;'&gt;",
  //     "&lt;image src='image.jpg'&gt;",
  //     "&lt;img href='image.jpg'&gt;"
  //   ],
  //   answer: "&lt;img src='image.jpg' alt='Description' border='0' style='display:block;'&gt;"
  // },
  // {
  //   id: 11,
  //   question: "Which HTML snippet correctly sets font size inline for email?",
  //   options: [
  //     "&lt;p style='font-size:16px;'&gt;Text&lt;/p&gt;",
  //     "&lt;p size='16px'&gt;Text&lt;/p&gt;",
  //     "&lt;font size='16px'&gt;Text&lt;/font&gt;",
  //     "&lt;p font='16px'&gt;Text&lt;/p&gt;"
  //   ],
  //   answer: "&lt;p style='font-size:16px;'&gt;Text&lt;/p&gt;"
  // },
  // {
  //   id: 12,
  //   question: "Which code is safest for setting line height in email?",
  //   options: [
  //     "&lt;p style='line-height: 24px;'&gt;Text&lt;/p&gt;",
  //     "&lt;p line='24px'&gt;Text&lt;/p&gt;",
  //     "&lt;p spacing='24px'&gt;Text&lt;/p&gt;",
  //     "&lt;p style='text-spacing:24px'&gt;Text&lt;/p&gt;"
  //   ],
  //   answer: "&lt;p style='line-height: 24px;'&gt;Text&lt;/p&gt;"
  // },
  // {
  //   id: 13,
  //   question: "Which snippet correctly creates a two-column layout in email?",
  //   options: [
  //     "&lt;div style='display:flex'&gt;&lt;div&gt;1&lt;/div&gt;&lt;div&gt;2&lt;/div&gt;&lt;/div&gt;",
  //     "&lt;table&gt;&lt;tr&gt;&lt;td&gt;Col 1&lt;/td&gt;&lt;td&gt;Col 2&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;",
  //     "&lt;columns&gt;&lt;col&gt;1&lt;/col&gt;&lt;col&gt;2&lt;/col&gt;&lt;/columns&gt;",
  //     "&lt;grid&gt;&lt;item&gt;1&lt;/item&gt;&lt;item&gt;2&lt;/item&gt;&lt;/grid&gt;"
  //   ],
  //   answer: "&lt;table&gt;&lt;tr&gt;&lt;td&gt;Col 1&lt;/td&gt;&lt;td&gt;Col 2&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;"
  // },
  // {
  //   id: 14,
  //   question: "Which CSS is most reliable for hiding content in email?",
  //   options: [
  //     "display: none;",
  //     "visibility: hidden;",
  //     "opacity: 0;",
  //     "hide: true;"
  //   ],
  //   answer: "display: none;"
  // },
  // {
  //   id: 15,
  //   question: "Which snippet correctly applies a font family inline in email?",
  //   options: [
  //     "&lt;p style='font-family: Arial, sans-serif;'&gt;Text&lt;/p&gt;",
  //     "&lt;p font='Arial'&gt;Text&lt;/p&gt;",
  //     "&lt;font face='Arial'&gt;Text&lt;/font&gt;",
  //     "&lt;p style='font: Arial'&gt;Text&lt;/p&gt;"
  //   ],
  //   answer: "&lt;p style='font-family: Arial, sans-serif;'&gt;Text&lt;/p&gt;"
  // },
  // {
  //   id: 16,
  //   question: "How should plan level lives and majority status settings be handled in FTV filters and templates?",
  //   options: [
  //     "Ignore plan-level data completely",
  //     "Configure filters and template logic to evaluate plan-level lives and majority conditions correctly",
  //     "Only use majority status without plan-level lives",
  //     "Hardcode the values directly in the template"
  //   ],
  //   answer: "Configure filters and template logic to evaluate plan-level lives and majority conditions correctly"
  // },
  // {
  //   id: 17,
  //   question: "What are the implications of altering code in Veeva Vault templates for future GUI editing?",
  //   options: [
  //     "There are no implications",
  //     "Certain code changes may prevent further editing in the GUI editor",
  //     "It automatically improves GUI compatibility",
  //     "It converts the template into JSON"
  //   ],
  //   answer: "Certain code changes may prevent further editing in the GUI editor"
  // },
  // {
  //   id: 18,
  //   question: "How should variables with parentheses be escaped in Handlebars JS for FormTrak templates?",
  //   options: [
  //     "Replace parentheses with quotation marks",
  //     "Use Handlebars escaping or proper bracket syntax around the variable",
  //     "Remove the parentheses entirely",
  //     "Convert the variable to a comment"
  //   ],
  //   answer: "Use Handlebars escaping or proper bracket syntax around the variable"
  // },
  // {
  //   id: 19,
  //   question: "What is the recommended approach for adding a third set of brackets when HTML is present in CCFs within FormTrak templates?",
  //   options: [
  //     "Use triple curly braces to render HTML content without escaping",
  //     "Replace HTML with plain text",
  //     "Remove the variable entirely",
  //     "Use square brackets instead of curly braces"
  //   ],
  //   answer: "Use triple curly braces to render HTML content without escaping"
  // },
  // {
  //   id: 20,
  //   question: "How can disappearing bullet points in emails generated from FormTrak templates be resolved, especially when using Outlook?",
  //   options: [
  //     "Convert lists to images",
  //     "Apply inline CSS and ensure proper list structure supported by Outlook",
  //     "Remove all bullet lists",
  //     "Replace bullet lists with numbered paragraphs"
  //   ],
  //   answer: "Apply inline CSS and ensure proper list structure supported by Outlook"
  // }
];
