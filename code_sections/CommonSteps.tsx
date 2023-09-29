
export function createUseEffectStep(currentStep: number, stepNum: number) {
  return {
    step: stepNum,
    title: 'Create a useEffect hook',
    active: currentStep === stepNum,
    description: (
      <>
        <strong>Create an effect with the <code>client</code> as a dependency.</strong>
        <p>Make sure to check if the <code>client</code> is <code>null</code> or <code>undefined</code> before you use it.</p>
      </>
    )
  };
}

export function createGetSnippylyStep(currentStep: number, stepNum: number) {
  return {
    step: stepNum,
    title: 'Get the Velt client',
    active: currentStep === stepNum,
    description: (
      <>
        <strong>Import the <code>useVeltClient</code> React hook.</strong>
        <p>You can use this hook within your component to fetch the Velt client.</p>
      </>
    )
  };
}

export function createGetInstanceStep(currentStep: number, stepNum: number, instanceType: string) {
  return {
    step: stepNum,
    title: `Get an instance of the ${instanceType} element`,
    active: currentStep === stepNum,
    description: (
      <>
        <strong>Fetch the {instanceType} element from the Velt client.</strong>
        <p>At this point, the Velt instance should be loaded and available to you on the <code>window</code> object.</p>
      </>
    )
  };
}

export function createPartSteps(currentStep: number) {
  return [
    {
      step: 1,
      title: 'Select the part you want to modify',
      active: currentStep === 1,
      description: (
        <>
          <strong>We offer several parts which can be used like classes. Full list below.</strong>
          <p>The component is encapsulated in Shadow DOM, which is isolated from the normal DOM.</p>
        </>
      )
    },
    {
      step: 2,
      title: 'Apply your CSS rules',
      active: currentStep === 2,
      description: (
        <>
          <strong>Set whatever CSS rules you want.</strong>
          <p>The part lets you target a specific element within a Shadow DOM.</p>
        </>
      )
    },
    {
      step: 3,
      title: 'Check out the table below',
      active: currentStep === 3,
      description: (
        <>
          <strong>Reference the table below to see what parts we expose.</strong>
          <p>Alternatively, you can directly inspect the component HTML to see what parts are available.</p>
        </>
      )
    }];
}

export function createVariableSteps(currentStep: number, component: string) {
  return [
    {
      step: 1,
      title: `Select the ${component} component`,
      active: currentStep === 1,
      description: (
        <>
          <strong>You can select the {component} component.</strong>
          <p>Our CSS variables are set at the component level.</p>
        </>
      )
    },
    {
      step: 2,
      title: 'Modify a CSS variable',
      active: currentStep === 2,
      description: (
        <>
          <strong>Set the variable to anything you want.</strong>
          <p>We expose a set of variables so you can customize the component to better match your UI.</p>
        </>
      )
    },
    {
      step: 3,
      title: 'Check out the table below',
      active: currentStep === 3,
      description: (
        <>
          <strong>Reference the table below to see what variables we expose.</strong>
          <p>Alternatively, you can directly inspect the component CSS to see what variables are available.</p>
        </>
      )
    }
  ];
}