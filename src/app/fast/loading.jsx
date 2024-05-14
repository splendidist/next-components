"use client";
import SyncLoader from "react-spinners/SyncLoader";

export default function Loading() {
  return (
    <div>
      <SyncLoader loading={true} color="pink" />
      <p>Loading your slow component...</p>
    </div>
  );
}
