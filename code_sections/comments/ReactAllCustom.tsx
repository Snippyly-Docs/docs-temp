
import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../CodeSection';

export default function ReactAllCustom(props: CodeSectionVariant) {

  const highlightRangeMap = {
    1: [[21, 21]],
    2: [[16, 18], [22, 22]],
    3: [[12, 14]],
    4: [[23, 23]],
    5: [[24, 24]],
    6: [[25, 25]],
    7: [[26, 26]],
    8: [[27, 27]],
    9: [[28, 28]],
    10: [[29, 29]],
    11: [[30, 30]],
    12: [[31, 31]],
    13: [[32, 32]],
    14: [[33, 33]],
    15: [[34, 34]],
    16: [[35, 35]],
    17: [[36, 37]],
    18: [[38, 38]],
    19: [[39, 39]],
    20: [[40, 46]],
    21: [[47, 54]],
    22: [[55, 64]],

  };

  const [step, setStep] = useState(1);

  const steps = [
    {
      step: 1,
      title: 'Area selection in Freestyle mode',
      active: step === 1,
      description: (
        <>
        <strong>Whether area selection is enabled.</strong>
          <p><code>Default: true</code> <br /> <br />
            With this mode, users can select an arbitrary area on the DOM and attach a comment to it.</p>
        </>
      )
    },
    {
      step: 2,
      title: 'Allow comments only on certain elements',
      active: step === 2,
      description: (
        <>
          <strong>Provide a list of element DOM IDs where commenting should be allowed.</strong>
          <p>Comments will be disabled for all other elements. Note, this does not impact <code>Popover</code> mode.
          </p>
        </>
      )
    },
    {
      step: 3,
      title: 'Disable comments on certain elements',
      active: step === 3,
      description: (
        <>
          <strong>Add <code>data-velt-comment-disabled</code> attribute to elements where you want to disable commenting.</strong>
        </>
      )
    },
    {
      step: 4,
      title: 'File attachments',
      active: step === 4,
      description: (
        <>
        <strong>Whether file attachments are enabled.</strong>
          <p><code>Default: true</code> <br /> <br />
            When this is on, users can attach images files to their comments. Users can download or delete an attachment.
            Users can attach multiple files at once. <br /> <br />
            Currently we support <code>.png, .jpg, .gif (static & animated), .svg</code> file types upto <code>2MB</code> per file.
          </p>
        </>
      )
    },
    {
      step: 5,
      title: 'AI auto categorization of comments',
      active: step === 5,
      description: (
        <>
          <strong>Whether AI auto-categorization is enabled.</strong>
          <p><code>Default: false</code> <br /> <br />
            We use AI to analyze your comment content and auto-categorize it so users can filter comments easily.
            You can provide a list of custom categories that we should use to categorize the comments (shown below).</p>
        </>
      )
    },
    {
      step: 6,
      title: 'Comment index',
      active: step === 6,
      description: (
        <>
          <strong>Whether comment index is enabled.</strong>
          <p><code>Default: true</code> <br /> <br />
            This appears in the comment sidebar and on the comment pins.
            When this is on, we show a small icon indicating the comment index in the order of creation date.
            This enables users to find and navigate to the desired comment quickly.
          </p>
        </>
      )
    },
    {
      step: 7,
      title: 'Device type indicator',
      active: step === 7,
      description: (
        <>
          <strong>Whether device type indicator is enabled.</strong>
          <p><code>Default: false</code> <br /> <br />
            When this is on, we show a small device type icon indicating which device the comment was created on.
            This is useful especially for design tools, where additional context is needed for debugging issues.</p>
        </>
      )
    },
    {
      step: 8,
      title: 'Comment dialog on hover',
      active: step === 8,
      description: (
        <>
          <strong>Whether the comment dialog shows on hover over the comment pin or the target element.</strong>
          <p><code>Default: true</code></p>
        </>
      )
    },
    {
      step: 9,
      title: 'Comment dialog on target element click',
      active: step === 9,
      description: (
        <>
          <strong>Whether the comment dialog opens when target element is clicked. This is relevant only for Popover mode.</strong>
          <p><code>Default: true</code></p>
        </>
      )
    },
    {
      step: 10,
      title: 'Floating comment dialog',
      active: step === 10,
      description: (
        <>
          <strong>Whether floating comment dialog is shown next to comment pin on hover or click.</strong>
          <p><code>Default: true</code> <br /> <br /></p>
        </>
      )
    },
    {
      step: 11,
      title: 'Ghost comments',
      active: step === 11,
      description: (
        <>
          <strong>Whether to show ghost comments on the DOM.</strong>
          <p><code>Default: false</code> <br /> <br />
          Ghost comments are comments that were once linked to certain content on the DOM but that content is no longer available.
          If this is on, we display ghost comments in gray, close to where they were originally positioned on the DOM.
          </p>
        </>
      )
    },
    {
      step: 12,
      title: 'Ghost comments indicator',
      active: step === 12,
      description: (
        <>
          <strong>Whether to show ghost comment labels in the comment sidebar.</strong>
          <p><code>Default: true</code> <br /> <br />
          Ghost comments are always shown in the comments sidebar so that users can see the history of all comments.
          If this is on, we show a label on the comment in the sidebar indicating that the original content on which this comment was added is no longer available. This sets better expectations with the users.
          </p>
        </>
      )
    },
    {
      step: 13,
      title: 'Moderator mode',
      active: step === 13,
      description: (
        <>
          <strong>Whether comments require moderator approval.</strong>
          <p><code>Default: false</code> <br /> <br />
            By default, when a user adds a comment it is visible to all authenticated users on the same <code>document</code>.
            Moderator mode makes visibility of all comments private to only <code>admin</code> users and the comment author.
            Admin users will see an <b>approve</b> button on the comment dialog. Once approved the comment will be visible to all users who can access the <code>document</code>.
            <br /><br />
            You can set some users as <code>admin</code> by setting the <code>isAdmin</code> property in the <code>User</code> object, during the <code>identify()</code> call.
          </p>
        </>
      )
    },
    {
      step: 14,
      title: 'Priority',
      active: step === 14,
      description: (
        <>
          <strong>Whether to enable setting priorty on comments. </strong>
          <p><code>Default: false</code> <br /> <br />
            When this is on, users can assign a priorty to each comment & filter comment by priorty in the sidebar.
            You can customize the list of priority options as shown below on this page.
          </p>
        </>
      )
    },
    {
      step: 15,
      title: 'Resolve button',
      active: step === 15,
      description: (
        <>
        <strong>Whether to show resolve button on comments. </strong>
          <p><code>Default: true</code> <br /> <br />
          This adds a tick mark button on the top right corner of the comment dialog.
          Clicking on this button will mark the comment as resolved.
          </p>
        </>
      )
    },
    {
      step: 16,
      title: 'Status',
      active: step === 16,
      description: (
        <>
          <strong>Whether to enable the default status dropdown & filters. </strong>
          <p><code>Default: true</code> <br /> <br />
            When this is on, users can assign a status to each comment & filter comment by status in the sidebar.
            You can customize the list of status options as shown below on this page.</p>
        </>
      )
    },
    {
      step: 17,
      title: 'Sign In button',
      active: step === 17,
      description: (
        <>
          <strong>Whether to enable Sign In button on comment dialog when user is anonymous or signed out. </strong>
          <p><code>Default: false</code> <br /> <br />
          This allows anonymous or signed out users to still read the comments but encourages them to sign in if they want to respond to the comments.
          When the user clicks on the sign in button, we will emit an <code>onSignIn()</code> event that you can hook with your own sign in method.
          </p>
        </>
      )
    },
    {
      step: 18,
      title: 'Attach additional context to each comment',
      active: step === 18,
      description: (
        <>
          <strong>This event is emitted when a new comment is created</strong>
          <p><code>Default: false</code> <br /> <br />
          This allows anonymous or signed out users to still read the comments but encourages them to sign in if they want to respond to the comments.
          When the user clicks on the sign in button, we will emit an <code>onSignIn()</code> event that you can hook with your own sign in method.
          </p>
        </>
      )
    },
    {
      step: 19,
      title: 'Take action when comment is updated',
      active: step === 19,
      description: (
        <>
          <strong>Whether to enable Sign In button on comment dialog when user is anonymous or signed out. </strong>
          <p><code>Default: false</code> <br /> <br />
          This allows anonymous or signed out users to still read the comments but encourages them to sign in if they want to respond to the comments.
          When the user clicks on the sign in button, we will emit an <code>onSignIn()</code> event that you can hook with your own sign in method.
          </p>
        </>
      )
    },
    {
      step: 20,
      title: 'Set Custom Categories',
      active: step === 20,
      description: (
        <>
          <strong>Pass custom categories in the <code>customCategory</code> prop.</strong>
          <p><code>Default categories: Question, Feedback, Bug, Other</code>. <br /> <br />
            With custom categories, you can replace the default categories with your own values. <br /> <br />
            Currently, categories are used in the AI autocategorize feature where we autmatically categorize your comments if you enabled the <code>autoCategorize</code> feature.
            These categories are also used in the comments sidebar to filter comments by category. <br /> <br />
          <code>color</code>: Set the category pill background color.
          </p>
        </>
      )
    },
    {
      step: 21,
      title: 'Set Custom Priorites',
      active: step === 21,
      description: (
        <>
          <strong>Pass custom priorities in the <code>customPriority</code> prop.</strong>
          <p><code>Default priorities: P0, P1, P2</code>. <br /> <br />
            With custom priorities, you can replace the default priorities with your own values.
            These priorities are also used in the comment sidebar to filter comments by priority. <br /> <br />
            This will work if you have enabled the <code>priority</code> feature.
          <br /> <br />
          <code>color</code>: Sets the icon color.<br />
          <code>lightColor</code>: Sets the background color of the filter.
          </p>
        </>
      )
    },
    {
      step: 22,
      title: 'Set Custom Statuses',
      active: step === 22,
      description: (
        <>
          <strong>Set custom statuses in the <code>customStatus</code> prop.</strong>
          <p><code>Default statuses: Open, In Progress, Resolved</code>. <br /> <br />

          With custom statuses, you can replace the default statuses with your own values.
          These statuses are also used in the comment sidebar to filter comments by status. <br /> <br />

          <strong>1. Set Status type:</strong>
          <code>default</code>: This will be the default status assigned to each comment.<br />
          <code>ongoing</code>: This is treated as an intermediary status, you can add as many statuses with type <code>ongoing</code> as you want.<br />
          <code>terminal</code>: This represents a status that is completed. Comments with this status type are no longer shown in the DOM.
          <br /> <br />
          <strong>2. Set Status Icon:</strong>
          You can pass in a serialized SVG. We automatically parse and colorize SVGs.
          If insptead you pass in an icon URL, you will have to colorize each icon yourself to match the status color.
          </p>
        </>
      )
    },
    
  ];

  const code = `
import { VeltComments } from '@veltdev/react';

export default function App() {

  const yourSignInMethod = async () => {    
    // Add your sign in logic here
  };

  return (
    <>

      <div data-velt-comment-disabled>
        // This element cannot be commented on
      </div>

      <div id="some-element">
        // Only this element can be commented on if you set allowedElementIds
      </div>

      <VeltComments
        areaMode={true}
        allowedElementIds={['some-element']}
        attachments={true}
        autoCategorize={true}
        commentIndex={true}
        deviceInfo={true}
        dialogOnHover={true}
        dialogOnTargetElementClick={true}
        floatingMode={false}
        ghostComments={false}
        ghostCommentsIndicator={false}
        moderatorMode={true}
        priority={true}
        resolveButton={true}
        status={false}
        signInButton={true}
        onSignIn={() => yourSignInMethod()}
        onCommentAdd={() => yourMethod()}
        onCommentUpdate={() => yourMethod()}
        customCategory={[
          {
            "id": "bug",
            "name": "Bug",
            "color": "red"
          },
        ]}
        customPriority={[
          {
            "id": "low",
            "name": "Low",
            "color": "red",
            "lightColor": "pink",
          },
        ]}
        customStatus={[
          {
            "id": "open",
            "name": "Open",
            "color": "white",
            "type": "default",
            "iconUrl": "", // Pass in an icon URL
            "svg": "<svg></svg>" // Pass in a serialized SVG
          },
        ]}

      />

    </>
  );
}
    `;

  return <CodeSection sectionId={props.sectionId} mode="jsx" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />
}