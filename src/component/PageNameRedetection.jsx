"use client";
import { useEffect } from "react";
import { useGlobalStates } from "@/globalState"; 

const PageNameRedetection = () => {
  const { setPage, page } = useGlobalStates();

  useEffect(() => {
    if (page === null || page === undefined || page === "") {
      const pathname = window.location.pathname;
      const pathParts = pathname.split("/");
      const pathSegment = pathParts[pathParts.length - 1];
      setPage(pathSegment);
    }
  }, [page, setPage]);
  return null;
};

export default PageNameRedetection;
