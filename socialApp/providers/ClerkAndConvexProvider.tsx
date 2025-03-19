import { tokenCache } from "@/cache";
import { ClerkProvider } from "@clerk/clerk-expo";
import { ClerkLoaded, useAuth } from "@clerk/clerk-react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ConvexReactClient } from "convex/react";

const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!,
{
    unsavedChangesWarning: false,

});
const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!

if (!publishableKey) {
  throw new Error(
    'Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env',
  )
}

export default function ClerkAndConvexProvider({ children}: { children: React.ReactNode }) {
  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
          <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
            <ClerkLoaded>

            </ClerkLoaded>
          </ConvexProviderWithClerk>
          
    </ClerkProvider>
  )
}