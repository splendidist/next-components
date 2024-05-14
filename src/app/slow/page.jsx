import { SlowComponent } from "@/app/components/SlowComponent";

export default function SlowPage() {
  // throw new Error("I deliberately broke this page, because I'm a bad person");
  return (
    <div>
      <h2>Slow page</h2>
      <p>The whole page will need to load in if you dont use Suspense</p>
      <SlowComponent />
    </div>
  );
}
