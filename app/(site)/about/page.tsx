import React from "react";
import About from "@/components/About/";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support Page - Bangladesh Finance Islamic",
  description: "This is Support page for Bangladesh Finance Islamic",
  // other metadata
};

export default function AboutUs() {
    return (
      <>
        <About /> 
      </>
    );
  }



