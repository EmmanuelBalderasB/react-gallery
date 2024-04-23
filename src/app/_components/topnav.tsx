import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function TopNav() {
  return (
    <nav
      className="flex w-full items-center justify-between 
    border-b p-4 text-xl font-semibold"
    >
      <div>Gallery</div>

      <SignedOut>
        <div>Sign In</div>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </nav>
  );
}
