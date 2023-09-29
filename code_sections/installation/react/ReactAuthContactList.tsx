import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../../CodeSection';

export default function ReactAuthContactList(props: CodeSectionVariant) {
  const highlightRangeMap = {
    1: [[20, 20]],
    2: [[24, 39]],
    3: [[37, 37]],
  };

  const [step, setStep] = useState(1);

  const steps = [
    {
      step: 1,
      title: 'Set a user group',
      active: step === 1,
      description: (
        <>
          <strong>Users in the same group get added to each other's contact list.</strong>
          <p>They can then access this list across all the features wherever a contact list is needed. Eg: @mention other users in comments to tag or assign tasks.
            <br />
            Over time, as users from the same <code>groupId</code> sign in, they will be automatically added to each other's contact list.
          </p>
        </>
      )
    },
    {
      step: 2,
      title: 'Manually bootstrap user contact list',
      active: step === 2,
      description: (
        <>
          <strong>Bootstrap with the complete contact list from the get go.</strong>
          <p>In the previous step, the users will only get added to each others' contact list as & when users in the group log in.
            <br /><br />
            To show the entire user contact list from the get go, you need to manually provide us the list of user contacts during the <code>identify()</code> call.
            <br /><br />

            You still need to implement the previous step. Then set the <code>contacts</code> field with a <code>UserContact</code> list.
            In the <code>UserContact</code> object you need to set the <code>visibility</code> field to <code>'group'</code>.
          </p>
        </>
      )
    },
    {
      step: 3,
      title: 'Add private contacts (optional)',
      active: step === 3,
      description: (
        <>
          <strong>Make some contacts private to the current user.</strong>
          <p>In the <code>UserContact</code> object set the <code>visibility</code> field to <code>'private'</code>.
            This will add all such contacts to only this  User's contact list.
          </p>
        </>
      )
    },
  ];

  const code = `
import { useVeltClient } from '@veltdev/react';
import { useEffect } from 'react';

export default function App() {

  const { client } = useVeltClient();

  useEffect(() => {
    if (client && yourAuthenticatedUser) {
      const { uid, displayName, email, photoURL } = yourAuthenticatedUser;

      const user = {
        userId: uid,
        name: displayName,
        email: email,
        photoUrl: photoURL
      };

      // Use your own logic to determine the group the user belongs to
      user.groupId = 'some-group-id';

      // You can pass contacts as an array of UserContact objects.
      // These contacts will show up in various features (eg: comments) so that user can tag, @mention them. 
      const contacts = [
        {
          userId: 'd5558f1f-bdea-4eb5-9fd5-ed657e460307',
          name: 'John Doe',
          photoUrl: 'https://i.pravatar.cc/300',
          email: 'john.doe@snippyly.com',
          visibility: 'group'
        },
        {
          userId: 'd5558f1f-bdea-4eb5-9fd5-ed657e460308',
          name: 'Mary Doe',
          photoUrl: 'https://i.pravatar.cc/300',
          email: 'mary.doe@snippyly.com',
          visibility: 'private'
        }
      ];
      user.contacts = contacts;

      client.identify(user);
    }
  }, [client, yourAuthenticatedUser]);

  return (
    // Your app template
  );
}
    `;

  return <CodeSection sectionId={props.sectionId} mode="jsx" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />;
}