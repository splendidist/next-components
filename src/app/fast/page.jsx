import { SlowComponent } from "@/app/components/SlowComponent";
import { Suspense } from "react";
import Loading from "./loading";

export default function FastPage() {
  return (
    <div>
      <h2>Fast page</h2>
      <p>This will not need to load in</p>
      <Suspense fallback={<Loading />}>
        <SlowComponent />
      </Suspense>
      <p>This will not need to load in</p>
    </div>
  );
}
