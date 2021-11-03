import Link from "next/link";
import { useState } from "react";
import { SITE_NAME } from "../lib/constants";
import { copyToClipboard } from "../lib/utils";

const CommandBlockWithTitle = ({ label, command, filePath,info }) => {
  const [isCopied, setIsCopied] = useState(false);
  const rawLink = SITE_NAME + "/raw" + filePath;
  const link = SITE_NAME + filePath;
  return (
    <>
      <p className="mt-2 text-lg">{label}</p>
      <p className="relative px-1 mt-2 text-base text-white bg-black rounded">
        <span>{command + " "}</span>
        <Link href={link}>
          <a className="underline cursor-pointer">{link}</a>
        </Link>
      </p>
      <div className="mt-2 mb-4 text-base">
        <button
          className="border-b-2 border-black"
          onClick={() => {
            copyToClipboard(`${command} ${link}`).then(() => {
              setIsCopied(true);
              setTimeout(() => setIsCopied(false), 3000);
            });
          }}
        >
          {isCopied ? "Copied" : "Copy"}
        </button>
        {" | "}
        <Link href={rawLink}>
          <a>Raw</a>
        </Link>
      </div>
      <div>{info}</div>
    </>
  );
};
export default CommandBlockWithTitle;
