import { Suspense } from "react";
import ErrorBoundary from "./ErrorBoundary";

function AsyncBoundary({ pendingFallback, children, ...props }) {
  return (
    <ErrorBoundary {...props}>
      <Suspense fallback={pendingFallback}>
        {children}
      </Suspense>
    </ErrorBoundary>
  );
}

export default AsyncBoundary;