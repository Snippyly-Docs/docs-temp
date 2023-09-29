import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../../CodeSection';

export default function HTMLCustomPriority(props: CodeSectionVariant) {
  const highlightRangeMap = {
    1: [[12, 29]],
    2: [[17, 17], [22, 22], [27, 27]]
  };

  const [step, setStep] = useState(1);

  const steps = [
    {
      step: 1,
      title: 'Define custom categories',
      active: step === 1,
      description: (
        <>
          <strong>Pass custom categories in the <code>setCustomCategories</code> method of the comment element.</strong>
          <p>We will replace our custom category assignments and filtering functionality to use the values you pass in.</p>
        </>
      )
    },
    {
      step: 2,
      title: 'Set the colors for each category',
      active: step === 2,
      description: (
        <>
          <strong>The <code>color</code> field determines the category pill background color.</strong>
          <p>Categories show up in the comments sidebar. You have to enable the auto-categorize feature for these to show.</p>
        </>
      )
    }
  ];

  const code = `
<!doctype html>
<html lang="en">
  <head>
    <title>Comment documentation</title>
  </head>
  <body>

    <snippyly-comments></snippyly-comments>

    <script>

      const commentElement = window.Velt.getCommentElement();
      commentElement.setCustomCategories([
        {
          "id": "enhancement",
          "name": "Enhancement",
          "color": "lightgrey"
        },
        {
          "id": "bug",
          "name": "Bug",
          "color": "red"
        },
        {
          "id": "feedback",
          "name": "Feedback"
          "color": "yellow"
        }
      ]);

    </script>
    
  </body>
</html>
    `;

  return <CodeSection sectionId={props.sectionId} mode="html" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />;
}