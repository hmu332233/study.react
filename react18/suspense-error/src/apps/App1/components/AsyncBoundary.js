import { Suspense } from "react";
import ErrorBoundary from "./ErrorBoundary";

function AsyncBoundary({ pendingFallback, rejectFallback, children, ...props }) {
  return (
    <ErrorBoundary fallback={rejectFallback} {...props}>
      <Suspense fallback={pendingFallback}>
        {children}
      </Suspense>
    </ErrorBoundary>
  );
}

export default AsyncBoundary;