"use client";

import { revalidateCmsUpdate } from "@/actions/revalidate-cms-update";
import { useEffect, useState } from "react";

export default function DecapCms() {
  const [isDecapLoaded, setIsDecapLoaded] = useState(false);

  useEffect(() => {
    loadDecapScript();
  }, []);

  async function registerEvents() {
    // @ts-ignore
    while (!window.hasOwnProperty('CMS')) {
      await new Promise(f => setTimeout(f, 200));
    }
    // @ts-ignore
    CMS.registerEventListener({
      name: 'postPublish',
      handler: () => revalidateCmsUpdate()
    });
  }

  useEffect(() => {
    registerEvents();
  }, [isDecapLoaded])

  const loadDecapScript = () => {
      let script = document.createElement('script');
      script.src = "https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js";
      document.body.append(script);
      script.onload = () => {
        setIsDecapLoaded(true); // setting flag true here
      };
  }

  return (
    <div></div>
  )
}

