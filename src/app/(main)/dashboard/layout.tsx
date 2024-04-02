import React from "react";
import { SubscriptionModalProvider } from "@/lib/providers/subscription-modal-provider";
import { getActiveProductsWithPrice } from "@/lib/superbase/queries";

interface LayoutProps {
  children: React.ReactNode;
  params: any;
}

const Layout: React.FC<LayoutProps> = async ({ children, params }) => {
  // const { data: products, error } = await getActiveProductsWithPrice();
  // if (error) throw new Error();
  return (
    <main className="flex over-hidden h-screen">
      {/* <SubscriptionModalProvider products={products}>
        {children}
      </SubscriptionModalProvider> */}
      {children}
    </main>
  );
};

export default Layout;
