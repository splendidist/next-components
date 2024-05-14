"use client";

export default function BrokenPage() {
  throw new Error(
    " Something got broked. Funny error message that disarms the user so they don't leave the website..."
  );

  return (
    <div>
      <h2>Yippee, there was no error!</h2>
      <p>Will you ever see this?</p>
    </div>
  );
}
