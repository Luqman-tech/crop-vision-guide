
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";

// Pages
import Landing from "@/pages/Landing";
import Index from "@/pages/Index";
import Camera from "@/pages/Camera";
import Results from "@/pages/Results";
import History from "@/pages/History";
import Community from "@/pages/Community";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TestOnnx from "@/pages/TestOnnx";
import CameraTest from "@/pages/CameraTest";
import DeploymentStatus from "@/pages/DeploymentStatus";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Index />} />
            <Route path="/camera" element={<Camera />} />
            <Route path="/results" element={<Results />} />
            <Route path="/history" element={<History />} />
            <Route path="/community" element={<Community />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/test-onnx" element={<TestOnnx />} />
            <Route path="/camera-test" element={<CameraTest />} />
            <Route path="/deployment-status" element={<DeploymentStatus />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
