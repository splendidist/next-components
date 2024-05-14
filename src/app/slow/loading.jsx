// export default function Loading() {
//   return (
//     <div>
//       <p className="text-green-400">Loading your slow page...</p>
//     </div>
//   );
// }

"use client";
import SyncLoader from "react-spinners/SyncLoader";

export default function Loading() {
  return (
    <div>
      <SyncLoader loading={true} color="pink" />
      <p>Loading your slow page...</p>
    </div>
  );
}
