import {
  onNewPasswordProvidedEvent,
  WorkflowSettings,
  WorkflowTrigger,
  invalidateFormField
} from "@kinde/infrastructure";

// The setting for this workflow
export const workflowSettings: WorkflowSettings = {
  name: "Custom Password Validation",
  id: "onNewPasswordProvided",
  trigger: WorkflowTrigger.NewPasswordProvided,
  bindings: {
    "kinde.widget": {}
  }
};

// The workflow code to be executed when the event is triggered
export default async function Workflow(event: onNewPasswordProvidedEvent) {
  const { firstPassword } = event.context.auth

  if(firstPassword !== "hello")

  invalidateFormField("p_first_password", "The first password is not hello!")


}