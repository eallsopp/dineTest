import SignUpForm from "../../components/signupform";

import { title } from "@/components/primitives";

export default function SignUpPage() {
  return (
    <div>
      <h1 className={title()}>Sign Up</h1>
      <SignUpForm />
    </div>
  );
}